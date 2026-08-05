import { Container, Row, Col } from "reactstrap";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Services.css";

const SERVICES = [
    { icon: "bi-cpu-fill", title: "AI Solutions", description: "Custom AI models and intelligent automation tailored to your business needs." },
    { icon: "bi-code-slash", title: "Custom Software Development", description: "Bespoke software engineered to solve your unique business challenges." },
    { icon: "bi-window-stack", title: "Web Application Development", description: "Fast, secure and scalable web applications built with modern frameworks." },
    { icon: "bi-diagram-3-fill", title: "Enterprise SaaS Development", description: "Multi-tenant SaaS platforms designed for growth and reliability." },
    { icon: "bi-cloud-fill", title: "Cloud Solutions (Microsoft Azure)", description: "Cloud-native architecture built and optimized on Microsoft Azure." },
    { icon: "bi-stars", title: "Azure OpenAI Integration", description: "Seamless integration of Azure OpenAI to power intelligent experiences." },
    { icon: "bi-plug-fill", title: "API Development", description: "Robust, secure and well-documented APIs for seamless integrations." },
    { icon: "bi-gear-wide-connected", title: "Business Process Automation", description: "Automate repetitive workflows to boost efficiency and reduce costs." },
    { icon: "bi-person-lines-fill", title: "CRM Development", description: "Custom CRM systems to manage relationships and drive sales growth." },
    { icon: "bi-database-fill-gear", title: "Database Design", description: "Scalable, secure database architecture optimized for performance." },
    { icon: "bi-bar-chart-line-fill", title: "Power BI Dashboards", description: "Insightful dashboards and reports for data-driven decision making." },
    { icon: "bi-lightbulb-fill", title: "Digital Transformation Consulting", description: "Strategic guidance to modernize operations and technology stacks." },
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
                    <h2 className="title">Our Services</h2>
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
