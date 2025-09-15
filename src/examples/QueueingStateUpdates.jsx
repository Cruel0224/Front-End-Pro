import { useState } from "react";

export default function QueueingStateUpdates() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((c) => c + 1);
        setCount((c) => c + 1);
        setCount((c) => c + 1);
    }

    return (
        <div>
            <h2>Queueing a Series of State Updates Example</h2>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment 3 Times</button>
        </div>
    );
}
