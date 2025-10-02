import React, { Component } from "react";
import "./Timer.css";

class TimerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: Number(localStorage.getItem("timerClass")) || 0,
            running: localStorage.getItem("timerClassRunning") === "true",
        };
        this.interval = null;
    };
    componentDidMount() {
        console.log("Class Timer mounted");
        const savedRunning = localStorage.getItem("timerClassRunning") === "true";
        if (savedRunning) {
            this.setState({ running: true });
            this.interval = setInterval(() => {
                this.setState(prev => ({ seconds: prev.seconds + 1 }));
            }, 1000);
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.seconds !== this.state.seconds) {
            console.log("Updated:", this.state.seconds);
            localStorage.setItem("timerClass", this.state.seconds.toString());
        }
    };
    componentWillUnmount() {
        if (this.interval) clearInterval(this.interval);
        console.log("Class Timer unmounted");
    };
    start = () => {
        if (!this.state.running) {
            this.interval = setInterval(() => {
                this.setState(prev => ({ seconds: prev.seconds + 1 }));
            }, 1000);
            this.setState({ running: true });
            localStorage.setItem("timerClassRunning", "true");
        }
    };
    stop = () => {
        if (this.interval) clearInterval(this.interval);
        this.setState({ running: false });
        localStorage.setItem("timerClassRunning", "false");
    };
    reset = () => {
        if (this.interval) clearInterval(this.interval);
        this.setState({ seconds: 0, running: false });
        localStorage.setItem("timerClass", "0");
        localStorage.setItem("timerClassRunning", "false");
    };
    render() {
        return (
            <div className="timer">
                <h3 className={this.state.running ? "" : "stopped"}>
                    {this.state.seconds} сек
                </h3>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.props.unmountTimer}>Unmount Timer</button>
            </div>
        );
    };
}
export default TimerClass;
