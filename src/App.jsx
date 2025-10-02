import React, { useState } from "react";
import TimerClass from "./TimerClass.jsx";
import TimerFunc from "./TimerFunc.jsx";
import "./App.css";

function App() {
    const [showClassTimer, setShowClassTimer] = useState(true);
    const [showFuncTimer, setShowFuncTimer] = useState(true);
    return (
        <div className="App">
            <h1>⏱️ Два таймери</h1>
            <div className="timers-container">
                <div>
                    <h2>Класовий таймер</h2>
                    {showClassTimer ? (
                        <TimerClass unmountTimer={() => setShowClassTimer(false)} />
                    ) : (
                        <button onClick={() => setShowClassTimer(true)}>
                            Mount Class Timer
                        </button>
                    )}
                </div>
                <div>
                    <h2>Функціональний таймер</h2>
                    {showFuncTimer ? (
                        <TimerFunc unmountTimer={() => setShowFuncTimer(false)} />
                    ) : (
                        <button onClick={() => setShowFuncTimer(true)}>
                            Mount Func Timer
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
