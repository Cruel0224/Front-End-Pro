import { useState } from "react";

// Custom hook
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount((c) => c + 1);
    }

    function decrement() {
        setCount((c) => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return { count, increment, decrement, reset };
}

export default function UseCounterHook() {
    const counter = useCounter(0);

    return (
        <div>
            <h2>Reusing Logic with Custom Hooks Example</h2>
            <p>Count: {counter.count}</p>
            <button onClick={counter.increment}>Increment</button>
            <button onClick={counter.decrement}>Decrement</button>
            <button onClick={counter.reset}>Reset</button>
        </div>
    );
}
