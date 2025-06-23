'use strict';

console.log('----indexOF----')
const indexOf = (arr, value, fromIndex = 0) => {
    let imitatorIndex = fromIndex >= 0
        ? fromIndex : arr.length + fromIndex;        // We determine the starting position of the search taking into account negative indices
    if (imitatorIndex < 0) imitatorIndex = 0;        // We do not go beyond the beginning of the array

// Iterating through an array
    for (let i = imitatorIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;        // If the element matches the one you are looking for, return the index
        }
    }
    return -1;        // If not found, return -1
}
// Output an example to the console to test the function
const arr1 = [1, 2, 3, 4, 2, 5, 2, 4, 3];
console.log(indexOf(arr1, 2, 5));


console.log('----lastIndexOf----');
const lastIndexOf = (arr1, value1, fromIndex1) => {
    let iLastIndex = fromIndex1 ?? arr1.length - 1;             // We put the starting search position at the end of the array
    if (iLastIndex < 0) iLastIndex = arr1.length + fromIndex1;          // If the index is less than zero, we shift from the end
    iLastIndex = Math.min(iLastIndex, arr1.length - 1);          // We make sure that the index is not greater than the last element

    // Iterating through an array
    for (; iLastIndex >= 0; iLastIndex--) {
        if (arr1[iLastIndex] === value1)
            return iLastIndex;
    }
    return -1;          // If not found, return -1
}
// Output an example to the console to test the function
const arr2 = [1, 2, 3, 4, 6, 7, 8];
console.log(lastIndexOf(arr2, 2, 4));


console.log('----find----');
const find = (arr2, cb) => {

    // Iterate through all the elements of the array
    for (let i = 0; i < arr2.length; i++) {
        // We execute a callback with three arguments: value, index, array
        if (cb(arr2[i], i, arr2)) {
            return arr2[i];         // If callback returns true — return this element
        }
    }
    return undefined;               // If not, return undefined
}
// А custom implementation of the find method that searches for the first element that satisfies a condition
const arr3 = [33, 38, 10, 14, 16, 27, 45];
const result = find(arr3, function (elem1){
    return elem1 < 20;
});
// Output an example to the console to test the function
console.log(result);

console.log('----findIndex----');
const findIndex = (arr3, cb) => {

    // Iterate through all the elements of the array
    for (let i = 0; i < arr3.length; i++) {
        if (cb(arr3[i], i, arr3)) {
            return i;        // If callback returns true for the element, we return its index
        }
    }
    return -1;        // If not found, return -1
}
const arr4 = [15, 87, 32, 45, 10]
const result1 = findIndex(arr4, function(elem2) {
    return elem2 > 40;
});
// Output an example to the console to test the function
console.log(result1);

console.log('----includes----');
const includes = (arr4, value2, fromIndex3 = 0) => {

    // Handling negative indices to start the search from the right place
    let protIncludes = fromIndex3 >= 0
        ? fromIndex3 : arr4.length + fromIndex3;
    if (protIncludes < 0) protIncludes = 0;

    // Iterating through an array
    for (let i = protIncludes; i < arr4.length; i++) {
        if (arr4[i] === value2) {
            return true;        // If the desired element is found, return true
        }
    }
    return false;         // If not, return false
}

const arr5 = [20, 25, 30, 35, 40];
// Output an example to the console to test the function
console.log(includes(arr5, 30));
console.log(includes(arr5, 32));

console.log('----every----');
const every = (arr5, cb) => {

    // Iterate through each element of the array
    for (let i = 0; i < arr5.length; i++) {
        if (!cb(arr5[i], i, arr5)) {
            return false;           // If at least one element does not pass the condition, return false
        }
    }
    return true;         // If everyone passes the condition, return true
}
// Output an example to the console to test the function
const arr6 = [10, 20, 30, 40, 50];
const result3 = every(arr6, (everyNum) => everyNum % 2 === 0);
console.log(result3);
const result4 = every(arr6, (everyNum => everyNum < 8));
console.log(result4);



console.log('----some----');
const some = (arr6, cb) => {

    // We iterate over all elements
    for (let i = 0; i < arr6.length; i++) {
        if (cb(arr6[i], i, arr6)) {
            return true;          // If at least one element passes the condition, return true
        }
    }
    return false;          // If none passed, return false
}
// Output an example to the console to test the function
const arr7 = [2, 3, 7, 9, 10];
const result5 = some(arr7, (someNum) => someNum % 2 === 0);
console.log(result5);
const result6 = some(arr7, (someNum) => someNum >= 12);
console.log(result6);