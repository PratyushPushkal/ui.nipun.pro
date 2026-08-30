import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Navbar from "../components/Navbar";
import "./LegalPages.css";

const TERMS = [
    {
        number: "01",
        title: "Acceptance of Terms",
        content: (
            <>
                <p>
                    By accessing or using Nipun's website, applications,
                    products, or services, you agree to be bound by these Terms
                    of Service and all applicable laws and regulations.
                </p>
                <p>
                    If you do not agree with any part of these terms, please do
                    not access or use our services.
                </p>
            </>
        ),
    },
    {
        number: "02",
        title: "About Nipun",
        content: (
            <>
                <p>
                    Nipun provides AI-powered intelligence solutions designed to
                    help businesses improve customer engagement, manage their
                    online reputation, collect feedback, generate content, and
                    gain meaningful business insights.
                </p>

                <p>Our platform may include services such as:</p>

                <ul>
                    <li>Customer Feedback Management</li>
                    <li>Reputation and Review Management</li>
                    <li>Google Business Profile Integration</li>
                    <li>AI-powered Content Generation</li>
                    <li>Social Media Management</li>
                    <li>Marketing Automation</li>
                    <li>Business Analytics and Insights</li>
                    <li>Third-party Business Integrations</li>
                </ul>
            </>
        ),
    },
    {
        number: "03",
        title: "User Accounts",
        content: (
            <>
                <p>
                    Certain features of Nipun may require you to create and
                    maintain an account. You are responsible for ensuring that
                    the information associated with your account is accurate and
                    up to date.
                </p>

                <p>You agree to:</p>

                <ul>
                    <li>Provide accurate and complete account information.</li>
                    <li>Keep your login credentials secure and confidential.</li>
                    <li>Notify us of unauthorized access to your account.</li>
                    <li>
                        Accept responsibility for activities performed through
                        your account.
                    </li>
                </ul>
            </>
        ),
    },
    {
        number: "04",
        title: "Acceptable Use",
        content: (
            <>
                <p>
                    You agree to use Nipun only for lawful business purposes and
                    in accordance with applicable laws and regulations.
                </p>

                <p>You must not:</p>

                <ul>
                    <li>Use the platform for fraudulent or illegal activities.</li>
                    <li>
                        Attempt to gain unauthorized access to our systems or
                        infrastructure.
                    </li>
                    <li>
                        Interfere with the security, availability, or performance
                        of our services.
                    </li>
                    <li>
                        Upload malicious software, viruses, or harmful code.
                    </li>
                    <li>Abuse APIs, automated systems, or platform resources.</li>
                    <li>
                        Use AI-generated content for deceptive, unlawful, or
                        harmful purposes.
                    </li>
                </ul>
            </>
        ),
    },
    {
        number: "05",
        title: "Third-Party Integrations",
        content: (
            <>
                <p>
                    Nipun may integrate with third-party platforms including
                    Google, social media platforms, messaging services, and
                    other business applications.
                </p>

                <p>
                    When you connect a third-party account, you authorize Nipun
                    to access information and permissions explicitly granted by
                    you for providing the requested functionality.
                </p>

                <p>
                    Your use of third-party services is also governed by their
                    respective terms, policies, and agreements.
                </p>
            </>
        ),
    },
    {
        number: "06",
        title: "AI Generated Content",
        content: (
            <>
                <p>
                    Nipun may use artificial intelligence technologies to
                    generate content, recommendations, insights, responses,
                    reviews, and marketing materials.
                </p>

                <p>
                    AI-generated content should be reviewed before publication
                    or use in important business decisions.
                </p>

                <p>
                    While we continuously improve our AI capabilities, Nipun does
                    not guarantee that all generated content will always be
                    accurate, complete, or appropriate for every situation.
                </p>
            </>
        ),
    },
    {
        number: "07",
        title: "Intellectual Property",
        content: (
            <>
                <p>
                    The Nipun platform, including its software, technology,
                    branding, designs, logos, content, and other intellectual
                    property, remains the property of Nipun or its respective
                    licensors.
                </p>

                <p>
                    You may not copy, modify, distribute, reverse engineer, or
                    reproduce any part of the platform without prior written
                    permission.
                </p>
            </>
        ),
    },
    {
        number: "08",
        title: "Service Availability",
        content: (
            <>
                <p>
                    We aim to provide reliable and continuously available
                    services. However, we do not guarantee uninterrupted or
                    error-free operation at all times.
                </p>

                <p>
                    Services may occasionally be unavailable due to maintenance,
                    upgrades, technical issues, security measures, or
                    circumstances beyond our reasonable control.
                </p>
            </>
        ),
    },
    {
        number: "09",
        title: "Limitation of Liability",
        content: (
            <>
                <p>
                    To the maximum extent permitted by applicable law, Nipun
                    shall not be liable for indirect, incidental, special, or
                    consequential damages arising from the use or inability to
                    use our services.
                </p>

                <p>
                    Users remain responsible for reviewing information,
                    recommendations, and AI-generated content before making
                    business, financial, operational, or other important
                    decisions.
                </p>
            </>
        ),
    },
    {
        number: "10",
        title: "Changes to Terms",
        content: (
            <>
                <p>
                    We may update or modify these Terms of Service from time to
                    time to reflect changes in our services, technology, or
                    applicable legal requirements.
                </p>

                <p>
                    Continued use of Nipun after updated terms are published
                    constitutes acceptance of those changes.
                </p>
            </>
        ),
    },
    {
        number: "11",
        title: "Contact Us",
        content: (
            <>
                <p>
                    If you have questions regarding these Terms of Service,
                    please contact us.
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

export default function Terms() {
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
                                <i className="bi bi-file-earmark-text-fill" />
                                Legal Information
                            </div>

                            <h1 className="legal-headline">
                                Terms of Service
                            </h1>

                            <p className="legal-subtext mx-auto">
                                Please read these terms carefully before using
                                Nipun and our AI-powered business intelligence
                                solutions.
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

                            {/* Agreement Highlight */}
                            <div className="legal-highlight-card">
                                <div className="legal-highlight-icon">
                                    <i className="bi bi-check-circle-fill" />
                                </div>

                                <div>
                                    <h5>Agreement with Nipun</h5>
                                    <p>
                                        By accessing or using Nipun's website,
                                        applications, products, or services,
                                        you acknowledge that you have read,
                                        understood, and agree to these Terms of
                                        Service.
                                    </p>
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="legal-document-card">
                                {TERMS.map((item) => (
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

                                    <h4>Privacy Policy</h4>

                                    <p>
                                        Learn how we collect, use, and protect
                                        your information.
                                    </p>
                                </div>

                                <Button
                                    className="legal-primary-button"
                                    href="/privacy"
                                >
                                    Privacy Policy
                                    <i className="bi bi-arrow-right ms-2" />
                                </Button>
                            </div> */}

                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Bottom CTA */}
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