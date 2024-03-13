import { createContext, PropsWithChildren, useEffect } from 'react';
import { useStorage } from './useStorage';

interface StorageService<T> {
  getItem: (key: string) => Promise<T | undefined>;
  setItem: (key: string, value: T) => Promise<boolean>;
  removeItem: (key: string) => Promise<boolean>;
  clear: () => Promise<boolean>;
}

// Create the StorageContext with default functions for getItem and setItem.
const StorageContext = createContext<StorageService<unknown> | undefined>(undefined);

// StorageProvider: A React component that wraps the application and provides the storage context with getItem and setItem methods.
export function StorageProvider<T extends Record<string, T> | undefined>({ initialValue = {} as T, children }: PropsWithChildren<{ initialValue?: T }>) {
  const [storedValue, setStoredValue] = useStorage<Record<string, T>>({ initialValue: { ...initialValue } });

  // Initializes the state with the value from the local storage if it exists.
  useEffect(() => {
    const item = localStorage.getItem('key');
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, []);

  // Updates the local storage whenever the state changes.
  useEffect(() => {
    if (storedValue) {
      localStorage.setItem('key', JSON.stringify(storedValue));
    }
  }, [storedValue]);

  // Define the getItem method that retrieves the value from the local storage or returns undefined if it doesn't exist.
  const getItem = async (key: string): Promise<T | undefined> => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  }

  // Define the setItem method that updates the local storage and the state with the new value.
  const setItem = async (key: string, value: T): Promise<boolean> => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue({ ...storedValue, [key]: value });
    return true;
  };

  const removeItem = async (key: string): Promise<boolean> => {
    localStorage.removeItem(key);
    setStoredValue((prevData) => {
      const newData = { ...prevData };
      delete newData[key];
      return newData;
    });
    return true;
  };

  const clear = async (): Promise<boolean> => {
    localStorage.clear();
    setStoredValue({});
    return true;
  };

  // Destructure getItem and setItem before using them in the StorageContext.Provider value prop.
  const contextValue: StorageService<T> = { getItem, setItem, removeItem, clear };

  return (
    <StorageContext.Provider value={contextValue as StorageService<unknown>}>
      {children}
    </StorageContext.Provider>
  );
}

export default StorageContext;