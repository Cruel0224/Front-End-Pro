DZ 59. Creating users

Make a form that creates “user cards” with values ​​from inputs. After submitting, the new user appears in the list to the right of the form. If any field is empty, submission is prohibited.

Form fields:

- First Name (firstName, text) — required
- Last name (lastName, text) — required
- Age (age, number, non-negative integers) — required
- Photo (photo, input type="file", only one image) — required

Functional requirements:

1. Form on the left, user list on the right (two columns)
2. Controlled inputs via useState
3. Validation: do not allow submit if any field is empty; for age — number ≥ 0
4. Show photo on card

Use:

1. https://react-bootstrap.netlify.app/
2. https://react-bootstrap.netlify.app/docs/components/cards
3. https://react-bootstrap.netlify.app/docs/forms/form-control
