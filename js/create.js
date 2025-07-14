'use strict';

// Setting an event handler for the product creation form.
document.getElementById('createForm')
    .addEventListener('submit', function (notReload) {

    // Don't let the form reload the page.
    notReload.preventDefault();

    // Read values from inputs and trim extra spaces.
    const titleName = document.getElementById('titleName').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = +document.getElementById('price').value;

    // We are checking.
    if (!titleName || !description || isNaN(price) || price <= 0) {
        alert('Будь ласка, заповніть усі поля коректно!');
        return;
    }

    // Creating a new product object.
    const newProductObject = {

        // Generate a unique ID.
        id: Date.now(),
        titleName,
        description,
        price
    };

    // Get the current list of products from localStorage or create an empty array.
    let createProducts = JSON.parse(localStorage.getItem('products') || '[]');

    // Add a new product to the beginning of the array (new products at the top).
    createProducts.unshift(newProductObject);

    // We store the updated array in localStorage.
    localStorage.setItem('products', JSON.stringify(createProducts));

    // Transition to the main hundred.
    window.location.href = 'index.html';
});