'use strict';


console.log('---Метод масиву Shift---');

// We create a function that will work similarly to the shift array method
const arrFuncShift = (arr) => {
    if (!arr.length)
        return;
    const firstIndex = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length--;
    return firstIndex;
}
// I output the deleted index and the array without the deleted index to the console
const arr = [10, 52, 13, 64];
console.log('Початковий масив:', (arr));
console.log(`Видалений нульовий індекс: ${arrFuncShift(arr)}`);
console.log('Масив без нульового індексу:', (arr));


console.log('---Метод масиву reverse---');

// We create a function that will work similarly to the reverse array method
const arrFuncReverse = (array) => {
    const newRev = array.length;
// I use the static method math.floor to round down so as not to process the central element of the array
    for (let i = 0; i < Math.floor(newRev / 2); i++) {
        let rev = array[i];
        array[i] = array[newRev - 1 - i];
        array[newRev - 1 - i] = rev;
    }
    return array;
}
// I output the original array and the inverted array to the console
let reversed = [50, 40, 30, 20, 10];
console.log('Початковий масив:', (reversed));
arrFuncReverse(reversed);
console.log('Перевернутий масив:', (reversed));