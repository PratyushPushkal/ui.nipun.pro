import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Navbar from "../components/Navbar";
import "./LegalPages.css";

const PRIVACY = [
    {
        number: "01",
        title: "Introduction",
        content: (
            <>
                <p>
                    At Nipun, we respect your privacy and are committed to
                    protecting your personal and business information.
                </p>

                <p>
                    This Privacy Policy explains how we collect, use, store, and
                    protect information when you use our website, applications,
                    products, and services.
                </p>
            </>
        ),
    },
    {
        number: "02",
        title: "Information We Collect",
        content: (
            <>
                <p>
                    Depending on how you interact with Nipun, we may collect the
                    following information:
                </p>

                <ul>
                    <li>Name and contact information</li>
                    <li>Email address and phone number</li>
                    <li>Business and organization details</li>
                    <li>Account and authentication information</li>
                    <li>Customer feedback and review information</li>
                    <li>Connected third-party account information</li>
                    <li>Usage and activity data</li>
                    <li>
                        Technical information such as browser type and device
                        information
                    </li>
                </ul>
            </>
        ),
    },
    {
        number: "03",
        title: "How We Use Your Information",
        content: (
            <>
                <p>
                    We may use collected information to:
                </p>

                <ul>
                    <li>Provide and improve our services.</li>
                    <li>Manage accounts and authentication.</li>
                    <li>Process customer feedback and reviews.</li>
                    <li>Generate AI-powered insights and content.</li>
                    <li>Operate authorized third-party integrations.</li>
                    <li>Provide customer support.</li>
                    <li>Improve platform performance and security.</li>
                    <li>Communicate important service updates.</li>
                </ul>
            </>
        ),
    },
    {
        number: "04",
        title: "Google and Third-Party Integrations",
        content: (
            <>
                <p>
                    Nipun may allow users to connect third-party services such
                    as Google and other business platforms.
                </p>

                <p>
                    When you authorize an integration, Nipun may access only the
                    information and permissions explicitly granted by you and
                    required to provide the requested functionality.
                </p>

                <p>
                    You may disconnect third-party integrations using available
                    controls within Nipun or through the respective third-party
                    platform.
                </p>
            </>
        ),
    },
    {
        number: "05",
        title: "Data Storage and Security",
        content: (
            <>
                <p>
                    We implement reasonable technical and organizational
                    safeguards designed to protect your information against
                    unauthorized access, alteration, disclosure, or destruction.
                </p>

                <p>
                    While we take security seriously, no system or method of
                    electronic transmission can be guaranteed to be completely
                    secure.
                </p>
            </>
        ),
    },
    {
        number: "06",
        title: "Data Sharing",
        content: (
            <>
                <p>
                    Nipun does not sell your personal information to third
                    parties.
                </p>

                <p>
                    Information may be shared only when reasonably necessary to:
                </p>

                <ul>
                    <li>Provide and operate our services.</li>
                    <li>Support authorized third-party integrations.</li>
                    <li>Comply with legal obligations.</li>
                    <li>
                        Protect the security and integrity of our systems.
                    </li>
                    <li>Respond to valid legal requests.</li>
                </ul>
            </>
        ),
    },
    {
        number: "07",
        title: "Data Retention",
        content: (
            <>
                <p>
                    We retain information for as long as reasonably necessary to
                    provide our services, meet legal obligations, resolve
                    disputes, and enforce applicable agreements.
                </p>

                <p>
                    Users may request deletion of applicable account information
                    and data, subject to operational and legal requirements.
                </p>
            </>
        ),
    },
    {
        number: "08",
        title: "Cookies and Analytics",
        content: (
            <>
                <p>
                    Nipun may use cookies and similar technologies to maintain
                    sessions, improve user experience, understand platform
                    usage, and enhance our services.
                </p>

                <p>
                    You may manage cookies through your browser settings.
                    Disabling certain cookies may affect some functionality of
                    our services.
                </p>
            </>
        ),
    },
    {
        number: "09",
        title: "Your Rights and Choices",
        content: (
            <>
                <p>
                    Depending on applicable laws, you may have rights to:
                </p>

                <ul>
                    <li>Access applicable personal information.</li>
                    <li>Request correction of inaccurate information.</li>
                    <li>Request deletion of applicable personal data.</li>
                    <li>
                        Withdraw consent for certain data processing activities.
                    </li>
                    <li>Disconnect authorized third-party integrations.</li>
                </ul>
            </>
        ),
    },
    {
        number: "10",
        title: "Children's Privacy",
        content: (
            <>
                <p>
                    Nipun services are intended for business and professional
                    use. We do not knowingly collect personal information from
                    children without appropriate authorization.
                </p>
            </>
        ),
    },
    {
        number: "11",
        title: "Changes to This Privacy Policy",
        content: (
            <>
                <p>
                    We may update this Privacy Policy periodically to reflect
                    changes in our services, technology, or applicable
                    requirements.
                </p>

                <p>
                    The most recent version will always be available on this
                    page with an updated revision date.
                </p>
            </>
        ),
    },
    {
        number: "12",
        title: "Contact Us",
        content: (
            <>
                <p>
                    If you have questions or concerns about this Privacy Policy
                    or how your information is handled, please contact us.
                </p>

                <div className="legal-contact-box">
                    <strong>Nipun</strong>
                    <span>Website: nipun.pro</span>
                    <span>Email: Contact@nipun.pro</span>
                </div>
            </>
        ),
    },
];

