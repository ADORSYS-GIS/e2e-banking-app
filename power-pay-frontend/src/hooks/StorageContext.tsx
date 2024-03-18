import { createContext, PropsWithChildren, useEffect, useState } from 'react';


// Create the StorageContextData interface.
interface StorageContextData<T> {
  item: Record<string, T>;
  setItem: (key: string, value: T) => Promise<boolean>; // adding a key into the map
  removeItem: (key: string) => Promise<boolean>; // remove a key from the map
  clear: () => Promise<boolean>; // clear the map
}


interface StorageService {
  getItem: <T>(key: string) => Promise<T | undefined>;
  setItem: <T>(key: string, value: T) => Promise<boolean>;
  removeItem: (key: string) => Promise<boolean>;
  clear: () => Promise<boolean>;
}


export class LocalStorageService implements StorageService {
  removeItem!: (key: string) => Promise<boolean>;
  clear!: () => Promise<boolean>;
  async getItem<T>(key: string) {
    const found = localStorage.getItem(key);
    if (!found) return undefined;
    return JSON.parse(found) as T;
  }

  async setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

}


// Define a global constant for the key.
const STORAGE_KEY = 'key';

// Create the StorageContext with default functions for getItem and setItem.
const StorageContext = createContext<StorageContextData<unknown> | undefined>(undefined);

// StorageProvider: A React component that wraps the application and provides the storage context with getItem and setItem methods.
export function StorageProvider<T>({ children, storageService }: PropsWithChildren<{ storageService: StorageService }>) {
  const [storedValue, setStoredValue] = useState<Record<string, unknown>>({});

  // Initializes the state with the value from the local storage if it exists.
  useEffect(() => {
    storageService
      .getItem<Record<string, T>>(STORAGE_KEY)
      .then((item) => {
        if (item) {
          setStoredValue(item);
        }
      });
  }, [storageService]);

  // Updates the local storage whenever the state changes.
  useEffect(() => {
    if (storedValue !== undefined) {
      storageService.setItem(STORAGE_KEY, storedValue);
    }
  }, [storageService, storedValue]);

  // Destructure getItem and setItem before using them in the StorageContext.Provider value prop.
  const contextValue: StorageContextData<unknown> = {
    item: storedValue,
    setItem: async (key, value) => {
      setStoredValue(pre => ({
        ...pre, [key]: value
      }))
      return true;
    },

  
    removeItem: (key) => storageService.removeItem(key),
    
    clear: () => storageService.clear(),
  };

  return (
    <StorageContext.Provider value={contextValue}>
      {children}
    </StorageContext.Provider>
  );
}

export default StorageContext;
