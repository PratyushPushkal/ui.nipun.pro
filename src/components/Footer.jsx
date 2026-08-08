import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../assets/nipun.png";
import "./Footer.css";

const PRODUCT_LINKS = [{ label: "Reputation Management", href: "/reputation" }];

const SERVICE_LINKS = [
    { label: "AI Solutions", href: "/#services" },
    { label: "Business Automation", href: "/#services" },
    { label: "Custom Software", href: "/#services" },
    { label: "AI Integration", href: "/#services" },
    { label: "Cloud Solutions", href: "/#services" },
];

const COMPANY_LINKS = [
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
];

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
];

const SOCIALS = [
    { icon: "bi-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/nipun-pro" },
];

function FooterLink({ link }) {
    const isInternalRoute = link.href.startsWith("/") && !link.href.includes("#");
    return isInternalRoute ? <Link to={link.href}>{link.label}</Link> : <a href={link.href}>{link.label}</a>;
}

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
                        <p className="footer-desc">AI-Powered Business Solutions</p>
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

                    <Col lg="2" md="6" xs="6">
                        <h3 className="footer-heading">Products</h3>
                        <ul className="footer-links" role="list">
                            {PRODUCT_LINKS.map((link) => (
                                <li key={link.label}><FooterLink link={link} /></li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg="2" md="6" xs="6">
                        <h3 className="footer-heading">Services</h3>
                        <ul className="footer-links" role="list">
                            {SERVICE_LINKS.map((link) => (
                                <li key={link.label}><FooterLink link={link} /></li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg="2" md="6" xs="6">
                        <h3 className="footer-heading">Company</h3>
                        <ul className="footer-links" role="list">
                            {COMPANY_LINKS.map((link) => (
                                <li key={link.label}><FooterLink link={link} /></li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg="2" md="6" xs="6">
                        <h3 className="footer-heading">Legal</h3>
                        <ul className="footer-links" role="list">
                            {LEGAL_LINKS.map((link) => (
                                <li key={link.label}><FooterLink link={link} /></li>
                            ))}
                        </ul>
                    </Col>
                </Row>

                <div className="footer-bottom">
                    <p>&copy; 2026 Nipun. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
