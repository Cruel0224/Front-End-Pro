'use strict';


const toggleTheme = document.getElementById('toggle-theme');    // Find the button.
toggleTheme.addEventListener('click',  () => {                 // Hang the click event handler.
    document.body.classList.toggle('dark-theme');                               // Switch the class to body.
});
