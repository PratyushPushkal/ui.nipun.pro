import { Container, Row, Col } from "reactstrap";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Services.css";

const SERVICES = [
    { icon: "bi-cpu-fill", title: "AI Solutions", description: "Build practical AI-powered solutions around real business requirements." },
    { icon: "bi-gear-wide-connected", title: "Business Automation", description: "Automate repetitive workflows and reduce manual effort." },
    { icon: "bi-code-slash", title: "Custom Software", description: "Build scalable software tailored to specific business processes." },
    { icon: "bi-plug-fill", title: "AI Integration", description: "Integrate AI capabilities into existing applications and workflows." },
    { icon: "bi-cloud-fill", title: "Cloud Solutions", description: "Build secure, scalable cloud applications using modern cloud technologies." },
];

function ServiceCard({ service, index }) {
    const { ref, isVisible } = useScrollReveal();
    return (
        <Col md="6" lg="4">
            <div
                ref={ref}
                className={`service-card reveal ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
            >
                <div className="service-card__icon">
                    <i className={`bi ${service.icon}`} aria-hidden="true" />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
            </div>
        </Col>
    );
}

export default function Services() {
    return (
        <section id="services" className="services-section">
            <Container>
                <div className="section-heading text-center">
                    <span className="eyebrow">Services</span>
                    <h2 className="title">Technology & AI Services</h2>
                    <p className="subtitle mx-auto">
                        End-to-end technology services to design, build and scale your digital products.
                    </p>
                </div>

                <Row className="g-4">
                    {SERVICES.map((service, index) => (
                        <ServiceCard service={service} index={index} key={service.title} />
                    ))}
                </Row>
            </Container>
        </section>
    );
}
