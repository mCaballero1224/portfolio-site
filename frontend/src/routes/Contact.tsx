import { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  message: string;
  subscribe: boolean;
}

export default function Contact() {
  // State management
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    subscribe: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, checked, value } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Prevent default behavior
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      setSubmitted(false);
      return;
    }

    setError(null);

    // To be implemented: handle form submission (send data to a server
    setSubmitted(true);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
      subscribe: false,
    });
  };

  return (
    <>
      {submitted && <Alert variant="success">Thank you for your message!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <p className="text-center">Under construction! See what else I'm working on at the <Link to={`/todo`}>Todo</Link> page.</p>
      <Form onSubmit={handleSubmit} id="contact-form">
        <Form.Text>All fields required.</Form.Text>
        <Form.Group controlId="formName" className="mb-3 mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="john.doe@mail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Hit me up! Let me know what you think of the site, feedback on my projects, or whatever else comes to mind."
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formSubscribe" className="mb-3">
          <Form.Check
            type="checkbox"
            label="I want to receive regular emails about site updates."
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
