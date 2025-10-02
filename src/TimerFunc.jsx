import React, { useState, useEffect } from "react";

function TimerFunc({ unmountTimer }) {
    const [seconds, setSeconds] = useState(
        Number(localStorage.getItem("timerFunc")) || 0
    );
    const [running, setRunning] = useState(localStorage.getItem("timerFuncRunning") === "true");
    useEffect(() => {
        let interval = null;
        if (running) {
            interval = setInterval(() => {
                setSeconds((s) => s + 1);
            }, 1000);
            localStorage.setItem("timerFuncRunning", "true");
        } else {
            localStorage.setItem("timerFuncRunning", "false");
        }
        return () => clearInterval(interval);
    }, [running]);
    useEffect(() => {
        console.log("Updated:", seconds);
        localStorage.setItem("timerFunc", seconds.toString());
    }, [seconds]);
    useEffect(() => {
        console.log("Func Timer mounted");
        return () => console.log("Func Timer unmounted");
    }, []);
    const reset = () => {
        setSeconds(0);
        setRunning(false);
        localStorage.setItem("timerFunc", "0");
        localStorage.setItem("timerFuncRunning", "false");
    };
    return (
        <div className="timer">
            <h3 className={running ? "" : "stopped"}>{seconds} сек</h3>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={unmountTimer}>Unmount Timer</button>
        </div>
    );
}

export default TimerFunc;

