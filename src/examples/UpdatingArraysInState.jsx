import { useState } from "react";

export default function UpdatingArraysInState() {
    const [items, setItems] = useState(["Apple", "Banana"]);

    function addItem() {
        const nextItem = `Item ${items.length + 1}`;
        setItems([...items, nextItem]);
    }

    return (
        <div>
            <h2>Updating Arrays in State Example</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}
