'use strict';


function tableProducts() {
    // Get a list of products from localStorage (or an empty array if there is nothing yet).
    const products = JSON.parse(localStorage.getItem('products') || '[]');

    // We will insert lines here.
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';

    // We go through each product and create a new row.
    products.forEach(product => {
        let row = document.createElement('tr');

        // Fill in the data.
        row.innerHTML = `<td>${product.id}</td>
        <td>${product.titleName}</td>
        <td>${product.price.toFixed(2)} грн.</td>
        <td>
            <button class="btn btn-warning btn-sm me-2" onclick="editProduct(${product.id})">Редагувати</button>
            <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Видалити</button>
        </td>`;

        // Add to the table.
        tableBody.appendChild(row);
    });
}

// Product editing function.
function editProduct(id) {
    localStorage.setItem('selectedProductID', id);

    // Go to the editing page.
    window.location.href = 'edit.html';
}

// Product deletion function.
function deleteProduct(id) {
    const productsDeleted = JSON.parse(localStorage.getItem('products') || '[]');
    const updated = productsDeleted.filter(prod => prod.id !== id);
    localStorage.setItem('products', JSON.stringify(updated));
    tableProducts();
}

tableProducts();



