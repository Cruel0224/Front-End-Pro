import { useState } from "react";

export default function StateMemory() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>State: A Component's Memory Example</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
