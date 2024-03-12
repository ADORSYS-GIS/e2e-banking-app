//useState and useEffect hooks from React
import { useEffect, useState } from 'react';

//UseStorageProps<T>: An interface defining the props for the useStorage hook
interface UseStorageProps<T> {
  key: string;
  initialValue?: T | undefined ;
}

//useStorage<T = string>: A generic function that accepts a UseStorageProps<T> object.

export function useStorage<T = string>(props: UseStorageProps<T>): [T, React.Dispatch<React.SetStateAction<T>> , () => void] {

  const { key, initialValue } = props;

  //storedValue: A state variable that stores the value retrieved from the localStorage using the provided key

  const [storedValue, setStoredValue] = useState<T>(() => {
     const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue
  });

  //runs when the storedValue changes. It updates the localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  //adding a newfunction removeValue to remove the stored value from the localstorage and set it to its initial state

  const removeValue = () => {
    localStorage.removeItem(key);
    setStoredValue(initialValue!);
  };

  return [storedValue, setStoredValue , removeValue];
}