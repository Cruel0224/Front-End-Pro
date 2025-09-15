import { createContext, useState, useContext } from "react";

// Створюємо контекст
const ThemeContext = createContext();

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.color }}>
            I am styled by theme context!
        </button>
    );
}

export default function ContextExample() {
    const [theme, setTheme] = useState({
        background: "black",
        color: "white"
    });

    return (
        <ThemeContext.Provider value={theme}>
            <h2>Passing Data Deeply with Context Example</h2>
            <Toolbar />
            <button
                onClick={() =>
                    setTheme((prev) =>
                        prev.background === "black"
                            ? { background: "white", color: "black" }
                            : { background: "black", color: "white" }
                    )
                }
            >
                Toggle Theme
            </button>
        </ThemeContext.Provider>
    );
}
