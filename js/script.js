'use strict';


console.log('----1----');
// We create a function that calculates the arithmetic mean of only numeric elements
const mixArray = [2, true, 'Hello', 6, 13, null, 20];
function averageNumbers(arr) {
    let sum = 0;
    let count = 0;
    for (let item of arr) {
        if (typeof item === 'number' && !isNaN(item)) {
            sum += item;
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

// Output to the console
console.log(averageNumbers(mixArray));


console.log('----2----');
// A function that receives 3 arguments that will perform mathematical operations.
function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return y !== 0 ? x / y : 'Ділення на 0 неможливо';
        case '%':
            return x % y;
        case '^':
            return x ** y;
        default:
            return 'Невідомий знак';
    }
}
// we invite values from the user
const x = +prompt("Введіть перше число:");
const znak = prompt("Введіть знак операції (+, -, *, /, %, ^):");
const y = +prompt("Введіть друге число:");

// Output to the console
console.log(doMath(x, znak, y));


console.log('----3----');
// A function has been created to fill a two-dimensional array with user data.
function createArray() {
    const mainLength = +prompt("Введіть кількість основного масиву:");
    const array = [];
    for (let i = 0; i < mainLength; i++) {
        const innerLength = +prompt(`Введіть довжину внутрішнього масиву № ${i + 1}:`);
        const innerArray = [];
        for (let j = 0; j < innerLength; j++) {
            const value = prompt(`Введіть значення для елемента масиву № ${i + 1}, індекс масиву ${j}:`);
            innerArray.push(value);
        }
        array.push(innerArray);
    }
    return array;
}
// Output to the console
console.log(createArray());


console.log('----4----');
// A function that takes data filled in by the user
// and removes the characters entered by the user in the second argument.
function funcChars(string, remove) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (!remove.includes(string[i])) {
            result += string[i];
        }
    }
    return result;
}
// User input value
const input = prompt("Введіть рядок:");
const chars = prompt("Введіть які символи треба видалити (без пробілів, якщо його не треба видаляти):");

// Output to the console
console.log(funcChars(input, chars));