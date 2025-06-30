'use strict';


const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};

function findValuesByKey(obj, targetKey) {

// We create an empty array in which we will collect all the found values.
    let result = [];

// If the passed object is an array, we iterate through each element of the array.
// We look inside each element. We add all the found values via concat
    if (Array.isArray(obj)) {
        for (const item of obj) {
            result = result.concat(findValuesByKey(item, targetKey));
        }
// If the object is a regular object, we iterate over all its keys.
// If the key matches, we add its value to the result. We add all the found values via concat.
    } else if (obj && typeof obj === 'object') {
        for (const key in obj) {
            if (key === targetKey) {
                result.push(obj[key]);
            }
            result = result.concat(findValuesByKey(obj[key], targetKey));
        }
    }
    return result;
}
// Searches for all keys and outputs to the console.
console.log(findValuesByKey(data, "name"));
console.log(findValuesByKey(data, "id"));