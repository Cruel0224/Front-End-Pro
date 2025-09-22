import { useState } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        setTodos([...todos, { text: inputValue, done: false }]);
        setInputValue("");
    };
    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    };
    return (
        <div className="app">
            <h1>📋 ToDo List</h1>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => toggleTodo(index)}
                        className={todo.done ? "done" : ""}
                    >
                        {todo.text}
                    </li>
                ))};
            </ul>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    placeholder="Нова справа..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Додати</button>
            </form>
        </div>
    );
}

export default App;
