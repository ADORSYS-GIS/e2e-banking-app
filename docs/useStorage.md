
# useStorage Hook

It is used for retrieving, writing, listening and removing data to and from various web storages like the localstorage.<br>

The **context** state management tool(library) provides us with features which are particularly helpful when you have data that needs to be accessed globally within a tree of React Components. such as theme preferences or preferred language.

One of the main benefits of Context API is its ability to simplify state management and accessibility between various components in your application. By using Context, you can reduce the complexity of passing data between components and eliminate the need for additional actions or props. This can make your code more concise and easier to maintain. It’s like having a handy tool that streamlines the sharing of data among your components.

* Context API has two core concepts:

   - Providers
    - Consumers
    #

**Providers** is to define and keep track of specific pieces of state. This state can then be accessed by all the child components nested inside the Provider. These child components, known as **Consumers**, are responsible for accessing or modifying the state provided by the Context Provider.


## React Context with useStorage

To make the most use of the useStorage hook we are going to be using the Context library here this is because of its simplicity and also its ability to pass data from parent to children components without the use of props.<br>
Here is a basic form of how the react Context and usestorage hook function in other for us to have persistent and reusable data across our components.<br>
the react context works by creating a context object that holds the data we want to share between the components, once this context object is being created it is used in our components by first wrapping the component in a context provider then any component that imports(inherits) from this component can have access to the data, then now comes the useStorage hook which to persist that data to the localstorage or any other storage of our web browser to make the data persist accross page refresh or any other storage. <br>
The usestorage hook performs its task by taking the key and associated value converting it to a json string then using the ```setItem()``` method to store it in the storage with its associated key. And also has a ```getItem()``` for retrieving the value stored based on the corresponding key and a ```removeItem()``` method which will be used to remove key value pair from the storage. <br>
To conclude the react Context and useStorage helps our application to have reusable and persist data accross components.<br>
The flow is as shown

```mermaid

graph TD;
   subgraph "ContextObject"
        contextobject[key = value]
        end

    subgraph "Components"
        A[component1]
        B[component2]
      
        end
    subgraph "useStorage"
        usestoragehook[useStoragehook]
        end
    subgraph "BrowserStorage"
       localstorage[LocalStorage]
       end
    subgraph "ContextProvider"
        provider[Provider]
        end

ContextObject -->  ContextProvider
ContextProvider --> Components
A -->|setItem,removeItem| useStorage
B --> |setItem,removeItem| useStorage

useStorage--> |getItem| A
useStorage --> |getItem|B

useStorage --> |settingItem/ removingItem|BrowserStorage

BrowserStorage --> |gettingItem|useStorage


