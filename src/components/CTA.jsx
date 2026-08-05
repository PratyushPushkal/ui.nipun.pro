import { Container, Button } from "reactstrap";
import "./CTA.css";

export default function CTA() {
    return (
        <section className="cta-section">
            <Container className="text-center">
                <h2 className="cta-title">Ready to Transform Your Business?</h2>
                <p className="cta-paragraph">Let&apos;s build intelligent software together.</p>
                <div className="cta-actions">
                    <Button color="light" size="lg" className="btn-cta-light" href="#contact">
                        Contact Us
                    </Button>
                    <Button outline size="lg" className="btn-cta-outline" href="#contact">
                        Book a Demo
                    </Button>
                </div>
            </Container>
        </section>
    );
}
