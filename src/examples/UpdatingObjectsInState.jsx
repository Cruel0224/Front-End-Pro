import { useState } from "react";

export default function UpdatingObjectsInState() {
    const [person, setPerson] = useState({
        name: "Lin Lanying",
        age: 101
    });

    function haveBirthday() {
        setPerson((prevPerson) => ({
            ...prevPerson,
            age: prevPerson.age + 1
        }));
    }

    return (
        <div>
            <h2>Updating Objects in State Example</h2>
            <p>
                {person.name} is {person.age} years old.
            </p>
            <button onClick={haveBirthday}>Have Birthday</button>
        </div>
    );
}
