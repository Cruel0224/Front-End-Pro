import { useState } from "react";

export default function ChoosingStateStructure() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    }

    return (
        <div>
            <h2>Choosing the State Structure Example</h2>
            <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <p>
                Full Name: {form.firstName} {form.lastName} <br />
                Email: {form.email}
            </p>
        </div>
    );
}
