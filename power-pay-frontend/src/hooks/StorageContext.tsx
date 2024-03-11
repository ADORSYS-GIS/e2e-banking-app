import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

// Define the interface for the StorageContext that holds two methods: getItem and setItem.
interface StorageContextData<T> {
  getItem: (key: string) => T | undefined;
  setItem: (key: string, value: T) => void;
}

// Create the StorageContext with default functions for getItem and setItem.
const StorageContext = createContext<StorageContextData<unknown>>({
  getItem: () => undefined,
  setItem: () => {},
});

// StorageProvider: A React component that wraps the application and provides the storage context with getItem and setItem methods.
export function StorageProvider<T>({ initialValue, children }: PropsWithChildren<{ initialValue?: T }>) {
  const [storedValue, setStoredValue] = useState<T | undefined>(initialValue);

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
  const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  };

  // Define the setItem method that updates the local storage and the state with the new value.
  const setItem = (key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  // Destructure getItem and setItem before using them in the StorageContext.Provider value prop.
  const contextValue: StorageContextData<unknown> = { getItem, setItem } as StorageContextData<unknown>;

  return (
    <StorageContext.Provider value={contextValue}>
      {children}
    </StorageContext.Provider>
  );
}

// useStorage: A custom hook that returns the getItem and setItem methods from the StorageContext.
export function useStorage<T = string>() {
  const { getItem, setItem } = useContext(StorageContext) as StorageContextData<T>;
  return [getItem, setItem];
}