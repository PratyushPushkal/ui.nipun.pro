import { Container, Row, Col, Button } from "reactstrap";
import logo from "../assets/nipun.png";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Hero.css";

const BADGES = [
    { icon: "bi-cpu", label: "AI Powered" },
    { icon: "bi-cloud-check", label: "Cloud Native" },
    { icon: "bi-shield-check", label: "Enterprise Ready" },
];

const FLOATING_ICONS = [
    { icon: "bi-cloud-fill", className: "float-icon--cloud" },
    { icon: "bi-graph-up-arrow", className: "float-icon--analytics" },
    { icon: "bi-gear-fill", className: "float-icon--automation" },
    { icon: "bi-shield-lock-fill", className: "float-icon--security" },
    { icon: "bi-stars", className: "float-icon--ai" },
];

export default function Hero() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="top" className="hero">
            <div className="hero__glow hero__glow--one" aria-hidden="true" />
            <div className="hero__glow hero__glow--two" aria-hidden="true" />
            <div className="hero__lines" aria-hidden="true" />

            <Container>
                <Row className="align-items-center g-5">
                    <Col lg="6" ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
                        <h1 className="hero__title">
                            AI Solutions That <span className="text-gradient">Drive Business Growth</span>
                        </h1>
                        <p className="hero__paragraph">
                            We build AI-powered software, cloud applications, business automation, and
                            enterprise solutions that help organizations improve productivity and customer
                            experience.
                        </p>
                        <div className="hero__actions">
                            <Button color="primary" size="lg" className="btn-primary-glow" href="#products">
                                Explore Products
                            </Button>
                            <Button outline color="primary" size="lg" className="btn-outline-soft" href="#services">
                                Our Services
                            </Button>
                        </div>
                        <ul className="hero__badges" role="list">
                            {BADGES.map((badge) => (
                                <li key={badge.label} className="hero__badge">
                                    <i className={`bi ${badge.icon}`} aria-hidden="true" />
                                    {badge.label}
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg="6" className="hero__illustration-col">
                        <div className="hero__illustration" role="img" aria-label="Nipun AI platform illustration">
                            <div className="hero__platform">
                                <img src={logo} alt="" className="hero__logo" width={110} height={110} loading="eager" />
                            </div>
                            {FLOATING_ICONS.map((item) => (
                                <span key={item.icon} className={`float-icon ${item.className}`} aria-hidden="true">
                                    <i className={`bi ${item.icon}`} />
                                </span>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
