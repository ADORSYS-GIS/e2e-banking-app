import {createContext, PropsWithChildren, useEffect, useState} from 'react';


// Define the StorageContextData interface.
export interface StorageContextData<T> {
    item: Record<string, T>;
    setItem: (key: string, value: T) => Promise<boolean>;
    removeItem: (key: string) => Promise<boolean>;
    clear: () => Promise<boolean>;
}

// Define the StorageService interface.
interface StorageService {
    clear: () => Promise<boolean>;
    getItem: <T>(key: string) => Promise<T | undefined>;
    removeItem: (key: string) => Promise<boolean | void>



}
interface SetStorage {
    setItem: <T>(key: string, value: T) => Promise<boolean | void>;
}
interface SetStorageIDB {
    setItem: <T>(value: object, key: IDBValidKey) => Promise<boolean | void>;
}

// Define the LocalStorageService class implementing the StorageService interface.
export class LocalStorageService implements StorageService, SetStorage {
    async getItem<T>(key: string): Promise<T | undefined> {
        const found = localStorage.getItem(key);
        if (!found) return undefined;
        return JSON.parse(found) as T;
    }

    async setItem<T>(key: string  , value: T): Promise<boolean | void> {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    async removeItem(key: string): Promise<boolean> {
        localStorage.removeItem(key);
        return true;
    }

    async clear(): Promise<boolean> {
        localStorage.clear();
        return true;
    }
}

export class IndexedDBStorageService implements StorageService, SetStorageIDB {
    private dbName: string;
    private version: number;
    private db: IDBDatabase

    constructor(dbName: string = 'dbname', version?: number) {
        this.dbName = dbName;

    }

    async openDatabase(dbName?: string, Version?: number): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {

            const request = window.indexedDB.open(dbName ?? this.dbName);

            request.onerror = (event: Event) => {
                reject((event.target as IDBOpenDBRequest).error);
            };

            request.onsuccess = (event: Event) => {
                resolve((event.target as IDBOpenDBRequest).result);
            };

            request.onupgradeneeded = (event: Event) => {

                this.db = (event.target as IDBOpenDBRequest).result;
                const objectstore = this.db.createObjectStore('objectstore', {keyPath: 'id'})
            };
        });
    }

    async clear(): Promise<boolean> {

        if (!this.db)
            await this.openDatabase()

        return new Promise((resolve, reject) => {
            const transaction =

                this.db.transaction('objectstore', 'readwrite')
                    .objectStore('objectstore')
                    .clear();
            transaction.onsuccess = (event: Event) => {
                resolve((event.target as IDBRequest).result)
            }
            transaction.onerror = (event: Event) => {
                reject((event.target as IDBRequest).onerror)
            }
        })

    }

    async getItem<T>(keypath: any): Promise<T | undefined> {
        if (!this.db)
            await this.openDatabase()
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction('objectstore', 'readonly')

                .objectStore('objectstore')

                .get(keypath)

            transaction.onsuccess = (event) => {

                resolve((event.target as IDBRequest).result)
            }
            transaction.onerror = (event: Event) => {
                reject((event.target as IDBRequest).onerror)
            }
        })
    }

    async removeItem(key: string): Promise<boolean | void> {
        if (!this.db)
            await this.openDatabase()

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction('objectstore', 'readwrite')

                .objectStore('objectstore')

                .delete(key);

            transaction.onerror = (event: Event) => {
                reject((event.target as IDBRequest).error);
            };

            transaction.onsuccess = (event: Event) => {
                resolve((event.target as IDBRequest).result);
            };
        });
    }

    async setItem<T>(value: object, key?: IDBValidKey): Promise<boolean | void> {
        if (!this.db)
            await this.openDatabase()

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction('objectstore', 'readwrite')
                .objectStore('objectstore')

                .add(value, key);


            transaction.onerror = (event: Event) => {

                reject((event.target as IDBRequest).error);
            };

            transaction.onsuccess = (event: Event) => {

                resolve((event.target as IDBRequest).result);

            };
        });

    }
}

// Define a global constant for the key.
const
    STORAGE_KEY = "new_key";

// Create the StorageContext with default functions for getItem and setItem.
const
    StorageContext = createContext<StorageContextData<unknown> | undefined>(undefined);

// Define the StorageProvider component
export function

StorageProvider<T>({children, storageService}: PropsWithChildren<{ storageService: StorageService }>) {
    const [storedValue, setStoredValue] = useState<Record<string, T>>({});

    // Initialize the state with the value from the local storage if it exists.
    useEffect(() => {
        storageService
            .getItem<Record<string, T>>(STORAGE_KEY)
            .then((item) => {
                if (item) {
                    setStoredValue(item);
                }
            });
    }, [storageService]);

    // Updates the local storage whenever the state changes.
    useEffect(() => {
        storageService.setItem(STORAGE_KEY, storedValue);
    }, [storageService, storedValue]);

    // Remove the item from local storage and set the stored value to undefined
    const clearItem = async (key: string): Promise<boolean> => {
        localStorage.removeItem(key);
        setStoredValue((prevState) => {
            const newState = {...prevState};
            delete newState[key];
            return newState;
        });
        return true;
    };

    // Define the context value.
    const contextValue: StorageContextData<T> = {
        item: storedValue,
        setItem: async (key, value) => {
            setStoredValue((prevState) => ({
                ...prevState,
                [key]: value,
            }));
            return true;
        },
        removeItem: async (key) => clearItem(key),
        clear: async () => {
            setStoredValue({});
            return true;
        },
    };

    return (
        <StorageContext.Provider value={contextValue}>
            {children}
        </StorageContext.Provider>
    );
}

export default StorageContext;
