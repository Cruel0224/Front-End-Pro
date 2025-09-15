import { useState } from "react";

export default function RenderAndCommit() {
    const [text, setText] = useState("");

    return (
        <div>
            <h2>Render and Commit Example</h2>
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
