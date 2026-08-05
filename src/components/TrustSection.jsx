import { Container, Row, Col } from "reactstrap";
import useScrollReveal from "../hooks/useScrollReveal";
import "./TrustSection.css";

const TRUST_ITEMS = [
    {
        icon: "bi-cpu",
        title: "AI Powered",
        description: "Intelligent solutions for modern business challenges.",
    },
    {
        icon: "bi-cloud-check",
        title: "Cloud Native",
        description: "Built on Azure for scalability, security and reliability.",
    },
    {
        icon: "bi-shield-lock",
        title: "Secure",
        description: "Enterprise-grade security baked into every layer.",
    },
    {
        icon: "bi-graph-up-arrow",
        title: "Scalable",
        description: "Architected to grow seamlessly with your business.",
    },
];

function TrustCard({ item, index }) {
    const { ref, isVisible } = useScrollReveal();
    return (
        <Col md="6" lg="3">
            <div
                ref={ref}
                className={`trust-card reveal ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
            >
                <div className="trust-card__icon">
                    <i className={`bi ${item.icon}`} aria-hidden="true" />
                </div>
                <h3 className="trust-card__title">{item.title}</h3>
                <p className="trust-card__desc">{item.description}</p>
            </div>
        </Col>
    );
}

export default function TrustSection() {
    return (
        <section className="trust-section" aria-label="Why businesses trust Nipun">
            <Container>
                <Row className="g-4">
                    {TRUST_ITEMS.map((item, index) => (
                        <TrustCard item={item} index={index} key={item.title} />
                    ))}
                </Row>
            </Container>
        </section>
    );
}
