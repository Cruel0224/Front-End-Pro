'use strict';


const userName = prompt("Як тебе звати?") || "Гість";
const userAge = +prompt("Скільки тобі років?");
const userConsent = confirm("Чи згоден ти взяти участь в проєкті?");

const userId = 19573641879284568n;
let bonusCode = null;
let secondName;

alert(`Привіт, ${userName}!\nТвій вік: ${userAge}\nТвій статус: ${userConsent ? "участь підтверджено" : "відмовився"}`);

console.log("Ім'я:", userName, typeof userName);
console.log("Вік:", userAge, typeof userAge);
console.log("Згода на участь:", userConsent, typeof userConsent);
console.log("ID користувача:", userId, typeof userId);
console.log("Бонусний код:", bonusCode, typeof bonusCode);
console.log("Друге ім'я:", secondName, typeof secondName);