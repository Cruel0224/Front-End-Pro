'use strict';

// Given an array of numbers
const arr = [1, 2, 3, -1, -2, -3];

// Create a function that takes an array as a parameter
function positiveNumber(arrPositive) {
    if (arrPositive.length === 0) {
        return 'Порожній масив!';
    }

// In the function body, we create an empty array
    const exampleArr = [];

// We loop through the array, check whether the current element is a positive or negative number,
// if the number is positive, then add it to the previously created array using the push function
    for (let i = 0; i < arrPositive.length; i++) {
        const arrItem = arrPositive[i];
        if (arrItem > 0) {
            exampleArr.push(arrItem);
        }
    }

// After the loop is executed, we check the array, which was filled with only positive values.
// If it is not empty, we return this array, if it is empty, we return null
    if (exampleArr.length > 0) {
        return exampleArr
    } else {
        return null;
    }
}

// Output the result to the console
console.log(positiveNumber(arr));