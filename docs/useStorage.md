
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


TO implement the React context with the useStorage, we first start by creating and interface from which we define our data
and methods to read and write data across components by implementing the interface.<br>
Once this interface created we then create a context provider by importing context from react the we create a context provider from
it were all the child components to that component will consume its value.<br>
Once this done we have a reusable and a none tree shaking code, Now then comes the useStorage hook, the usestorage hook then
has then accepts the data provided by the consumer components and uses method such and getitem('key') and returns a value , setitem('key', value)
to store and item in the browser's storage using a key and value depending from which value and key may come from that provider by the
context provider for example.
So This is how we can obtain reusable , non-tree shaking and persistent data across our components.<br>


```mermaid

graph TD;

   subgraph "interface"
        data[data: type,
        setdata: function]
        
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


