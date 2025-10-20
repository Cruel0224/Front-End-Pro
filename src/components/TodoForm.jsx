import React, { useState } from "react";

export default function TodoForm({ addTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTask(title, description);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 mb-4">
            <input
                type="text"
                className="form-control"
                placeholder="Назва задачі"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="form-control"
                placeholder="Опис задачі (необов’язково)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button className="btn btn-primary">Add</button>
        </form>
    );
};