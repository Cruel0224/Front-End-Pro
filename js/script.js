'use strict';

function demonstrations() {
    for (let i = 0; i < 1; i++) {
        console.log('До оголошення змінної:')
       // If you refer to var before the declaration — you will get undefined.
        console.log(varVariable);
        /*
        "Temporal Dead Zone" (TDZ),
         which threatens a ReferenceError if you refer to a modified one before its declaration.

        console.log('letVariable:', letVariable);
        console.log('constVariable:', constVariable);
        */

        var varVariable = 10;
        let letVariable = 20;
        const constVariable = 30;

        console.log('Всередині циклу:');
        console.log('varVariable:', varVariable);
        console.log('letVariable:', letVariable);
        console.log('constVariable:', constVariable);
    }

    console.log('\nПоза циклом:');
    // Works — functional scope. Goes up to the beginning of the function.
    // If you refer to it before the declaration — you will get undefined.
    console.log('varVariable:', varVariable);       // functional scope

    /* let and const no longer exist outside of a loop
    are also raised, but are not available until declared.
    They fall into the so-called "Temporal Dead Zone" (TDZ),
    which causes a ReferenceError if you access the variable before it is declared.

         console.log('letVariable:', letVariable);     // block scope
         console.log('constVariable:', constVariable);   // block scope
     */
    console.log('letVariable: ReferenceError — змінна недоступна поза блоком');
    console.log('constVariable: ReferenceError — змінна недоступна поза блоком');
}

demonstrations();