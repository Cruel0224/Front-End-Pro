import { useRef } from "react";

export default function ReferencingValuesWithRefs() {
    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <div>
            <h2>Referencing Values with Refs Example</h2>
            <input ref={inputRef} placeholder="Focus me with button" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}
