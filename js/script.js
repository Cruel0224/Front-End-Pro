'use strict';


// Given an array of numbers.
const arrayNumber = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// An array of numbers is output to the console.
console.log('Кількість елементів масиву:', arrayNumber.length);


console.log('№ 1:');
// 1. Sum and number of positive elements.
let arrPositiveNum = 0;
let arrPositiveCount = 0;
for (let pos of arrayNumber) {
    if (pos > 0) {
        arrPositiveNum += pos;
        arrPositiveCount++;
    }
}
console.log('Сума позитивних елементів:', arrPositiveNum);
console.log('Кількість позитивних елементів:', arrPositiveCount);


console.log('№ 2:');
// 2. The minimum element of the array and its ordinal number.
let minElement = arrayNumber[0];
let minIndex = 0;
arrayNumber.forEach((el, index) => {
    if (el < minElement) {
        minElement = el;
        minIndex = index + 1;
    }
});
console.log('Мінімальний елемент масиву:', minElement);
console.log('Порядковий номер (не індекс):', minIndex);


console.log('№ 3:');
// 3. Maximum array element and its ordinal number.
let maxElement = arrayNumber[0];
let orderNum = 0;
arrayNumber.forEach((el, index) => {
    if (el > maxElement) {
        maxElement = el;
        orderNum = index + 1;
    }
});
console.log('Максимальний елемент масиву:', maxElement);
console.log('Порядковий номер (не індекс):', orderNum);


console.log('№ 4:');
// 4. Number of negative elements.
let negativeNumb = arrayNumber
    .filter(negative => negative < 0);
console.log('Кількість негативних елементів:', negativeNumb.length);


console.log('№ 5:');
// 5. Number of odd positive elements.
let notEvenPositive = arrayNumber
    .filter(notPositive => notPositive > 0 && notPositive % 2 !== 0);
console.log('Кількість непарних позитивних елементів:', notEvenPositive.length);


console.log('№ 6:');
// 6. Number of even positive elements.
let eventPositive = arrayNumber
    .filter(positive => positive > 0 && positive % 2 === 0);
console.log('Кількість парних позитивних елементів:', eventPositive.length);


console.log('№ 7:');
// 7. Sum of even positive elements.
let sumEventNum = arrayNumber
    .filter(event => event > 0 && event % 2 === 0)
    .reduce((sum, el) => sum + el, 0);
console.log('Сума парних позитивних елементів:', sumEventNum);


console.log('№ 8:');
// 8. Sum of odd positive elements.
let notEventNum = arrayNumber
    .filter(notEvent => notEvent > 0 && notEvent % 2 !== 0)
    .reduce((sum, el) => sum + el, 0);
console.log('Сума непарних позитивних елементів:', notEventNum);


console.log('№ 9:');
// 9. Product of positive elements.
let product = arrayNumber
    .filter(prod => prod > 0)
    .reduce((sum, el) => sum * el, 1);
console.log('Добуток позитивних елементів:', product);


console.log('№ 10:');
// 10. Largest among the array elements, reset the others to zero.
let maxArray = arrayNumber.map(only => (only === maxElement ? only : 0));
console.log('Обнулені елементи масиву крім найбільшого:', maxArray);
