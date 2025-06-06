'use strict';

// We ask the user for the number of hours
const numberHours = +prompt("Скільки зараз годин?");

// Counting the number of seconds in an hour
const minutesHour = 60;
const secondsMinute = 60;
const secondsHour = minutesHour * secondsMinute;

// Output to a variable the time entered by the user multiplied by seconds
const justSeconds = numberHours * secondsHour;

// Displaying seconds using alert
alert(`Це виходить ${justSeconds} секунд!`);

