'use strict';

function createUserInterface() {

    const form = document.querySelector('[data-form]');

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.disabled = true;

    const inputs = Array.from(form.querySelectorAll('input'));

    // Find the <ul> element for the contact list with the .list-group class
    const listGroup = document.querySelector('.list-group');

    // Find the search element by id
    const searchInput = document.getElementById('searchInput');

    // Render contacts in the list
    const render = (query = '') => {
        const data = dataBase.getData().filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(query.toLowerCase()) || user.phone.includes(query);
        });
        listGroup.innerHTML = '';
        data.forEach(element => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex align-items-center justify-content-between';

            const divText = document.createElement('div');
            divText.innerHTML = `<b>${element.firstName} ${element.lastName}</b><br><small>${element.phone}</small>`;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                dataBase.deleteData({id: element.id});
                render(document.getElementById('searchInput').value);
            });
            // Add text and a button
            li.appendChild(divText);
            li.appendChild(deleteBtn);
            // Add the generated information to the contact list on the page
            listGroup.appendChild(li);
        });
    };

    // Search field handler
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            render(searchInput.value);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target} = e;

        // Get data from the form
        const data = inputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        }, {});

        target.reset();

        dataBase.setData(data);
        render();
        submitBtn.setAttribute('disabled', 'disabled');
    });

    const disabledHandler = () => {
        let isInputFilled = true;
        for(let i = 0; i < inputs.length; i++) {
            if(!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if(isInputFilled) {
            submitBtn.removeAttribute('disabled');
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    };
    form.addEventListener('input', disabledHandler);
    render();
}

createUserInterface();