import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import dashboardShot from "../assets/1.JPG";
import "./Products.css";

const FEATURES = [
    "Smart Feedback Collection",
    "AI-Powered Review Generation",
    "Customer Insights",
    "Reputation Analytics",
    "Google Review Integration",
];

export default function Products() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="products" className="products-section">
            <Container>
                <div className="section-heading text-center">
                    <span className="eyebrow">Products</span>
                    <h2 className="title">Our Products</h2>
                    <p className="subtitle mx-auto">Intelligent products designed to solve real business problems.</p>
                </div>

                <div ref={ref} className={`product-card reveal ${isVisible ? "is-visible" : ""}`}>
                    <Row className="g-0 align-items-stretch">
                        <Col lg="6" className="product-card__visual">
                            <div className="dashboard-screenshot-frame">
                                <div className="dashboard-screenshot-frame__bar" aria-hidden="true">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <img
                                    src={dashboardShot}
                                    alt="Reputation AI dashboard showing review stats and needs attention alerts"
                                    className="dashboard-screenshot"
                                />
                            </div>
                        </Col>

                        <Col lg="6" className="product-card__content">
                            <span className="badge-featured"><i className="bi bi-star-fill" /> Featured Product</span>
                            <h3>Nipun Reputation Management</h3>
                            <p>
                                Turn customer feedback into better reviews, stronger relationships, and a
                                better online reputation.
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
                                    Explore Reputation Management
                                </Button>
                                {/** Link to home with hash + prefill message so Contact picks it up */}
                                <Button
                                    tag={Link}
                                    to={{
                                        pathname: "/",
                                        hash: "#contact",
                                        search: `?message=${encodeURIComponent(
                                            "I would like a demo of your product. Please get in touch."
                                        )}`,
                                    }}
                                    outline
                                    color="primary"
                                    className="btn-outline-soft"
                                >
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
