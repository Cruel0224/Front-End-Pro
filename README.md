<strong>Data structures</strong>

1. Map: Object statistics by complex keys

Implement the groupByCategory(items) function, which takes an array of items, where each item has a complex object as a category, and groups the items by these categories.

2. Set: Detecting unique items without reprocessing

Create a filterUniqueByReference(arr) function, which returns an array of only unique items by reference.

3. WeakMap: Binding metadata to objects without memory leaks

Create createMetadataStorage(), which allows you to "attach" additional information to any object without changing the object itself. These objects can disappear from memory - and the metadata will automatically disappear too.

In JavaScript, it is not safe to add a field to a third-party object unless you created it. But with WeakMap, we can store additional information externally without touching the object itself.

Task 4 — WeakSet: Tracking Already Processed Objects

Create an ObjectTracker class that allows you to check whether a certain object has already been "marked" or processed. The class has the following methods:

mark(obj) — mark the object as processed

wasProcessed(obj) → true | false — whether the object has already been processed

Context:
In many scenarios (e.g., graph traversal, DOM tree, deep validation), you need to know whether this object has already been processed so that you don't have to repeat the action.
