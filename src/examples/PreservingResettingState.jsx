import { useState } from "react";

export default function PreservingResettingState() {
    const [count, setCount] = useState(0);

    function resetCount() {
        setCount(0);
    }

    return (
        <div>
            <h2>Preserving and Resetting State Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}
