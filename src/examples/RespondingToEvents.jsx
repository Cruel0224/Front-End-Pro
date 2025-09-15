import { useState } from "react";

export default function RespondingToEvents() {
    const [message, setMessage] = useState("Click the button!");

    function handleClick() {
        setMessage("Button clicked!");
    }

    return (
        <div>
            <h2>Responding to Events Example</h2>
            <p>{message}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
