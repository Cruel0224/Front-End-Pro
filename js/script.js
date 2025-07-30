'use strict';


// 1. Map: Grouping products by complex keys (objects)
function groupByCategory(items) {

    // Create a Map where keys can be objects
    const map = new Map();
    for (const item of items) {

        // Get the category object
        const category = item.category;
        if (!map.has(category)) {

            // If the category does not exist yet, create an empty array
            map.set(category, []);
        }
        // Add the product to the appropriate category
        map.get(category).push(item);
    }
    // Return the map
    return map;
}

// Example:
const electronics = { name: 'Electronics' };
const books = { name: 'Books' };
const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone', category: electronics },
    { name: 'Book A', category: books },
];
const result = groupByCategory(items);
console.log(result);



// 2. Set: Uniqueness of objects by reference
function filterUniqueByReference(arr) {

    // Set stores only unique values (references)
    const seen = new Set();
    const result = [];
    for (const obj of arr) {

        // Check if this object already exists
        if (!seen.has(obj)) {
            seen.add(obj);
            result.push(obj);
        }
    }
    return result;
}

// Example:
const obj1 = { name: "a" };
const obj2 = { name: "a" };
const input = [obj1, obj1, obj2, obj2, obj1];
const unique = filterUniqueByReference(input);
console.log(unique);



// 3. WeakMap: Metadata binding without changing the object
function createMetadataStorage() {

    // WeakMap allows you to "bind" data to an object
    const metaMap = new WeakMap();
    return {
        setMetadata(obj, metadata) {

            // Write metadata to the object
            metaMap.set(obj, metadata);
        },
        getMetadata(obj) {
            return metaMap.get(obj);
        },
        hasMetadata(obj) {
            return metaMap.has(obj);
        }
    };
}

// Example:
const storage = createMetadataStorage();
const user1 = { name: "Анна" };
const user2 = { name: "Олег" };
storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });
console.log(storage.getMetadata(user1));
console.log(storage.hasMetadata(user2));



// 4. WeakSet: Tracking whether an object has already been processed
class ObjectTracker {
    constructor() {

        // WeakSet only stores objects (references)
        this.processed = new WeakSet();
    };
    mark(obj) {
        // Mark the object as processed
        this.processed.add(obj);
    };
    wasProcessed(obj) {

        // Check if the object has already been processed
        return this.processed.has(obj);
    };
}

// Example:
const tracker = new ObjectTracker();
const obj = { name: "A" };
console.log(tracker.wasProcessed(obj));
tracker.mark(obj);
console.log(tracker.wasProcessed(obj));
