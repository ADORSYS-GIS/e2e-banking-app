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
export function StorageProvider<T>({ initialValue, children }: PropsWithChildren<{ initialValue?: T }>) {
  const [storedValue, setStoredValue] = useStorage<T | undefined>({ initialValue: { ...initialValue } });

// Define a global constant for the key.
  const STORAGE_KEY = 'key';

  // Initializes the state with the value from the local storage if it exists.
  useEffect(() => {
    const item = localStorage.getItem('STORAGE_KEY');
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, []);

  // Updates the local storage whenever the state changes.
  useEffect(() => {
    if (storedValue) {
      setItemWrapper(STORAGE_KEY, storedValue);
    }
  }, [storedValue]);

   // Defining a wrapper function for the setItem method that updates the local storage and the state with the new value.
   const setItemWrapper = async (key: string, value: T | undefined) => {
    fakeStorage.setItem(key, value);
    setStoredValue(value);
    return true;
  };

// Destructure getItem and setItem before using them in the StorageContext.Provider value prop.
const contextValue: StorageService<T> = {
  getItem: fakeStorage.getItem,
  setItem: setItemWrapper,
  removeItem: fakeStorage.removeItem,
  clear: fakeStorage.clear,
};
return (
  <StorageContext.Provider value={contextValue as StorageService<unknown>}>
    {children}
  </StorageContext.Provider>
);
}


export default StorageContext;