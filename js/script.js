'use strict';

// Declare a class for tracking transition history
class HistoryTracker {
    constructor() {
        // Array to store all visited URLs in the current session
        this.visitedUrls = [];

        // Listen to the popstate event — it fires when going "back" or "forward"
        window.addEventListener('popstate', () => {

/*
Additionally, you can use the method to remove pages
from the array when pressing Back to show an array of current pages
this.visitedUrls.pop();
*/
            console.log('🔙 Popstate event triggered');
            // show an array of all visited URLs
            console.log('📜 Історія переходів:', this.visitedUrls);
        });
    };

    // Method for adding a new entry to history
    push(url) {
        history.pushState({ url }, null, url);

        // Store the URL in our local array
        this.visitedUrls.push(url);
        console.log(`✅ Додано ${url} до історії`);
    };

    // Method for going to the previous page
    back() {
        history.back();
        console.log('⬅️ Повернення на попередню сторінку');
    };
}

// Create an instance of the HistoryTracker class
const tracker = new HistoryTracker();

// Add a handler for the buttons
document.getElementById('goPage1').addEventListener('click', () => {
    tracker.push('/Сторінка 1');
});
document.getElementById('goPage2').addEventListener('click', () => {
    tracker.push('/Сторінка 2');
});
document.getElementById('goBack').addEventListener('click', () => {
    tracker.back();
});
