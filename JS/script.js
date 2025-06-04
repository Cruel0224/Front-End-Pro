'use strict';

// Receiving data collection
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

// Creating a session object containing all the collected information
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

// Display of brief information in the browser
alert(`Привіт ${userName}! Твій ID: ${userId}`);


// Output to the console the entire object
console.log("Весь об'єкт:", session);


// Output to the console the type of each field
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