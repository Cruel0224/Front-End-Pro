import { useState, useEffect } from "react";

export default function LifecycleOfEffects() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect: count is", count);
        return () => {
            console.log("Cleanup: count was", count);
        };
    }, [count]);

    return (
        <div>
            <h2>Lifecycle of Reactive Effects Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
