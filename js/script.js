'use strict';

// ==== MODEL ====
// Responsible for storing and manipulating task data.
function TodoModel() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.addTodo = function (data) {
        const todo = {
            id: Date.now(),
            title: data.title.trim(),
            description: data.description.trim(),
            completed: false
        };
        this.todos.push(todo);
        this._save(); // save the updated list in localStorage.
        return todo;
    };

    // Deletes task by id.
    this.deleteTodo = function (id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this._save();
    };

    // Deletes all tasks (clears the list).
    this.deleteAll = function () {
        this.todos = [];
        this._save();
    };

    // Toggles the "completed/not completed" status of the task by id.
    this.toggleCompleted = function (id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        });
        this._save();
    };

    // Saves the current state of tasks in localStorage.
    this._save = function () {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };

    // Returns an array of tasks.
    this.getTodos = function () {
        return this.todos;
    };
}

// ==== VIEW ====
// Responsible for rendering and updating the DOM.
function TodoView() {
    this.container = document.querySelector('[data-todo-items]');

    this.createTodoElement = function (todo) {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-4';
        wrapper.setAttribute('data-id', todo.id);
        const completedClass = todo.completed ? 'text-decoration-line-through text-muted' : '';

        // Inner HTML of the task card.
        wrapper.innerHTML = `
      <div class="taskWrapper ${completedClass}">
        <div class="taskHeading">${todo.title}</div>
        <div class="taskDescription">${todo.description}</div>
        <div class="mt-2 d-flex">
          <button class="btn btn-sm btn-success btn-toggle" title="Позначити як виконано">✅</button>
          <button class="btn btn-sm btn-danger btn-delete" title="Видалити задачу">🗑️</button>
        </div>
      </div>
    `;
        return wrapper;
    };

    // Completely refreshes the output of tasks on the page.
    this.renderTodos = function (todos) {
        this.container.innerHTML = '';
        todos.forEach(todo => {
            const el = this.createTodoElement(todo);
            this.container.appendChild(el);
        });
    };

    // Adds one task to the end of the list (without a full rerender).
    this.appendTodo = function (todo) {
        const el = this.createTodoElement(todo);
        this.container.appendChild(el);
    };
}

// ==== CONTROLLER ====
// Coordinates model and view, handles user events.
function TodoController(model, view) {
    this.model = model;
    this.view = view;

    // Find the necessary DOM elements.
    this.form = document.querySelector('#todoForm');
    this.clearBtn = document.querySelector('#clearBtn');
    this.deleteAllBtn = document.querySelector('#deleteAllBtn');

    // Task add form submit handler.
    this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = this._getFormData(e.target);

        // If any fields are empty, show an error.
        if (!formData) {
            alert('Заповніть всі поля!');
            return;
        }

        // Add the task to the model and add it to the page.
        const newTodo = this.model.addTodo(formData);
        this.view.appendTodo(newTodo);

        // Clear the form after adding.
        e.target.reset();
    });

    // "Clear" button handler.
    this.clearBtn.addEventListener('click', () => {
        this.form.reset();
    });

    // Handler for the "Delete All" button.
    this.deleteAllBtn.addEventListener('click', () => {
        if (confirm('Ви впевнені, що хочете видалити всі задачі?')) {
            this.model.deleteAll();
            this.view.renderTodos(this.model.getTodos());
        }
    });

    // Helper function — collects data from the form,
    // or returns null if the fields are empty.
    this._getFormData = function (form) {
        const inputs = form.querySelectorAll('input, textarea');
        const data = {};

        for (const input of inputs) {
            if (!input.value.trim()) return null;
            data[input.name] = input.value;
        }

        return data;
    };

    // Handler for clicks on task buttons (execute, delete).
    this._handleActions = function (e) {
        const btn = e.target.closest('button');
        if (!btn) return;

        const wrapper = e.target.closest('[data-id]');
        if (!wrapper) return;

        const id = Number(wrapper.dataset.id);

        // Delete a specific task.
        if (btn.classList.contains('btn-delete')) {
            this.model.deleteTodo(id);
            this.view.renderTodos(this.model.getTodos());
        }

        // Toggle task execution state.
        if (btn.classList.contains('btn-toggle')) {
            this.model.toggleCompleted(id);
            this.view.renderTodos(this.model.getTodos());
        }
    };

    // Application initialization.
    this.init = function () {
        this.view.renderTodos(this.model.getTodos());
        this.view.container.addEventListener('click', this._handleActions.bind(this));
    };
}

// ==== INIT ====
// Create a model, view, and controller, and run the application.
const app = new TodoController(new TodoModel(), new TodoView());
app.init();
