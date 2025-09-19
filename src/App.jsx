import React, { useState } from "react";
import "./App.css";

function App() {
    const [activePage, setActivePage] = useState("home");
    const renderContent = () => {
        switch (activePage) {
            case "home":
                return (
                    <section>
                        <h2>Головна</h2>
                        <p>
                            Ласкаво просимо на наш сайт! Тут ви знайдете актуальні новини та
                            інформацію про наші проєкти.
                        </p>
                    </section>
                );
            case "about":
                return (
                    <section>
                        <h2>Про нас</h2>
                        <p>
                            Ми команда розробників, яка створює сучасні веб-додатки. Наші
                            рішення поєднують простоту, швидкість і стильний дизайн.
                        </p>
                    </section>
                );
            case "services":
                return (
                    <section>
                        <h2>Послуги</h2>
                        <ul>
                            <li>🔹 Розробка веб-сайтів</li>
                            <li>🔹 Мобільні додатки</li>
                            <li>🔹 Підтримка та технічне обслуговування</li>
                        </ul>
                    </section>
                );
            case "contacts":
                return (
                    <section>
                        <h2>Контакти</h2>
                        <p>📍 Адреса: м. Київ, вул. Незалежності, 12</p>
                        <p>📞 Телефон: +38 (093) 123-45-67</p>
                        <p>📧 Email: info@mysite.com</p>
                    </section>
                );
            default:
                return <p>Виберіть сторінку з меню.</p>;
        }
    };
    return (
        <div className="app">
            <header className="header">
                <div className="logo">🌐 MySite</div>
                <nav className="topnav">
                    <a onClick={() => setActivePage("home")}>Головна</a>
                    <a onClick={() => setActivePage("services")}>Послуги</a>
                    <a onClick={() => setActivePage("about")}>Про нас</a>
                    <a onClick={() => setActivePage("contacts")}>Контакти</a>
                </nav>
            </header>
            <div className="content">
                <aside className="sidebar">
                    <h3>Меню</h3>
                    <ul>
                        <li>
                            <a onClick={() => setActivePage("home")}>Головна</a>
                        </li>
                        <li>
                            <a onClick={() => setActivePage("about")}>Про нас</a>
                        </li>
                        <li>
                            <a onClick={() => setActivePage("services")}>Послуги</a>
                        </li>
                        <li>
                            <a onClick={() => setActivePage("contacts")}>Контакти</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">{renderContent()}</main>
            </div>
            <footer className="footer">© 2025 MySite. Усі права захищені.</footer>
        </div>
    );
}

export default App;
