// Here we first start by importing the neccassary modules needed to create the Hook.

import { useState, useEffect, useCallback } from 'react';

// we define our hook variable specifying its paramaters and types and also the storing logic
const useStorage = (key: string, defaultValue: number | string | null = null, type?: "local" | "session") => {
 
    const storage = type === "local" ? window.localStorage : type === "session" ? window.sessionStorage : undefined;
 
/* here we use the useState hook to manage the state of the variable stored in the storage(value)
which is gotten from the default value and the setvalue is a function used to update this value.
*/
    const [value, setValue] = useState<any>(() => {

        console.log(storage);


        
        const storageValue = storage?.getItem(key)

        if (storageValue != null) return JSON.parse(storageValue);

        return defaultValue;
    })
    // here we use the useEffect hook to check if the value is present hence we remove the else we update the value 

    useEffect(() => {

        if (value === undefined) return storage?.removeItem(key)

        storage?.setItem(key, JSON.stringify(value))

    }, [key, value, storage])

    // here we use the callback() hook to manage memory by removing values which are undefined

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]

}

export default useStorage;