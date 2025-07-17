'use strict';

// Save to localStorage
let categories = JSON.parse(localStorage.getItem('categories')) || [];
let filter = '';

function saveCategories() {
    localStorage.setItem('categories', JSON.stringify(categories));
}

// Main tree rendering function
function render() {
    const tree = document.getElementById('tree');
    tree.innerHTML = '';
    categories.forEach(cat => {
        tree.appendChild(renderItem(cat));
    });
}

// Rendering a single category (and its children)
function renderItem(cat) {
    const li = document.createElement('li');

    // Filtration
    if (filter && !cat.name.toLowerCase().includes(filter) && !hasMatchingChild(cat)) {
        return document.createDocumentFragment();
    }

    // Category name
    const label = document.createElement('span');
    label.textContent = cat.name;
    label.className = 'category';

    // opening/closing children
    label.onclick = () => ul.classList.toggle('hidden');

    // Child list
    const ul = document.createElement('ul');
    ul.classList.add('hidden');
    (cat.children || []).forEach(child => ul.appendChild(renderItem(child)));

    // Action buttons
    const btnAdd = createButton('➕', () => addSub(cat.id));
    const btnEdit = createButton('✏️', () => edit(cat.id));
    const btnDel = createButton('🗑', () => remove(cat.id));
    li.append(label, btnAdd, btnEdit, btnDel, ul);
    return li;
}

// Creating a button
function createButton(text, handler) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.onclick = handler;
    return btn;
}

// Adding a root category
function addRootCategory() {
    const name = prompt('Назва категорії:');
    if (name) {
        categories.push({ id: Date.now(), name, children: [] });
        saveCategories();
        render();
    }
}

// Adding a subcategory
function addSub(parentId) {
    const name = prompt('Назва підкатегорії:');
    if (!name) return;
    const parent = find(categories, parentId);
    parent.children.push({ id: Date.now(), name, children: [] });
    saveCategories();
    render();
}

// Editing the name
function edit(id) {
    const cat = find(categories, id);
    const newName = prompt('Нова назва:', cat.name);
    if (newName) {
        cat.name = newName;
        saveCategories();
        render();
    }
}

// Delete category (with confirmation)
function remove(id) {
    if (!confirm('Видалити категорію з усіма підкатегоріями?')) return;
    categories = deleteById(categories, id);
    saveCategories();
    render();
}

// Finds category by ID
function find(arr, id) {
    for (const item of arr) {
        if (item.id === id) return item;
        const found = find(item.children || [], id);
        if (found) return found;
    }
}

// Recursively deletes the category
function deleteById(arr, id) {
    return arr
        .filter(item => item.id !== id)
        .map(item => ({
            ...item,
            children: deleteById(item.children || [], id)
        }));
}

// Checks if the category has children that match the filter
function hasMatchingChild(cat) {
    return (cat.children || []).some(child =>
        child.name.toLowerCase().includes(filter) || hasMatchingChild(child)
    );
}

// Filter processing
document.getElementById('filterInput')
    .addEventListener('input', (e) => {
    filter = e.target.value.toLowerCase();
    render();
});

render();
