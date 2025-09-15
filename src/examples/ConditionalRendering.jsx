import { useState } from "react";

function Mailbox({ unreadMessages }) {
    return (
        <div>
            <h2>Conditional Rendering Example</h2>
            {unreadMessages.length > 0 && (
                <p>You have {unreadMessages.length} unread messages.</p>
            )}
            {unreadMessages.length === 0 && <p>No new messages.</p>}
        </div>
    );
}

export default function ConditionalRendering() {
    const [messages, setMessages] = useState(["Hello!", "React is great!"]);

    return (
        <div>
            <Mailbox unreadMessages={messages} />
            <button onClick={() => setMessages([])}>Clear Messages</button>
        </div>
    );
}
