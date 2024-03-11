import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface StorageContextData<T> {
  getItem: (key: string) => T | undefined;
  setItem: (key: string, value: T) => void;
}

interface StorageProviderProps<T> extends PropsWithChildren {
  initialValue?: T;
}

const StorageContext = createContext<StorageContextData<unknown>>({
  getItem: () => undefined,
  setItem: () => {},
});

//StorageProvider component is a wrapper component that uses the StorageContext to provide the storage-related functionality

export function StorageProvider<T>({ initialValue }: StorageProviderProps<T>) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  //useEffect hook  used to initialize the state with the value from the localStorage if it exists

  useEffect(() => {
    const item = localStorage.getItem('key');
    if (item) {
      try {
        setStoredValue(JSON.parse(item));
      } catch (error) {
        console.error("Error parsing stored value:", error);
      }
    }
  }, []);

  //useEffect hook is used to update the localStorage whenever the state changes. It updates the localStorage with the current state value.
  useEffect(() => {
    try {
      localStorage.setItem('key', JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting stored value:", error);
    }
  }, [storedValue]);

  
  //StorageProvider also provides two functions (getItem and setItem) via the StorageContext that can be used by its child components
  const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item);
      } catch (error) {
        console.error("Error parsing item:", error);
      }
    }
    return undefined;
  };
   
  const setItem = (key: string, value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error("Error setting item:", error);
    }
  };

  return (
    <StorageContext.Provider value={{ getItem, setItem }}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorage<T = string>() {
  const { getItem, setItem } = useContext(StorageContext);
  return [getItem, setItem] as [StorageContextData<T>['getItem'], StorageContextData<T>['setItem']];
}
