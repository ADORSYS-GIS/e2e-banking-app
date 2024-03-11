import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

// The getItem method returns the value associated with the given key if it exists in the local storage, otherwise returns undefined.
// The setItem method sets the value in the local storage for the given key and updates the state with the new value.
interface StorageContextData<T> {
 getItem: <T>(key: string) => T | undefined;
 setItem: <T>(key: string, value: T) => void;
}

// Initialize the StorageContext with default functions for getItem and setItem.
const StorageContext = createContext<StorageContextData<unknown>>({
 getItem: () => undefined,
 setItem: () => {},
});

// StorageProvider<T>: A React component that wraps the application and provides the storage context with getItem and setItem methods.
// It initializes the state with the value from the local storage if it exists.

export function StorageProvider<T>({ initialValue, children }: PropsWithChildren<{ initialValue?: T }>) {
 const [storedValue, setStoredValue] = useState<T>(initialValue);

 // Initializes the state with the value from the local storage if it exists.
 useEffect(() => {
   const item = localStorage.getItem('key');
   if (item) {
     setStoredValue(JSON.parse(item));
   }
 }, []);

 // Updates the local storage whenever the state changes.
 useEffect(() => {
   localStorage.setItem('key', JSON.stringify(storedValue));
 }, [storedValue]);

 // Define the getItem method that retrieves the value from the local storage or returns undefined if it doesn't exist.
 const getItem = <T>(key: string) => {
   const item = localStorage.getItem(key);
   return item ? JSON.parse(item) : undefined;
 };

 // Define the setItem method that updates the local storage and the state with the new value.
 const setItem = <T>(key: string, value: T) => {
   localStorage.setItem(key, JSON.stringify(value));
   setStoredValue(value);
 };

 return (
   <StorageContext.Provider value={{ getItem, setItem }}>
     {children}
   </StorageContext.Provider>
 );
}

// useStorage<T = string>(): A custom hook that returns the getItem and setItem methods from the StorageContext.
export function useStorage<T = string>() {
 const { getItem, setItem } = useContext(StorageContext);
 // Cast the getItem and setItem methods to the correct types.
 return [getItem as StorageContextData<T>['getItem'], setItem as StorageContextData<T>['setItem']];
}