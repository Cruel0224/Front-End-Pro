import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadTasks, saveTasks } from "../localStorageUtils";

export default function TaskDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState(loadTasks());
    const [task, setTask] = useState(null);
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const found = tasks.find((t) => t.id === Number(id));
        setTask(found);
        setEditedTask(found ? { ...found } : null);
    }, [id, tasks]);

    const handleChange = (key, value) => {
        setEditedTask((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        const updated = tasks.map((t) =>
            t.id === Number(id) ? editedTask : t
        );
        setTasks(updated);
        saveTasks(updated);
        setTask(editedTask);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedTask({ ...task });
        setIsEditing(false);
    };

    if (!task) return <p className="text-center mt-4">Задачу не знайдено 😢</p>;

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Деталі задачі</h2>
            <div className="card p-4 shadow-sm">
                <label className="fw-semibold mb-1">Заголовок:</label>
                <input
                    className="form-control mb-3"
                    value={editedTask.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    disabled={!isEditing}
                />
                <label className="fw-semibold mb-1">Опис:</label>
                <textarea
                    className="form-control mb-3"
                    rows="4"
                    value={editedTask.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    disabled={!isEditing}
                ></textarea>
                <p><strong>Статус:</strong> {task.status}</p>
                <p><strong>Дата створення:</strong> {task.createdAt}</p>
                <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>
                        ← Back to list
                    </button>
                    {!isEditing ? (
                        <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                            ✏️ Редагувати
                        </button>
                    ) : (
                        <div className="d-flex gap-2">
                            <button className="btn btn-success" onClick={handleSave}>
                                💾 Зберегти
                            </button>
                            <button className="btn btn-outline-danger" onClick={handleCancel}>
                                ❌ Скасувати
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
