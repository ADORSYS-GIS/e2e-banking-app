import { useContext, useEffect, useState } from 'react';
import StorageContext, { StorageContextData } from './StorageContext';

// UseStorageProps<T>: An interface defining the props for the useStorage hook
interface UseStorageProps<T> {
  key: string; // the key to use for storing and retrieving the value from local storage
  initialValue?: T; // the initial value to use for the state variable
}

// useStorage<T = string>: A generic function that accepts a UseStorageProps<T> object.
export function useStorage<T = string>({ key, initialValue }: UseStorageProps<T>): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>, () => void] {
  const { item, setItem, removeItem } = useContext(StorageContext) as StorageContextData<T>;

  // Initialize the state variable with the value from the context or the initial value
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    return item[key] ?? initialValue;
  });

  // Update the context when the storedValue changes
  useEffect(() => {
    setItem(key, storedValue as T);
  }, [key, storedValue, setItem]);

  // Clear the item from local storage and reset the stored value
  const clearItem = () => {
    removeItem(key);
    setStoredValue(initialValue); // Reset stored value to initial value
  };

  return [storedValue, setStoredValue, clearItem];
}