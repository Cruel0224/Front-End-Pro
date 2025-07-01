'use strict';


console.log('____APPLY____');
console.log('Apply versin № 1');
console.log('Adding to "Function.prototype" to make it work like a built-in apply');

Function.prototype.customApply = function(app, arrApp) {

    // if app is null or undefined, bind to the global object.
    app = app || globalThis;

    // Create a unique key to avoid conflicts.
    const unKey = Symbol();

    // Bind the function this.
    app[unKey] = this;

    // Call the function with the passed arguments.
    const result = Array.isArray(arrApp)
    ? app[unKey](...arrApp) : app[unKey]();

    // Remove the temporary function.
    delete app[unKey];
    return result;
}
// Function prototype call.
function prototypeApply(accost, accent) {
    return `${accost} ${this.name}${accent}`
}
const personalName = { name: 'Vladislav' };
console.log(prototypeApply.customApply(personalName, ['\nMr.', '!']));


console.log('\nApply versin № 2')
console.log('Apply as a separate function')

function customApply(wind, app, arrApp) {

    // if app is null or undefined, bind to the global object.
    app = app || globalThis;

    // Create a unique key to avoid conflicts.
    const unKey = Symbol();

    // Bind wind to app
    app[unKey] = wind;

    // Call the function with the passed arguments.
    const result = Array.isArray(arrApp)
    ? app[unKey](...arrApp) : app[unKey]();

    // Remove the temporary function.
    delete app[unKey];
    return result;
}
// Calling a function and outputting to the console.
function greet(gr, pu) {
    return `${gr} ${this.name} ${pu}`
}
const person = { name: 'Vladislav' };
console.log(customApply(greet, person, ['\nMr.', 'Welcome!']));


console.log('____BIND____');
console.log('Bind version № 1');
console.log('Adding to "Function.prototype" to make it work like a built-in bind');

Function.prototype.customBind = function(bin, ...binArr) {
    const originalFunc = this;
    return function(...callArr) {

        // Create a unique key so as not to overwrite anything in bin.
        const fnKey = Symbol();

        // Temporarily add a function to the object.
        bin[fnKey] = originalFunc;

        // Call the function with all arguments.
        const result = bin[fnKey](...binArr, ...callArr);

        // Remove the temporary function.
        delete bin[fnKey];
        return result;
    };
};
// Function prototype call.
function prototypeBind(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}
const result = { name: 'Влад' };
const bindGreet = prototypeBind.customBind(result, '\nПане');
console.log(bindGreet('!'));


console.log('\nBind version № 2');
console.log('Bind as a separate function');

function customBind(origFunc, cont, ...bindArr) {

    // Return a new function that remembers cont and bindArr.
    return function(...callArr) {

        // if app is null or undefined, bind to the global object.
        cont = cont || globalThis;

        // Create a unique key so as not to overwrite anything in bin.
        const fnKey = Symbol();

        // Temporarily add a function to the object.
        cont[fnKey] = origFunc;

        // Call the function with all arguments.
        const result = cont[fnKey](...bindArr, ...callArr);

        // Remove the temporary function.
        delete cont[fnKey];
        return result;
    };
}
// Calling a function and outputting to the console.
function analog(gr, pu) {
    return `${gr} ${this.definitions} ${pu}`;
}
const result2 = { definitions: 'Вас' };
const boundGreet = customBind(analog, result2, '\nРадий,');
console.log(boundGreet('бачити!'));
