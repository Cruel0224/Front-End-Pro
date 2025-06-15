'use strict';

// Implemented a function that returns a string of random characters.
// Added object methods for generating constantly different random numbers
const generateKey = (length, characters) => {
    let key = '';
    for (let index = 0; index < length; index++) {
        const methodObject = Math.floor(Math.random() * characters.length);
        key += characters[methodObject];
    }
    return key;
}

// A string of 16 random characters, output to the console
const characters = 'qwertyuiopasdfghjklzxcvbnm1234567890';
const key = generateKey(16, characters);
console.log(key);
