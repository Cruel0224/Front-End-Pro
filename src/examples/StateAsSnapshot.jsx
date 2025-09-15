import { useState } from "react";

export default function StateAsSnapshot() {
    const [count, setCount] = useState(0);

    function handleClick() {
        alert(`Before increment: ${count}`);
        setCount(count + 1);
        alert(`After increment: ${count}`);
    }

    return (
        <div>
            <h2>State as a Snapshot Example</h2>
            <p>Current count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
