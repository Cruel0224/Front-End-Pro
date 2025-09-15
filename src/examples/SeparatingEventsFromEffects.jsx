import { useState, useEffect } from "react";

export default function SeparatingEventsFromEffects() {
    const [count, setCount] = useState(0);

    // Effect only for logging
    useEffect(() => {
        console.log(`Count changed: ${count}`);
    }, [count]);

    function handleClick() {
        setCount(count + 1); // Event updates state
    }

    return (
        <div>
            <h2>Separating Events from Effects Example</h2>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
