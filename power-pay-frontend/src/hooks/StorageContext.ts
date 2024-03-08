import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

// StorageContextData<T>: An interfac defining the shape of the storage context data, which includes two functions: getItem and setItem
interface StorageContextData<T> {
  getItem: (key: string) => T | undefined;
  setItem: (key: string, value: T) => void;
}

// StorageProviderProps<T>: An interface defining the props for the StorageProvider component, which includes the initialValue prop and the children to be rendered
interface StorageProviderProps<T> extends PropsWithChildren {
  initialValue?: T;
}

// Create a context for storing and accessing items in localStorage
const StorageContext = createContext<StorageContextData<unknown>>({
  getItem: () => undefined,
  setItem: () => {},
});

// StorageProvider<T>: A functional component that uses the StorageContext to provide the storage-related functionality
export function StorageProvider<T>({ initialValue, children }: StorageProviderProps<T>) {
  // Initialize the state variable storedValue with the initialValue prop, if provided, using useState hook
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Initialize the state with the value from the localStorage if it exists, using useEffect hook
  useEffect(() => {
    const item = localStorage.getItem('key');
    if (item) {
      try {
        // If the item exists, parse the JSON string and update the state with the parsed value
        setStoredValue(JSON.parse(item));
      } catch (error) {
        console.error("Error parsing stored value:", error);
      }
    }
  }, []);

  // Update the localStorage whenever the state changes, using useEffect hook
  useEffect(() => {
    try {
      // If the storedValue changes, stringify the value and update the localStorage
      localStorage.setItem('key', JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting stored value:", error);
    }
  }, [storedValue]);

  // getItem: A function that retrieves an item from the localStorage by key, using the getItem method from the StorageContext
  const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        // If the item exists, parse the JSON string and return the value
        return JSON.parse(item);
      } catch (error) {
        console.error("Error parsing item:", error);
      }
    }
    return undefined;
  };

  // setItem: A function that saves an item to the localStorage by key, using the setItem method from the StorageContext
  const setItem = (key: string, value: T) => {
    try {
      // If the value changes, stringify the value and update the localStorage
      localStorage.setItem(key, JSON.stringify(value));
      // Update the state with the new value
      setStoredValue(value);
    } catch (error) {
      console.error("Error setting item:", error);
    }
  };

  // Provide the getItem and setItem functions to the child components through the StorageContext
  return (
    <StorageContext.Provider value={{ getItem, setItem }}>
      {children}
    </StorageContext.Provider>
  );
}

// useStorage<T = string>: A custom React hook that accepts a UseStorageProps<T> object and returns the getItem and setItem functions
export function useStorage<T = string>() {
  const { getItem, setItem } = useContext(StorageContext);
  // Cast the getItem and setItem functions to the correct types
  return [getItem as StorageContextData<T>['getItem'], setItem as StorageContextData<T>['setItem']];
}