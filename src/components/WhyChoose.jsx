import { Container, Row, Col } from "reactstrap";
import useCountUp from "../hooks/useCountUp";
import "./WhyChoose.css";

const STATS = [
    { end: 20, suffix: "+", label: "Projects", numeric: true },
    { end: 100, suffix: "%", label: "Client Satisfaction", numeric: true },
    { display: "Cloud First", label: "Architecture", numeric: false },
    { display: "AI Powered", label: "Solutions", numeric: false },
];

function StatItem({ stat }) {
    const { ref, value } = useCountUp(stat.numeric ? stat.end : 0);
    return (
        <Col xs="6" md="3">
            <div ref={ref} className="stat-item">
                <div className="stat-item__value">
                    {stat.numeric ? `${value}${stat.suffix}` : stat.display}
                </div>
                <div className="stat-item__label">{stat.label}</div>
            </div>
        </Col>
    );
}

export default function WhyChoose() {
    return (
        <section className="why-choose-section" aria-label="Why choose Nipun">
            <Container>
                <div className="section-heading text-center">
                    <span className="eyebrow">Why Nipun</span>
                    <h2 className="title">Why Choose Nipun</h2>
                </div>
                <Row className="g-4">
                    {STATS.map((stat) => (
                        <StatItem stat={stat} key={stat.label} />
                    ))}
                </Row>
            </Container>
        </section>
    );
}
