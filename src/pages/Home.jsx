import React, { useState, useEffect } from "react";
import { loadTasks, saveTasks } from "../localStorageUtils";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
    const [tasks, setTasks] = useState(loadTasks());
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const addTask = (title, description) => {
        const shortDescription = description && description.trim() !== ""
            ? description
            : title.length > 50
                ? title.slice(0, 50) + "..."
                : "Короткий опис відсутній";

        const newTask = {
            id: Date.now(),
            title,
            description: shortDescription,
            status: "active",
            createdAt: new Date().toLocaleString(),
        };

        setTasks([newTask, ...tasks]);
    };

    const toggleStatus = (id) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, status: t.status === "active" ? "completed" : "active" } : t
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const filteredTasks = tasks.filter(t =>
        filter === "all" ? true : t.status === filter
    );

    return (
        <div className="container mt-4">
            <h1 className="mb-3 text-center">Todo Manager</h1>

            <TodoForm addTask={addTask} />

            <div className="d-flex justify-content-center gap-2 my-3">
                <button className="btn btn-outline-primary" onClick={() => setFilter("all")}>Усі</button>
                <button className="btn btn-outline-success" onClick={() => setFilter("completed")}>Виконані</button>
                <button className="btn btn-outline-warning" onClick={() => setFilter("active")}>Активні</button>
            </div>

            <TodoList
                tasks={filteredTasks}
                toggleStatus={toggleStatus}
                deleteTask={deleteTask}
            />
        </div>
    );
};
