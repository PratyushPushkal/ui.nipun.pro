import { Container, Row, Col } from "reactstrap";
import useScrollReveal from "../hooks/useScrollReveal";
import "./HowItWorks.css";

const STEPS = [
    { number: "01", title: "Understand", description: "We understand your business challenge." },
    { number: "02", title: "Build", description: "We design and develop the right technology solution." },
    { number: "03", title: "Grow", description: "You use technology and AI to improve efficiency and customer experience." },
];

function StepCard({ step, index }) {
    const { ref, isVisible } = useScrollReveal();
    return (
        <Col md="4">
            <div
                ref={ref}
                className={`how-step reveal ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
            >
                <span className="how-step__number">{step.number}</span>
                <h3 className="how-step__title">{step.title}</h3>
                <p className="how-step__desc">{step.description}</p>
            </div>
        </Col>
    );
}

export default function HowItWorks() {
    return (
        <section className="how-it-works-section" aria-label="How Nipun works">
            <Container>
                <div className="section-heading text-center">
                    <span className="eyebrow">How It Works</span>
                    <h2 className="title">A Simple, Focused Process</h2>
                </div>
                <Row className="g-4 how-it-works-row">
                    {STEPS.map((step, index) => (
                        <StepCard step={step} index={index} key={step.number} />
                    ))}
                </Row>
            </Container>
        </section>
    );
}
