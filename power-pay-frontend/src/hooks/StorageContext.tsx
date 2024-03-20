import { createContext, PropsWithChildren, useEffect, useState } from 'react';

// Define the StorageContextData interface.
export interface StorageContextData<T> {
  item: Record<string, T>;
  setItem: (key: string, value: T) => Promise<boolean>;
  removeItem: (key: string) => Promise<boolean>;
  clear: () => Promise<boolean>;
}

// Define the StorageService interface.
interface StorageService {
  getItem: <T>(key: string) => Promise<T | undefined>;
  setItem: <T>(key: string, value: T) => Promise<boolean>;
  removeItem: (key: string) => Promise<boolean>;
  clear: () => Promise<boolean>;
}

// Define the LocalStorageService class implementing the StorageService interface.
export class LocalStorageService implements StorageService {
  async getItem<T>(key: string): Promise<T | undefined> {
    const found = localStorage.getItem(key);
    if (!found) return undefined;
    return JSON.parse(found) as T;
  }

  async setItem<T>(key: string, value: T): Promise<boolean> {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  async removeItem(key: string): Promise<boolean> {
    localStorage.removeItem(key);
    return true;
  }

  async clear(): Promise<boolean> {
    localStorage.clear();
    return true;
  }
}

// Define a global constant for the key.
const STORAGE_KEY = 'new_key';

// Create the StorageContext with default functions for getItem and setItem.
const StorageContext = createContext<StorageContextData<unknown> | undefined>(undefined);

// Define the StorageProvider component.
export function StorageProvider<T>({ children, storageService }: PropsWithChildren<{ storageService: StorageService }>) {
  const [storedValue, setStoredValue] = useState<Record<string, T>>({});

  // Initialize the state with the value from the local storage if it exists.
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
    storageService.setItem(STORAGE_KEY, storedValue); 
  }, [storageService, storedValue]);

  // Remove the item from local storage and set the stored value to undefined
  const clearItem = async (key: string): Promise<boolean> => {
    localStorage.removeItem(key);
    setStoredValue((prevState) => {
      const newState = { ...prevState };
      delete newState[key];
      return newState;
    });
    return true;
  };

  // Define the context value.
  const contextValue: StorageContextData<T> = {
    item: storedValue,
    setItem: async (key, value) => {
      setStoredValue((prevState) => ({
        ...prevState,
        [key]: value,
      }));
      return true;
    },
    removeItem: async (key) => clearItem(key),
    clear: async () => {
      localStorage.clear();
      setStoredValue({});
      return true;
    },
  };

  return (
    <StorageContext.Provider value={contextValue}>
      {children}
    </StorageContext.Provider>
  );
}

export default StorageContext;
