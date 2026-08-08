import { Container, Row, Col } from "reactstrap";
import useScrollReveal from "../hooks/useScrollReveal";
import "./WhyChoose.css";

const REASONS = [
    { icon: "bi-stars", title: "AI First", description: "We use AI where it creates measurable business value." },
    { icon: "bi-briefcase", title: "Business Focused", description: "Solutions are designed around real-world business problems." },
    { icon: "bi-graph-up-arrow", title: "Scalable Technology", description: "Modern cloud architecture designed to grow with your business." },
    { icon: "bi-emoji-smile", title: "Simple Experience", description: "Powerful technology presented through simple and intuitive experiences." },
];

function ReasonCard({ reason, index }) {
    const { ref, isVisible } = useScrollReveal();
    return (
        <Col xs="6" md="3">
            <div
                ref={ref}
                className={`stat-item reveal ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
            >
                <div className="stat-item__icon">
                    <i className={`bi ${reason.icon}`} aria-hidden="true" />
                </div>
                <div className="stat-item__title">{reason.title}</div>
                <p className="stat-item__desc">{reason.description}</p>
            </div>
        </Col>
    );
}

export default function WhyChoose() {
    return (
        <section className="why-choose-section" aria-label="Why businesses choose Nipun">
            <Container>
                <div className="section-heading text-center">
                    <span className="eyebrow">Why Nipun</span>
                    <h2 className="title">Why Businesses Choose Nipun</h2>
                </div>
                <Row className="g-4">
                    {REASONS.map((reason, index) => (
                        <ReasonCard reason={reason} index={index} key={reason.title} />
                    ))}
                </Row>
            </Container>
        </section>
    );
}
