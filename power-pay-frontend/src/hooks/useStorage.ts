//useState and useEffect hooks from React
import { useState } from 'react';

//UseStorageProps<T>: An interface defining the props for the useStorage hook
interface UseStorageProps<T> {
  initialValue?: T ;
}

//useStorage<T = string>: A generic function that accepts a UseStorageProps<T> object.

export function useStorage<T = string>(props: UseStorageProps<T>): [T, React.Dispatch<React.SetStateAction<T>> , () => void] {

  const { initialValue } = props;

  //storedValue: A state variable that stores the value retrieved from the localStorage using the provided key

  const [storedValue, setStoredValue] = useState<T>(initialValue!);
;

  //adding a newfunction removeValue to remove the stored value from the localstorage and set it to its initial state

  const removeValue = () => {
    setStoredValue(initialValue!);
  };

  return [storedValue, setStoredValue , removeValue];
}