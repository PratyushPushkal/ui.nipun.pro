import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Products.css";

const FEATURES = [
    "QR Code Feedback",
    "AI Review Generator",
    "Google Review Integration",
    "Customer Analytics",
    "Multi Tenant SaaS",
    "Dashboard & Reports",
];

export default function Products() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="products" className="products-section">
            <Container>
                <div className="section-heading text-center">
                    <span className="eyebrow">Products</span>
                    <h2 className="title">Our Products</h2>
                    <p className="subtitle mx-auto">Intelligent software built for modern businesses.</p>
                </div>

                <div ref={ref} className={`product-card reveal ${isVisible ? "is-visible" : ""}`}>
                    <Row className="g-0 align-items-stretch">
                        <Col lg="6" className="product-card__visual">
                            <div className="dashboard-mock" aria-hidden="true">
                                <div className="dashboard-mock__sidebar">
                                    <span className="dashboard-mock__brand">Nipun</span>
                                    <ul>
                                        <li className="active"><i className="bi bi-grid-1x2-fill" /> Overview</li>
                                        <li><i className="bi bi-star-fill" /> Reviews</li>
                                        <li><i className="bi bi-people-fill" /> Customers</li>
                                        <li><i className="bi bi-bar-chart-fill" /> Analytics</li>
                                        <li><i className="bi bi-gear-fill" /> Settings</li>
                                    </ul>
                                </div>
                                <div className="dashboard-mock__main">
                                    <div className="dashboard-mock__stats">
                                        <div className="stat"><span>Total Reviews</span><strong>1,248</strong></div>
                                        <div className="stat"><span>Avg. Rating</span><strong>4.6</strong></div>
                                        <div className="stat"><span>Happy Customers</span><strong>92%</strong></div>
                                        <div className="stat"><span>Response Rate</span><strong>95%</strong></div>
                                    </div>
                                    <div className="dashboard-mock__chart">
                                        <div className="chart-line" />
                                    </div>
                                    <div className="dashboard-mock__ring">
                                        <div className="ring" />
                                        <span>4.6</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6" className="product-card__content">
                            <span className="badge-featured"><i className="bi bi-star-fill" /> Featured Product</span>
                            <h3>Reputation Management</h3>
                            <p>
                                AI-powered customer feedback and online reputation platform that helps
                                businesses collect reviews, generate AI-assisted responses, and improve
                                customer satisfaction.
                            </p>
                            <ul className="feature-list">
                                {FEATURES.map((feature) => (
                                    <li key={feature}>
                                        <i className="bi bi-check-circle-fill" /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="product-card__actions">
                                <Button
                                    tag={Link}
                                    to="/reputation"
                                    color="primary"
                                    className="btn-primary-glow"
                                >
                                    Learn More
                                </Button>
                                <Button outline color="primary" className="btn-outline-soft">
                                    Request Demo
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
