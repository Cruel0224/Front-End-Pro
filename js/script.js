'use strict';

// padString function, which takes 4 arguments: a string,
// a number that is a long string, a character (a string of 1 character length),
// a boolean parameter (true or false) that determines whether to add characters to the left or right (right by default)
function padString(str, numericStr, oneSymbol, left = true) {

    // Arguments checked, if any arguments are missing, then return an error string from the function
    if (typeof str !== 'string') {
        return 'Some error: the first argument must be a string';
    }
    if (typeof numericStr !== 'number') {
        return 'Some error: the second argument must be a number';
    }
    if (typeof left !== 'boolean') {
        return 'Some error: the fourth argument must be a boolean value';
    }
    // Truncated string using substr method, but this is a deprecated method and "slice" can be used instead
    if (numericStr < str.length) {
        const result = str.substr(0, numericStr);
        console.log(`'${result}'`);
        return result;
    }
    if (typeof oneSymbol !== 'string' || oneSymbol.length !== 1) {
        return 'Some error: the complement symbol must be a string of length 1';
    }
    // Because the last function call has only 2 arguments it expects 3...4
    // I made the arguments.length property containing the number of arguments passed to the function.
    if (arguments.length < 3 || arguments.length > 4) {
        return 'Some error: Invalid number of arguments, expected 3..4';
    }

    // Ending a function before calling it
    const padSymbol = numericStr - str.length;
    const padRepeat = oneSymbol.repeat(padSymbol);
    const padResults = !left ? padRepeat + str : str + padRepeat;
    console.log(padResults);
    return padResults;
}

//  Function call
padString('string',12 , '*');
padString('string', 9, '*', false);
padString('string', 4);
