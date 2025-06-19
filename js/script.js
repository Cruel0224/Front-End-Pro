'use strict';

// Create an array of numbers
const array = [1, 2, 3, 4, 5, 6, 7];

// We create a function and remove an element from the array,
// after removing the desired element we stop the function using break
function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
            break;
        }
    }
}
// We output the function and remove the desired element
removeElement(array, 5);
// Output to the console
console.log(array);