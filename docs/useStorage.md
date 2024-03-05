
# useStorage Hook

 The react useStorage hook is a react hook which allows use to easily manage state in a web storage API like a localstorage or sessionstorage.<br>

It is used for retrieving, writing, listening and removing data to and from various web storages like the localstorage.<br>

We can fully utilize the power of the useStorage hook by adding either a react **Redux** or a react **Context** which are state management tools(libraries) in react. Each of this have different implementations and functions in different ways depending on what project they are to be used.<br>

Lets see some of the aspects which sets them apart inother to choose the one which bests suits an application.<br>

The **context** management tool provides us with features which are particularly helpful when you have data that needs to be accessed globally within a tree of React Components. such as theme preferences or preferred language.

One of the main benefits of Context API is its ability to simplify state management and accessibility between various components in your application. By using Context, you can reduce the complexity of passing data between components and eliminate the need for additional actions or props. This can make your code more concise and easier to maintain. It’s like having a handy tool that streamlines the sharing of data among your components.

* Context API has two core concepts:

   - Providers
    - Consumers
    #

**Providers** is to define and keep track of specific pieces of state. This state can then be accessed by all the child components nested inside the Provider. These child components, known as **Consumers**, are responsible for accessing or modifying the state provided by the Context Provider.Points to notes about Context before choosing the right library.<br>
# 
- Context is typically used for smaller-scale state management needs or for passing down data that is needed by many components in the application.
- Context it's build into React itself, so there's no need to install additional libraries to use it.<br>


And on the flip side we have **Redux** which provides us with a different way of viewing states in our application.<br>

 
Redux simplifies the way we view state in our application by requiring us to store all the state data in a single object. Everything we need to know about the application is in one place. with redux we pull state management away from react entirely. 

* The reduce API has three main concepts 
    - The store
    - The Reducer
    - Action

The **store**: An immutable object that holds the application's state<br>
**Reducer**: A function that returns some data, triggered by an action type<br>
**Action**: An object that tells the reducer how to change the state it must contain a type property and optional payload property.<br>
Points to note are.<br>

- Redux is typically used for lager-scale management needs or for applications with complex state logic that require features such as as middleware, time-travel debigging and predictable container state.<br>

## React Context with useStorage

To make the most use of the useStorage hook we are going to be using the Context library here this is because of its simplicity and also its ability to pass data from parent to children components without the use of props.<br>
Here is a basic form of how the react Context and usestorage hook function in other for us to have persistent and reusable data across our components.<br>
the react context works by creating a context object that holds the data we want to share between the components, once this context object is being created it is used in our components by first wrapping the component in a context provider then any component that imports(inherits) from this component can have access to the data, then now comes the useStorage hook which to persist that data to the localstorage or any other storage of our web browser to make the data persist accross page refresh or any other storage. <br>
The usestorage hook performs its task by taking the key and associated value converting it to a json string then using the ```setItem()``` method to store it in the storage with its associated key. And also has a ```getItem()``` for retrieving the value stored based on the corresponding key and a ```removeItem()``` method which will be used to remove key value pair from the storage. <br>
To conclude the react Context and useStorage helps our application to have reusable and persist data accross components.
