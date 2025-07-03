'use strict';

// We get the #filter element and all elements with the class .card.
const select = document.getElementById('filter');
const cards = document.querySelectorAll('.card');

// Add an event handler and read the selected value.
select.addEventListener('change', function () {
    const filterSelected = this.value;

// We go through all the cards,
// determine if the card matches the selected category.
    cards.forEach(card => {
        const match = filterSelected === 'all'
            || card.dataset.category === filterSelected;

// Add the hidden class if false, remove if true.
        card.classList.toggle('overflow', !match);
    });
});