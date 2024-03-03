#             useStorage()  HOOK

 
react ***Hooks*** are special functions which lets us use reusable state and other react features without having to write class components for those features . react provide some build in hooks such as ***useState***, ***useEffect***, ***useCallback*** etc which permits use to use reacts state and features in an effective and reusable manner. we are going to be needed this three hooks inother to build out ***useStorage*** hook. 

##
    The react useStorage hook is a react hook which allows use to easily manage state in a web storage API like a localstorage or sessionstorage
#

**useState** : allows functional components to manage state. it returns a statefull value and a function to update it e.g
    
```javascript
import React, { useState } from 'react';

function Example() {
 // Declare a new state variable, "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
**useEffect** : Allows functional components to perform side Effects it takes two arguments a function and a list of argument(s) for which the function is run s when and item is the list is modified.

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  } [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count++)}>
        Click me
      </button>
    </div>
  );
}
```
**useCallback** : used to optimise performance thats is for memory management
```javascript
import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback to memoize it
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      {/* Pass the memoized callback function to the onClick event handler */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```
now that the hooks required to construct our storage hook have been examined lets look for closer to the useStorage hook.
The useStorage is composed of two other hooks for storing the data either in the localstorage or the session storage which are the ***useLocalStorage*** and ***useSessionStorage**<br>
but we will take them all in one 

the detail implementation of this hook can be found here [Hook](../power-pay-frontend/src/Hooks/useStorage.ts)<br>

And to test this hook on your machine make sure you have node 16 and above install  
The test code is found here [Test](../power-pay-frontend/src/Tests/useStorageTest.tsx)

then add the line `<UseStorageComponent>` to App.tsx then start the server using `npm start` navigate to your browser on `localhost:3000` then right click and select inspect, then in the menu heading choose application then localstorage and sessionstorage then you will see the the stored values with their key.