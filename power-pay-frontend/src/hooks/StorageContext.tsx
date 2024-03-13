import { createContext, PropsWithChildren, useEffect } from 'react';
import { useStorage } from './useStorage';

interface StorageService<T> {
  getItem: (key: string) => Promise<T | undefined>;
  setItem: (key: string, value: T) => Promise<boolean>;
  removeItem: (key: string) => Promise<boolean>;
  clear: () => Promise<boolean>;
}

// Create the StorageContextData interface.
interface StorageContextData<T> {
  getItem: (key: string) => Promise<unknown | undefined>;
  setItem: (key: string, value: T) => Promise<boolean>;
  removeItem: (key: string) => Promise<boolean>;
  clear: () => Promise<boolean>;
}


// Creating  a fake implementation of the StorageContextData interface.
const fakeStorage: StorageContextData<unknown> = {
  getItem: async (key: string): Promise< unknown | undefined> => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item): undefined;
  },
  setItem: async (key: string, value: unknown): Promise<boolean> => {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  },
  removeItem: async (key: string): Promise<boolean> => {
    localStorage.removeItem(key);
    return true;
  },
  clear: async (): Promise<boolean> => {
    localStorage.clear();
    return true;
  },
};


// Create the StorageContext with default functions for getItem and setItem.
const StorageContext = createContext<StorageService<unknown> | undefined>(fakeStorage);

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


  // Destructure getItem and setItem before using them in the StorageContext.Provider value prop.
  const contextValue: StorageService<T> = { getItem: fakeStorage.getItem, setItem: fakeStorage.setItem, removeItem: fakeStorage.removeItem, clear: fakeStorage.clear };

  return (
    <StorageContext.Provider value={contextValue as StorageService<unknown>}>
      {children}
    </StorageContext.Provider>
  );
}

export default StorageContext;