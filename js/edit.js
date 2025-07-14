'use strict';


// Get a list of all products from localStorage.
const editProducts = JSON.parse(localStorage.getItem('products') || '[]');

// Read the ID of the product we are going to edit.
const id = +localStorage.getItem('selectedProductID');

// We find the product.
const product = editProducts.find(prod => prod.id === id);

// We are checking.
if (!product) {
    alert('Товар не знайдено!');
    window.location.href = 'index.html';
}

// Fill in the form fields with the data of the found product.
document.getElementById('titleName').value = product.titleName;
document.getElementById('description').value = product.description;
document.getElementById('price').value = product.price;

// Event handler for submitting an edit form.
document.getElementById('editForm')
    .addEventListener('submit', function (notReload) {

    // Don't let the form reload the page.
    notReload.preventDefault();

    // Get updated values from the form.
    const titleName = document.getElementById('titleName').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = +document.getElementById('price').value;

    // We do validation.
    if (!titleName || !description || isNaN(price) || price <= 0) {
        alert('Будь ласка, заповніть всі поля коректно!');
        return;
    }

    // We are creating a new array of products.
    const updatedProducts = editProducts.map(prod =>
        prod.id === id ? { ...prod, titleName, description, price } : prod);

    // Store in localStorage.
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    // Delete selectedProductID.
    localStorage.removeItem('selectedProductID');

    // Transition to the main hundred.
    window.location.href = 'index.html';
});