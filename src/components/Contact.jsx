import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback, Spinner } from "reactstrap";
import { submitContact } from "../api/contactApi";
import "./Contact.css";

const INITIAL_STATE = { name: "", company: "", email: "", phone: "", message: "" };

function validate(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = "Name is required.";
    if (!values.company.trim()) errors.company = "Company is required.";
    if (!values.email.trim()) {
        errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Enter a valid email address.";
    }
    if (!values.phone.trim()) {
        errors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(values.phone)) {
        errors.phone = "Enter a valid phone number.";
    }
    if (!values.message.trim()) errors.message = "Message is required.";
    return errors;
}

export default function Contact() {
    const [values, setValues] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!submitted) return;
        const timer = setTimeout(() => setSubmitted(false), 5000);
        return () => clearTimeout(timer);
    }, [submitted]);

    // If navigation includes a message query param or hash, prefill and scroll.
    useEffect(() => {
        try {
            const params = new URLSearchParams(location.search);
            const message = params.get("message");
            if (message) {
                setValues((prev) => ({ ...prev, message }));
            }
        } catch (e) {
            // ignore malformed params
        }

        if (location.hash === "#contact") {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setSubmitError("");
        setSubmitted(false);
        setIsSubmitting(true);
        try {
            const response = await submitContact({ ...values, status: "New" });
            // Treat any successful HTTP response as success. Some backends return
            // `{ success: true }`, others return the created resource or message.
            const isSuccess = response && (response.success === undefined || response.success === true);
            if (isSuccess) {
                setSubmitted(true);
                setValues(INITIAL_STATE);
            } else {
                setSubmitError(response?.message || "Failed to send your message. Please try again.");
            }
        } catch (error) {
            setSubmitError(error.message || "Failed to send your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <Container>
                <Row className="g-5">
                    <Col lg="5">
                        <h2 className="title mb-3">About Nipun</h2>
                        <p className="contact-about">
                            Nipun is an AI-focused software company delivering intelligent business
                            applications, cloud solutions, automation platforms, and enterprise software
                            built on Microsoft Azure.
                        </p>
                        <ul className="contact-details" role="list">
                            <li>
                                <i className="bi bi-envelope-fill" aria-hidden="true" />
                                <div>
                                    <span>Email</span>
                                    <a href="mailto:contact@nipun.pro">contact@nipun.pro</a>
                                </div>
                            </li>
                            <li>
                                <i className="bi bi-globe2" aria-hidden="true" />
                                <div>
                                    <span>Website</span>
                                    <a href="https://nipun.pro" target="_blank" rel="noopener noreferrer">
                                        https://nipun.pro
                                    </a>
                                </div>
                            </li>
                            <li>
                                <i className="bi bi-telephone-fill" aria-hidden="true" />
                                <div>
                                    <span>Phone</span>
                                    <a href="tel:+919741819765">+91 97418 19765</a>
                                </div>
                            </li>
                            <li>
                                <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                                <div>
                                    <span>Location</span>
                                    <p>#330, White County, Jigani, Bangalore, India</p>
                                </div>
                            </li>
                        </ul>
                    </Col>

                    <Col lg="7">
                        <Form className="contact-form" noValidate onSubmit={handleSubmit}>
                            {submitted && (
                                <div className="alert alert-success" role="status">
                                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}
                            {submitError && (
                                <div className="alert alert-danger" role="alert">
                                    {submitError}
                                </div>
                            )}
                            <Row className="g-3">
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            invalid={Boolean(errors.name)}
                                            autoComplete="name"
                                        />
                                        <FormFeedback>{errors.name}</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="company">Company</Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            value={values.company}
                                            onChange={handleChange}
                                            invalid={Boolean(errors.company)}
                                            autoComplete="organization"
                                        />
                                        <FormFeedback>{errors.company}</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            invalid={Boolean(errors.email)}
                                            autoComplete="email"
                                        />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label for="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            invalid={Boolean(errors.phone)}
                                            autoComplete="tel"
                                        />
                                        <FormFeedback>{errors.phone}</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label for="message">Message</Label>
                                        <Input
                                            id="message"
                                            type="textarea"
                                            name="message"
                                            rows="5"
                                            value={values.message}
                                            onChange={handleChange}
                                            invalid={Boolean(errors.message)}
                                        />
                                        <FormFeedback>{errors.message}</FormFeedback>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button
                                color="primary"
                                size="lg"
                                className="btn-primary-glow mt-2"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Spinner size="sm" className="me-2" /> Sending...
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
