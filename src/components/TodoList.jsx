import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, toggleStatus, deleteTask }) {
    if (tasks.length === 0) {
        return <p className="text-center text-muted">Немає задач 😌</p>;
    }
    return (
        <ul className="list-group">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleStatus={toggleStatus}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
};
