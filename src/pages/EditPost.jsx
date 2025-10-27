import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import routerPaths from "../router/routerPaths";

export default function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ title: "", body: "", userId: "" });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [isRequestSuccess, setIsRequestSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData({
                    title: data.title || "",
                    body: data.body || "",
                    userId: data.userId || "",
                });
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading post:", err);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (saving) return;

        setSaving(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    id: Number(id),
                    title: formData.title,
                    body: formData.body,
                    userId: Number(formData.userId) || 1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            await res.json();

            setIsRequestSuccess(true);
            setTimeout(() => navigate(routerPaths.posts), 2000);
        } catch (error) {
            console.error("Error updating post:", error);
            setIsRequestSuccess(false);
        } finally {
            setSaving(false);
        }
    };

    if (loading)
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status" />
                <p>Loading post...</p>
            </div>
        );

    return (
        <div>
            <PageHeader title={`Edit Post #${id}`} />

            {isRequestSuccess && (
                <Alert variant="success" className="text-center">
                    Post updated successfully!
                </Alert>
            )}

            <Form className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        disabled={saving}
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        disabled={saving}
                        as="textarea"
                        placeholder="Enter body"
                        rows={4}
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button
                    variant={saving ? "secondary" : "primary"}
                    type="submit"
                    className="d-flex align-items-center gap-2"
                    disabled={saving}
                >
                    <span>Save Changes</span>
                    {saving && (
                        <Spinner animation="border" role="status" size="sm">
                            <span className="visually-hidden">Saving...</span>
                        </Spinner>
                    )}
                </Button>
            </Form>
        </div>
    );
}
