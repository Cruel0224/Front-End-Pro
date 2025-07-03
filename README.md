There are several product "cards" with the data-category attribute (for example, "fruit", "vegetable").
There is a selector with filters. When the user selects a category, only those cards that match it are shown.

<select id="filter">
<option value="all">Усі</option>
<option value="fruit">Фрукти</option>
<option value="vegetable">Овочі</option>
</select>
<div class="card" data-category="fruit">🍎 Яблуко</div>
<div class="card" data-category="vegetable">🥕 Морква</div>
<div class="card" data-category="fruit">🍌 Банан</div>

Expected actions:

- React to a change in <select>
- Iterate over .card and hide/show depending on the data-category
