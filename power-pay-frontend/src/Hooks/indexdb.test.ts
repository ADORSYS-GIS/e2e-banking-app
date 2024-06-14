import {IndexedDBStorageService} from './StorageContext';
import 'fake-indexeddb/auto'

declare const structuredClone: (obj: any) => any;
if (!('structuredClone' in self)) {
    self["structuredClone"] = (obj: any) => {
        return JSON.parse(JSON.stringify(obj));
    };
}

describe('IndexedDBService',

    () => {
        let indexedDBService: IndexedDBStorageService;

        beforeAll(async () => {
            indexedDBService = new IndexedDBStorageService('testDB', 2);

        });

        it('should open and close database', async () => {

            await indexedDBService.openDatabase('dbname', 2);

            expect(indexedDBService['db']).not.toBeNull();

        });

        it('should add data to the objectStore and retrieve it', async () => {

            const testData: any = {id: 1, name: 'Test'};
            await indexedDBService.setItem(testData);

            const retrievedData = await indexedDBService.getItem(1);
            const revert = await indexedDBService.clear()

            expect(retrievedData).toEqual(testData);
        });

        it('should get data from objectStore', async () => {
            const retrieveData = await indexedDBService.getItem(1);
            expect(retrieveData).toEqual(undefined)
        })

        it('should delete data from the objectStore', async () => {

            const removedData = await indexedDBService.removeItem('keystore')

            const retrieveData = await indexedDBService.getItem('keystore')
            expect(retrieveData).toEqual(undefined)
        });
        it('should clear all the data out of the object store', async () => {
            const testData = {id: 1, name: 'mark1'}
            const testData2 = {id: "2", name: "christian"}

            const setData = await indexedDBService.setItem(testData)
            const setData2 = await indexedDBService.setItem(testData2)

            const clearData = await indexedDBService.clear()
            expect(await indexedDBService.getItem(1)).toEqual(undefined)
        })
    });
