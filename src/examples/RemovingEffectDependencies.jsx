import { useState, useEffect } from "react";

export default function RemovingEffectDependencies() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            console.log(`Count inside interval: ${count}`);
        }, 1000);

        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // empty dependency array, interval will log stale count

    return (
        <div>
            <h2>Removing Effect Dependencies Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
