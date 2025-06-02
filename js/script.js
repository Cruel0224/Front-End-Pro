'use strict';
// Створення об'єкта user з даними
const user = {
    name: "Владислав",
    age: 30,
    isOnline: true,
    friends: ["Сергій", 'Василь', "Олександр"],
    settings: {
        theme: "dark",
        notifications: true
    }
};

// Окремі змінні з об'єкта user
const firstFriendName = user.friends[0];
const notificationsEnabled = user.settings.notifications;

// Вивід інформації у консоль
console.log("Ім'я користувача:", user.name);
console.log("Кількість друзів:", user.friends.length);
console.log("Ім'я першого друга:", firstFriendName);
console.log("Яка тема увімкнена:", user.settings.theme);
console.log("Чи ввімкнені сповіщення:", notificationsEnabled);