import { Container, Row, Col } from "reactstrap";
import logo from "../assets/nipun.png";
import "./Footer.css";

const QUICK_LINKS = [
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
];

const SOCIALS = [
    { icon: "bi-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/nipun-pro" },
    // { icon: "bi-github", label: "GitHub", href: "https://github.com" },
    // { icon: "bi-twitter-x", label: "X", href: "https://x.com" },
];

export default function Footer() {
    return (
        <footer className="site-footer">
            <Container>
                <Row className="g-4">
                    <Col lg="4">
                        <a href="/" className="footer-brand">
                            <img src={logo} alt="Nipun logo" width={36} height={36} loading="lazy" />
                            <span>Nipun</span>
                        </a>
                        <p className="footer-desc">
                            AI-focused software company delivering intelligent business applications, cloud
                            solutions and enterprise-grade automation.
                        </p>
                    </Col>

                    <Col lg="4">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links" role="list">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg="4">
                        <h3 className="footer-heading">Follow Us</h3>
                        <div className="footer-socials">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`bi ${social.icon}`} />
                                </a>
                            ))}
                        </div>
                    </Col>
                </Row>

                <div className="footer-bottom">
                    <p>&copy; 2026 Nipun. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
