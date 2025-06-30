'use strict';


console.log('____APPLY____');
// Function.prototype.customApply = function(app, arrApp) {
//     app = app || globalThis;
//     const unKey = Symbol();
//     app[unKey] = this;
//     const result = Array.isArray(arrApp)
//     ? app[unKey](...arrApp) : app[unKey]();
//     delete app[unKey];
//     return result;
// }
//
// function prototypeApp(greeting, punctuation) {
//     return `${greeting} ${this.name}${punctuation}`
// }
//
// const person = { name: 'Владислав' };
//
// console.log(prototypeApp.customApply(person, ['Mr.', '!']));


function customApply(wind, app, arrApp) {
    app = app || globalThis;
    const unKey = Symbol();
    app[unKey] = wind;
    const result = Array.isArray(arrApp)
    ? app[unKey](...arrApp) : app[unKey]();
    delete app[unKey];
    return result;
}
function greet(greeting, punctuation) {
    return `${greeting} ${this.name} ${punctuation}`
}

const person = { name: 'Vladislav' };

console.log(customApply(greet, person, ['Mr.', 'Welcome!']));






console.log('____BIND____');

// Function.prototype.myBind = function(context, ...bindArgs) {
//     const originalFunc = this;
//
//     return function(...callArgs) {
//         // Створюємо унікальний ключ, щоб не перезаписати щось у context
//         const fnKey = Symbol('boundFn');
//
//         // Тимчасово додаємо функцію до об'єкта
//         context[fnKey] = originalFunc;
//
//         // Викликаємо функцію з усіма аргументами
//         const result = context[fnKey](...bindArgs, ...callArgs);
//
//         // Видаляємо тимчасову функцію
//         delete context[fnKey];
//
//         return result;
//     };
// };
// function greet1(greeting, punctuation) {
//     return `${greeting}, ${this.name}${punctuation}`;
// }
//
// const person1 = { name: 'Влад' };
//
// const boundGreet = greet1.myBind(person1, 'Привіт');
// console.log(boundGreet('!')); // "Привіт, Влад!"


function myBind(originalFunc, context, ...bindArgs) {
    return function(...callArgs) {
        context = context || globalThis;
        if (typeof context !== 'object' && typeof context !== 'function') {
            context = Object(context);
        }
        const fnKey = Symbol();

        context[fnKey] = originalFunc;

        const result = context[fnKey](...bindArgs, ...callArgs);

        delete context[fnKey];

        return result;
    };
}
function greet1(greeting, punctuation) {
    return `${greeting} ${this.name} ${punctuation}`;
}

const person1 = { name: 'Vladislav' };

const boundGreet = myBind(greet1, person1, 'Mr.');

console.log(boundGreet('Welcome!'));