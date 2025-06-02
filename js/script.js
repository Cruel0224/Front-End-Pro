'use strict';
// Creating a user object with data
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

// Separate variables from the user object
const firstFriendName = user.friends[0];
const notificationsEnabled = user.settings.notifications;

// Output of information to the console
console.log("Ім'я користувача:", user.name);
console.log("Кількість друзів:", user.friends.length);
console.log("Ім'я першого друга:", firstFriendName);
console.log("Яка тема увімкнена:", user.settings.theme);
console.log("Чи ввімкнені сповіщення:", notificationsEnabled);