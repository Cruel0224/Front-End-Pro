'use strict';

// 1. Numbers from 10 to 20 separated by commas
let oneCycle = '';
for (let i = 10; i <= 20; i++)
    oneCycle += (i < 20) ? i + ', ' : i;
console.log('1 задача:', oneCycle);

// 2. Squares of numbers from 10 to 20
let twoCycle = '';
for (let i = 10; i <= 20; i++)
    twoCycle += i * i + ' ';
console.log('2 задача:', twoCycle);

// 3. Multiplication table for 7
console.log('3 задача:');
for (let i = 1; i <= 10; i++)
console.log(`7 * ${i} = ${7 * i}`);

// 4. Sum of all integers from 1 to 15
let threeCycle = 0;
for (let i = 1; i <= 15; i++)
    threeCycle += i;
console.log('4 задача:', threeCycle);

// 5. Product of numbers from 15 to 35
let fourCycle = 1n;
for (let i = 15n; i <= 35n; i++)
    fourCycle *= i;
console.log(`5 задача: ${fourCycle}`);

// 6. Arithmetic mean of a number from 1 to 500
let fiveCycle = 0;
for (let i = 1; i <= 500; i++)
    fiveCycle += i;
console.log('6 задача:', fiveCycle / 500);

// 7. Sum of only even numbers from 30 to 80
let sixCycle = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sixCycle += i;
    }
}
console.log('7 задача:', sixCycle);

// 8. Numbers from 100 to 200 are multiples of 3
let sevenCycle = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        sevenCycle += i + ' ';
    }
}
console.log('8 задача:', sevenCycle);

// 9–11. Divisors of a number, number of even divisors, sum of even divisors
console.log('9, 10, 11 задача разом:');
let naturalNumber = 204;
let divider = '';
let countDivider = 0;
let sumDivider = 0;
for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0 && i % 2 === 0) {
        divider += i + ' ';
        countDivider += 1;
        sumDivider += i;
    }
}
console.log('Дільники числа 204:', divider);
console.log('Кількість парних дільників:', countDivider);
console.log('Сума парних дільників:', sumDivider);

// 12. Complete multiplication table
console.log('12 задача: Повна таблиця множення:')
for (let i = 1; i <= 10; i++) {
    for (let v = 1; v <= 10; v++) {
        console.log(`${i} * ${v} = ${i * v}`);
    }
    console.log('');
}
