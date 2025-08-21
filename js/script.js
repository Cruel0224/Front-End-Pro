'use strict';

// Get references to HTML elements
const taskInput = document.getElementById('taskInput');     // input field
const addBtn = document.getElementById('addBtn');           // "Add" button
const taskList = document.getElementById('taskList');       // <ul> for tasks
const doneCount = document.getElementById('doneCount');     // counter for completed
const activeCount = document.getElementById('activeCount'); // counter for active
const filters = document.querySelector('.filters');              // filter buttons container

// Current filter ("all", "active", "completed")
let filter = "all";

// Array to store tasks
// Each task object: { id, text, completed, element }
let tasks = [];

// ---- COUNTERS ----
function updateCounters() {
    const completed = tasks.filter(t => t.completed).length;
    const active = tasks.length - completed;
    doneCount.textContent = completed;
    activeCount.textContent = active;
}

// ---- CREATE <li> ----
function createTaskElement(task) {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('completed');

    // Task text
    const span = document.createElement('span');
    span.textContent = task.text;

    // "Done" button – toggles task state
    const doneBtn = document.createElement('button');
    doneBtn.textContent = "Done";
    doneBtn.addEventListener('click', () => {
        task.completed = !task.completed;
        li.classList.toggle('completed', task.completed);
        updateCounters();
        applyFilter();
    });

    // "Delete" button – removes task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => {
        tasks = tasks.filter(t => t.id !== task.id);
        li.remove();
        updateCounters();
    });

    // Append elements to <li>
    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    task.element = li;      // save reference to DOM element
    return li;
}

// ---- ADD NEW TASK ----
function addTask(text) {
    const task = {
        id: Date.now(),   // unique id (timestamp)
        text,             // task text
        completed: false, // initially not completed
        element: null     // will store DOM reference later
    };
    tasks.push(task);
    const li = createTaskElement(task);
    taskList.appendChild(li);
    updateCounters();
    applyFilter();
}

// ---- FILTERING ----
function applyFilter() {
    tasks.forEach(task => {
        switch (filter) {
            case "all":
                task.element.style.display = "flex";
                break;
            case "active":
                task.element.style.display = task.completed ? "none" : "flex";
                break;
            case "completed":
                task.element.style.display = task.completed ? "flex" : "none";
                break;
        }
    });
}

// ---- EVENTS ----
// "Add" button click
addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();    // get text from input
    if (text) {
        addTask(text);          // add new task
        taskInput.value = "";        // clear input field
    }
});

// Filter buttons click
filters.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {      // check if clicked element is button
        filter = e.target.dataset.filter;       // get value from data-filter
        applyFilter();                          // apply filter
    }
});
