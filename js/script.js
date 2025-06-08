'use strict';

// Output numbers from 20 to 30 through a gap, using a step of 0.5
console.log('---1 задача---');
let outputNumber = "";
for (let i = 20; i <= 30; i += 0.5) {
    outputNumber += i + " ";
}
console.log(outputNumber);

// The output data calculates the cost of 10, 20, 30... 100
// dollars if the exchange rate is 27 hryvnias per dollar
console.log('---2 задача---');
const rateDollar = 27;
for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} доларів = ${i * rateDollar} гривень`);
}

// All integers from 1 to 100 whose square does not exceed the number N are displayed.
console.log('---3 задача---');
let numberN = 2025;
let integers = "";
for (let i = 1; i <= 100; i++) {
    if (i * i <= numberN) {
        integers += i + " ";
    }
}
console.log(integers);

// We found out if a number is prime
console.log('---4 задача---');
let num = 30;
let isPrime = num > 1;
for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "Просте число!" : "Не просте число!");

// We determined whether a number can be obtained by raising the number 3 to a certain power.
console.log('---5 задача---');
let whetherNumber = 16;
let certainPower = 1;
let canObtained = false;
while (certainPower <= whetherNumber) {
    if (certainPower === whetherNumber) {
        canObtained = true;
    }
    certainPower *= 3;
}
console.log(canObtained ? "Так, можна вивести!" : "Ні, не можна вивести!");