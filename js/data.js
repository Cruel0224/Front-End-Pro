'use strict';

function createDataBase() {
    const OBJECT_KEYS = ['firstName', 'lastName', 'phone'];
    let DB = [];

    // Key for localStorage
    const LOCAL_KEY = 'contact';

    // Convert the array to a string
    const arrString = () => {
        return DB.map(user => `${user.id}|${user.firstName}|${user.lastName}|${user.phone}`).join(';');
    };

    // Transfer back to the array
    const fromObject = (obj) => {
        if (!obj) return [];
        return obj.split(';').map(move => {
            const [id, firstName, lastName, phone] = move.split('|');
            return {
                id: +id,
                firstName,
                lastName,
                phone
            };
        });
    };
    // Writing to localStorage
    const saveStorage = () => {
        localStorage.setItem(LOCAL_KEY, arrString());
    };
    // Loading from localStorage
    const loadStorage = () => {
        const damp = localStorage.getItem(LOCAL_KEY);
        if (!damp) return;
        DB = fromObject(damp);
    };
    loadStorage();

    const validateObject = (objectToValidate) => {
        if(typeof objectToValidate !== 'object') return false;

        const keysToValidate = Object.keys(objectToValidate);

        let isValid = true;

        for(let i = 0; i < OBJECT_KEYS.length; i++) {
            if(!keysToValidate.includes(OBJECT_KEYS[i])) {
                isValid = false;
                break;
            }
        }
        return isValid;
    };
    const getData = () => {
        return DB;
    };

    const setData = (data) => {

        // Object validation
        if(!data) return null;
        if(typeof data !== "object") return null;
        if(!validateObject(data)) return null;

        // Generate uniq ID
        let id = 1;
        const currentData = getData();
        if(currentData.length > 0) {
            id = currentData.at(-1).id + 1;
        }

        // Save data to database;
        const dataToSave = {...data, id};
        DB.push(dataToSave);
        saveStorage();

        // return saved element
        return DB.at(-1);
    };
    // Delete contact
    const deleteData = ({id}) => {
        if(typeof id !== 'number') return null;
        const currentData = getData();
        const userIndex = currentData.findIndex((singleUser) => id === singleUser.id );
        const removed = DB.splice(userIndex, 1)[0];
        saveStorage();
        return removed;
    };
    loadStorage();
    return {
        getData,
        setData,
        deleteData,
    };
}
const dataBase = createDataBase();