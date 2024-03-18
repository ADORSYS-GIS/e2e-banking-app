
import { useContext, useEffect, useState } from 'react';
import StorageContext, { StorageContextData } from './StorageContext';

interface UseStorageProps<T> {
  key: string; 
  initialValue?: T | undefined;
}

// useStorage<T = string>: A generic function that accepts a UseStorageProps<T> object.
export function useStorage<T = string>({ key, initialValue }: UseStorageProps<T>): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const { item, setItem, removeItem } = useContext(StorageContext) as StorageContextData<T>;

  // Initialize the state variable with the initial value or the value from the local storage
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    return item[key] ?? initialValue;
  });

  // Another useEffect for updating the stored value when the context changes
  useEffect(() => {
    setStoredValue(item[key] ?? initialValue);
  }, [item, key, initialValue]);

  useEffect(() => {
    setItem(key, storedValue!);
  }, [key, storedValue, setItem]);

  // Remove the item from local storage and set the stored value to undefined
  const clearItem = () => {
    removeItem(key);
    setStoredValue(undefined)
  };

  return [storedValue!, setItem, clearItem];
}
