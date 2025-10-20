import React from "react";
import { Link } from "react-router-dom";

export default function TodoItem({ task, toggleStatus, deleteTask }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <strong className={task.status === "completed" ? "text-decoration-line-through" : ""}>
                    {task.title}
                </strong>
                <div className="text-muted small">
                    {task.description.length > 50 ? task.description.slice(0, 50) + "…" : task.description}
                </div>
                <div className="text-muted small">{task.createdAt}</div>
            </div>

            <div className="btn-group">
                <button className="btn btn-sm btn-success" onClick={() => toggleStatus(task.id)}>
                    {task.status === "completed" ? "↩" : "✔"}
                </button>
                <Link to={`/task/${task.id}`} className="btn btn-sm btn-info text-white">🔍</Link>
                <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task.id)}>🗑️</button>
            </div>
        </li>
    );
};
