import { Container, Button } from "reactstrap";
import "./CTA.css";

export default function CTA() {
    return (
        <section className="cta-section">
            <Container className="text-center">
                <h2 className="cta-title">Have a Business Challenge? Let&apos;s Build the Solution.</h2>
                <p className="cta-paragraph">
                    Tell us what you&apos;re trying to improve, automate, or build. We&apos;ll help you explore
                    the right technology approach.
                </p>
                <div className="cta-actions">
                    <Button color="light" size="lg" className="btn-cta-light" href="#contact">
                        Start a Conversation
                    </Button>
                    <Button outline size="lg" className="btn-cta-outline" href="#products">
                        Explore Products
                    </Button>
                </div>
            </Container>
        </section>
    );
}
