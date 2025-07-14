You need to implement 3 pages

1. Page - form for creating a product (Name, description, price)
2. Page - Table of created products (id, name, price, delete button, edit button)
3. Product editing page - the same as creation, only when saving, the created product should be edited, NOT created
Pages can have separate script files and be separated from each other

Data transfer between pages should be done via localStorage

In localStorage you will have 2 data items

- Array of product objects
- Field selectedProductID - where the id of the selected product for the edit product page will be stored.


On the product creation page, there should be a check of inputs for correctness of input, when clicking on the create button, the data should first be written to localStorage and only then redirect the user to the product list page

On the product list page, display a list of products, the newest ones at the top.

When clicking on the Edit button of a specific product in the product table, you need to write the product ID that was clicked on to localStorage in the selectedProductID field and then open the product editing page.

Use bootstrap for layout, no need to bother, the interface can be simple, and just implement what is described above.
