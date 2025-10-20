import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TaskDetails from "./pages/TaskDetails";
import About from "./pages/About";

export default function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand bg-dark navbar-dark px-3">
                <Link to="/" className="navbar-brand">Todo Manager</Link>
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task/:id" element={<TaskDetails />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};
