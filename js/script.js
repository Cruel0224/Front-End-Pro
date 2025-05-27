'use strict';

const name = prompt("Please enter your name:");
if (name) {
    const Greeting = confirm("Would you like to see a greeting on this page?");
    if (Greeting) {
        alert("Hello, " + name + "!");
    }
}