export default function Privacy() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="legal-page">
            <Navbar links={[]} alwaysSolid />

            {/* Background Shapes */}
            <div className="legal-bg-shapes" aria-hidden="true">
                <span className="legal-shape legal-shape-1" />
                <span className="legal-shape legal-shape-2" />
                <span className="legal-shape legal-shape-3" />
            </div>

            {/* Hero */}
            <Container fluid className="legal-hero-container">
                <Row className="justify-content-center">
                    <Col lg="9" xl="8">
                        <div className="legal-hero text-center">
                            <div className="legal-badge">
                                <i className="bi bi-shield-check" />
                                Your Privacy Matters
                            </div>

                            <h1 className="legal-headline">
                                Privacy Policy
                            </h1>

                            <p className="legal-subtext mx-auto">
                                Learn how Nipun collects, uses, stores, and
                                protects your personal and business information.
                            </p>

                            <div className="legal-updated">
                                <i className="bi bi-clock-history me-2" />
                                Last Updated: August 30, 2026
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Main Content */}
            <div className="legal-content-wrapper">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="10" xl="9">

                            {/* Privacy Highlight */}
                            <div className="legal-highlight-card legal-highlight-green">
                                <div className="legal-highlight-icon legal-icon-green">
                                    <i className="bi bi-shield-lock-fill" />
                                </div>

                                <div>
                                    <h5>Your Information, Protected</h5>

                                    <p>
                                        We are committed to transparency and
                                        responsible handling of your information
                                        while providing AI-powered solutions for
                                        your business.
                                    </p>
                                </div>
                            </div>

                            {/* Privacy Content */}
                            <div className="legal-document-card">
                                {PRIVACY.map((item) => (
                                    <div
                                        className="legal-content-block"
                                        key={item.number}
                                    >
                                        <div className="legal-section-title">
                                            <span className="legal-number">
                                                {item.number}
                                            </span>

                                            <h3>{item.title}</h3>
                                        </div>

                                        <div className="legal-section-content">
                                            {item.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation */}
                            {/* <div className="legal-bottom-navigation">
                                <div>
                                    <span className="legal-nav-label">
                                        Related Policy
                                    </span>

                                    <h4>Terms of Service</h4>

                                    <p>
                                        Review the terms governing your use of
                                        Nipun services.
                                    </p>
                                </div>

                                <Button
                                    className="legal-primary-button"
                                    href="/terms"
                                >
                                    Terms of Service
                                    <i className="bi bi-arrow-right ms-2" />
                                </Button>
                            </div> */}

                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Footer */}
            <div className="legal-footer">
                <Container>
                    <div className="text-center">
                        <div className="legal-footer-logo">NIPUN</div>

                        <p>
                            AI-powered intelligence solutions for modern
                            businesses.
                        </p>

                        <small>
                            © {new Date().getFullYear()} Nipun. All rights
                            reserved.
                        </small>
                    </div>
                </Container>
            </div>
        </div>
    );
}