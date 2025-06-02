'use strict';

// Отримання збору даних
const userName = prompt("Як тебе звати?") || "Гість";
const userAge = +prompt("Скільки тобі років?");
const notification = confirm("Ти хочеш отримувати сповіщення?");
const userId = 488691656584554n;
let lastLogin = null;
let nickname;
const favoriteTech = ["HTML",  "CSS", "JS"];
const settings = {
    theme: "dark",
    autoLogin: false
};

// Створення об’єкта session, що містить всю зібрану інформацію
const session = {
    userName,
    userAge,
    notification,
    userId,
    lastLogin,
    nickname,
    favoriteTech,
    settings
};

// Виведення в браузер короткої інформації
alert(`Привіт ${userName}! Твій ID: ${userId}`);


// Виведення в консоль весь об'єкт
console.log("Весь об'єкт:", session);


// Виведення у консоль тип кожного поля
console.log("-------Типи Даних--------");
console.log("userName:", typeof userName);
console.log("userAge:", typeof userAge);
console.log("notification:", typeof notification);
console.log("userId:", typeof userId);
console.log("lastLogin:", typeof lastLogin);
console.log("nickname:", typeof nickname);
console.log("favoriteTech:", typeof favoriteTech);
console.log("settings:", typeof settings);
console.log("session:", typeof session);