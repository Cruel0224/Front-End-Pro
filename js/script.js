'use strict';

// We ask the user for their year of birth and display a message when they cancel
const userYear = prompt("В якому році ти народився?");
if (userYear === null) {
    alert("Шкода, що ти не захотів ввести свій рік народження.");
}

// We ask the user for their city of residence and display a message when canceling
const userCity = prompt("В якому місті ти живеш?");
if (userCity === null) {
    alert("Шкода, що ти не захотів ввести своє місто.");
}

// We ask the user for their favorite sport and display a message when they cancel.
const likeSports = prompt("Твій улюблений вид спорту?");
if (likeSports === null) {
    alert("Шкода, що ти не захотів ввести свій улюблений вид спорту.");
}

// We find out the approximate age of the user.
// If the user has not entered anything, then zero remains
let userAge = 2025 - +userYear;
if (userYear === "" || userYear === null) {
    userAge = "0"
}

// Collecting information about the city in which the user lives
let cityMessage;
if (userCity === "Київ") {
    cityMessage = "Ти живеш у столиці України!";
}   else if (userCity === "Лондон") {
    cityMessage = "Ти живеш у столиці Великобританії!";
}   else if (userCity === "Вашингтон") {
    cityMessage = "Ти живеш у столиці США!";
}   else if (userCity === "" || userCity === null) {
    cityMessage = "Місце проживання не вказано!"
}   else {
    cityMessage = `Ти живеш у місті ${userCity}!`;
}

// Collecting information about the user's favorite sport
let sportsMessage;
if (likeSports === "Бокс") {
    sportsMessage = `${likeSports}: Круто! Хочеш стати, як Олександр Усик?`;
}   else if (likeSports === "Баскетбол") {
    sportsMessage = `${likeSports}: Круто! Хочеш стати, як Майкл Джордан?`;
}   else if (likeSports === "Теніс") {
    sportsMessage = `${likeSports}: Круто! Хочеш стати, як Новак Джокович?`;
}   else if (likeSports === "" || likeSports === null) {
    sportsMessage = "Улюблений вид спорту не вказано!";
}   else {
    sportsMessage = `${likeSports} чудовий вид спорту!`;
}

// Output of all collected information via alert
alert(`Тобі приблизно ${userAge} років!\n${cityMessage}\n${sportsMessage}`);