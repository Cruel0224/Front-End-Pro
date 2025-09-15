import { useRef } from "react";

export default function ManipulatingDOMWithRefs() {
    const divRef = useRef(null);

    function changeColor() {
        if (divRef.current) {
            divRef.current.style.backgroundColor =
                divRef.current.style.backgroundColor === "lightblue"
                    ? "lightgreen"
                    : "lightblue";
        }
    }

    return (
        <div>
            <h2>Manipulating the DOM with Refs Example</h2>
            <div
                ref={divRef}
                style={{ width: "200px", height: "100px", backgroundColor: "lightblue" }}
            >
                Color Box
            </div>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}
