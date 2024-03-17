import { useState } from 'react';

// UseStorageProps<T>: An interface defining the props for the useStorage hook
interface UseStorageProps<T> {
  key: string; // the key to use for storing and retrieving the value from local storage
  initialValue?: T | undefined; // the initial value to use for the state variable
}

// useStorage<T = string>: A generic function that accepts a UseStorageProps<T> object.
export function useStorage<T = string>(props: UseStorageProps<T>): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const { key, initialValue } = props;

  // storedValue: A state variable that stores the value retrieved from the localStorage using the provided key
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Retrieve the value from local storage using the provided key
    const valueInLocalStorage = localStorage.getItem(key);

    // If the value exists, parse it from JSON and return it. Otherwise, return the initial value.
    return valueInLocalStorage ? JSON.parse(valueInLocalStorage) : initialValue!;
  });

  // adding a new function removeValue to remove the stored value from the localstorage and set it to its initial state
  const removeValue = () => {
    // Set the storedValue to the initial value
    setStoredValue(initialValue!);

    // Remove the value from local storage using the provided key
    localStorage.removeItem(key);
  };

  // Return the storedValue, setStoredValue function, and removeValue function as an array
  return [storedValue, setStoredValue, removeValue];
}
