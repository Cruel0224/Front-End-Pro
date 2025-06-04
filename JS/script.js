'use strict';

// We invite the user to enter three numbers through a prompt
const addNum1 = +prompt("Напиши перше число!");
const addNum2 = +prompt("Напиши друге число!");
const addNum3 = +prompt("Напиши третє число!");

// We calculate the arithmetic mean
const average = (addNum1 + addNum2 + addNum3) / 3;

// Deriving the average using alert
alert("Середнє арифметичне число: " + average);