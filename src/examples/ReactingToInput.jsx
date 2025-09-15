import { useState } from "react";

export default function ReactingToInput() {
    const [text, setText] = useState("");

    return (
        <div>
            <h2>Reacting to Input with State Example</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <p>You typed: {text}</p>
        </div>
    );
}
