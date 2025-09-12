import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const user = "Котик 🐾";
    const tasks = ["Вивчити React", "Зробити ДЗ", "Обійняти Кицьку 💖"];

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h1>Привіт, {user}!</h1>
            <p>Це мій перший проект на React з Vite 🚀</p>

            <h2>Список завдань:</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ margin: "5px 0" }}>
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;