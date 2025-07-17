📌 Description:
Implement an interface for managing categories (e.g. for a blog or store). Categories can be nested (have subcategories). Each category can be:
Create (at the root level or as a subcategory)
View (nested tree structure)
Edit name
Delete (along with all subcategories)
Save state in localStorage

🎯 Functional requirements:

1. Read (building a tree)

Show category tree (nested UL → LI)

When clicking on the name — open/close nested categories

2. Create
Button "➕ Add category" — adds a new root category

Button "➕ Add subcategory" next to each category — adds a nested one

3. Update
Next to each category — button ✏️ to edit the name (input + confirm)

4. Delete
Next to each category — button 🗑 to delete (with confirmation), recursively deletes all nested ones

🛠️ Technical limitations:

Only pure JS + HTML + CSS
You can use data-attributes* to identify nodes
The tree is stored in the online memory (array of objects)

📦 Additionally:
Category filtering by name
