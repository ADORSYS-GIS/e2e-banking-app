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

## Transactions using the browser's IndexDB storage
     indexDB is a low level API for client-side storage of significant anounts of structured
     including files and blobs

### KeyConcepts
+ Asynchronous, therefore it won't block any main thread operations.
+ lets you access data offline.
+ can store a large amount of data ( more than the local storage or session storage) of complex value types.
+ A noSQL database which makes it very flexible and dangerous.

### keywords
+ **Object stores** : the mechanism by which data is stored in the database.
+ **Database** : A repository of information , typically comprising of one or more object stores
+ **Index** :  and index is a specialized object store for looking up records in another object store called the reference object store.
+ **request** : The operation by which reading and writing on a database is done. Every request represents one or more read or write operations

IndexDB just as the localStorage and sessionStorage stores data on client side and provides methods for easy retrieval , adding , and removing data from this storage
depending on whether the store object uses a ```keypath``` or a ``` key generator``` and you can also use and index for retrieving the data based on the key in the index data store which
maps the value in the object store.

### Basic Pattern
1. open the database.
2. create an object in the database.
3. start a transaction and make a request to do some database operations.
4. wait for the operation to be completed by listening to the right kind od DOM events.
5. do something with the result.

#### Possible Errors
One of the common possible errors when opening a databaseis ```VER_ERR``` it indicates that the version of the database stored on the
disk is greater than the version that you are trying to open. this an error case that must be handled by the
error handler.

Source, [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
)
 ```mermaid
 classDiagram
    class Storage {
     <<interface>>
     + getItem<T>(key: string): Promise<T>
     + setItem<T>(key: string, value: T): Promise<void>
     + removeItem(key: string): Promise<void>
     + clear(): Promise<void>
    }
    class LocalstorageImpl {

    }
    class IndexDBImpl{

    }
    class MemoryStorageImp{
        - dic: Map<string, any>
    }
    class IndexStorageImpl{
        - dic: Map<any, any>
    }
    class Hook{
        + item: value
        + setItem(item: value): void
  }
  class ContextData {
      + data Map<string, any>
      + setData(data: Map<string, any>)
  }
  class Context {
      + storage: storage
      + data: connection
  }
  Context --> ContextData: use
  Hook --> Context: use
  MemoryStorageImp --> Storage: implements
  LocalstorageImpl --> Storage: implements
  IndexStorageImpl --> Storage: implements
  IndexDBImpl --> Storage: implements
  Context --> Storage: use
 ```