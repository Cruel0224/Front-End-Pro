'use strict';

// The Navigation class is responsible for menu operation,
// highlighting the active item, and changing the URL
class Navigation {
    constructor() {

        // Store all menu links in a variable
        this.links = document.querySelectorAll('.menu a');

        // Save the block where we will display the content
        this.content = document.getElementById('content');

        // Run initial initialization
        this.init();
    };

    // Method for initial setup
    init() {
        this.updateActive(window.location.pathname);
        this.renderContent(window.location.pathname);

        // Add click handlers to all menu items
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Get the path from the data-path attribute
                const path = link.getAttribute('data-path');

                // Change the URL in the browser without reloading the page
                history.pushState({ path }, '', path);

                // Update the highlight of the active menu item
                this.updateActive(path);
                this.renderContent(path);
            });
        });

        // Listen to the popstate event — triggered when the "back" or
        // "forward" buttons are pressed in the browser
        window.addEventListener('popstate', (e) => {

            // Get the path from state, or if it is not there — from location.pathname
            const path = e.state?.path || window.location.pathname;
            this.updateActive(path);
            this.renderContent(path);
        });
    };

    // Method for highlighting the active menu item
    updateActive(pathname) {
        this.links.forEach(link => {

            // If the link path matches the current one, add the active class
            if (link.getAttribute('data-path') === pathname) {
                link.classList.add('active');
            } else {

                // Otherwise, remove the highlight
                link.classList.remove('active');
            }
        });
    };

    // Create new scratch file from selection
    renderContent(pathname) {
        switch (pathname) {
            case '/home':
                this.content.textContent = 'Це головна сторінка.';
                break;
            case '/about':
                this.content.textContent = 'Це сторінка про нас.';
                break;
            case '/contact':
                this.content.textContent = 'Це сторінка контактів.';
                break;
            default:
                this.content.textContent = 'Сторінку не знайдено.';
        }
    };
}

// Run Navigation only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
