import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [photo, setPhoto] = useState(null);
    const [users, setUsers] = useState([]);
    const handlePhotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(URL.createObjectURL(e.target.files[0]));
        } else {
            setPhoto(null);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName.trim() || !lastName.trim() || age === "" || age < 0 || !photo) {
            alert("Будь ласка, заповніть усі поля правильно!");
            return;
        }
        const newUser = { firstName, lastName, age, photo };
        setUsers([...users, newUser]);
        setFirstName("");
        setLastName("");
        setAge("");
        setPhoto(null);
        e.target.reset();
    };
    return (
        <Container className="mt-4">
            <Row>
                <Col md={6} className="border-end pe-3">
                    <h3>Додати користувача</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Ім'я</Form.Label>
                            <Form.Control
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Прізвище</Form.Label>
                            <Form.Control
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Вік</Form.Label>
                            <Form.Control
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                min="0"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Фото</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Додати
                        </Button>
                    </Form>
                </Col>
                <Col md={6} className="ps-3">
                    <h3>Список користувачів</h3>
                    <div className="d-flex flex-wrap gap-3">
                        {users.map((user, index) => (
                            <Card key={index} style={{ maxWidth: "250px" }}>
                                <div className="bg-light">
                                    <Card.Img
                                        variant="top"
                                        src={user.photo}
                                        className="img-fluid h-100"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <Card.Body className="p-2">
                                    <Card.Title className="fs-6 mb-1">
                                        {user.firstName} {user.lastName}
                                    </Card.Title>
                                    <Card.Text className="small m-0">
                                        Вік: {user.age}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
