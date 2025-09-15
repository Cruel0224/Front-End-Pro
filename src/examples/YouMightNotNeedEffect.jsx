import { useState } from "react";

export default function YouMightNotNeedEffect() {
    const [count, setCount] = useState(0);

    const doubled = count * 2; // обчислення без useEffect

    return (
        <div>
            <h2>You Might Not Need an Effect Example</h2>
            <p>Count: {count}</p>
            <p>Doubled: {doubled}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
