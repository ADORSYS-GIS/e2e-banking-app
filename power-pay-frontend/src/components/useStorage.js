//importing the useState and useEffect hooks from React.

import { useEffect, useState } from 'react';


//initializing the state with the value retrieved from the localStorage using the provided key

const useStorage = (key) => {


  const [value, setValue] = useState(localStorage.getItem(key));

//useEffect hook to update the localStorage whenever the value changes

  useEffect(() => {


    localStorage.setItem(key, value);
  }, [key, value]);

//returns a setter function called setStoredValue that updates the state and, consequently, the localStorage

  const setStoredValue = (newValue) => {
    setValue(newValue);

  };


  return [value, setStoredValue];
};



export default useStorage;