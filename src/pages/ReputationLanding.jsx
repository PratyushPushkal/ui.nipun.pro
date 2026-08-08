import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Navbar from "../components/Navbar";
import dashboardShot1 from "../assets/1.JPG";
import dashboardShot2 from "../assets/2.JPG";
import "./ReputationLanding.css";

const DASHBOARD_SCREENSHOTS = [
    { src: dashboardShot1, alt: "Reputation AI dashboard overview with review stats and needs attention alerts" },
    { src: dashboardShot2, alt: "Reputation AI review trend chart and AI insights panel" },
];

const FEATURES = [
    {
        icon: "bi-robot",
        title: "AI Review Generator",
        desc: "Generate personalized, on-brand responses to every review instantly.",
    },
    {
        icon: "bi-star",
        title: "Review Campaigns",
        desc: "Increase Google reviews automatically with smart follow-up journeys.",
    },
    {
        icon: "bi-bar-chart",
        title: "Analytics",
        desc: "Track ratings, response times, and customer sentiment in real time.",
    },
];

const STATS = [
    { icon: "bi-star", value: "4.9", label: "Average Rating" },
    { icon: "bi-chat-left-text", value: "2,847", label: "Reviews" },
    { icon: "bi-robot", value: "1,926", label: "AI Replies" },
    { icon: "bi-emoji-smile", value: "97%", label: "Positive Sentiment" },
    { icon: "bi-trophy", value: "95", label: "Reputation Score" },
];

const INTEGRATIONS = [
    { icon: "bi-google", name: "Google" },
    { icon: "bi-facebook", name: "Facebook" },
    { icon: "bi-instagram", name: "Instagram" },
    { icon: "bi-whatsapp", name: "WhatsApp" },
    { icon: "bi-envelope", name: "Email" },
    { icon: "bi-chat-dots", name: "SMS" },
];

const TESTIMONIALS = [
    {
        quote: "Our Google rating improved from 4.1 to 4.8 in 60 days.",
        author: "Restaurant Owner",
    },
    {
        quote: "Saved our team more than 10 hours every week.",
        author: "Clinic Manager",
    },
];

export default function ReputationLanding() {
    const [demoKey, setDemoKey] = useState(0);
    const [activeShot, setActiveShot] = useState(0);

    useEffect(() => {
        // ensure the page starts at top when this route is opened
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, left: 0 });
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveShot((index) => (index + 1) % DASHBOARD_SCREENSHOTS.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="rep-landing-page">
            <Navbar links={[]} alwaysSolid />

            <div className="rep-bg-shapes" aria-hidden="true">
                <span className="rep-shape rep-shape-1" />
                <span className="rep-shape rep-shape-2" />
                <span className="rep-shape rep-shape-3" />
            </div>

            <Container fluid className="rep-hero-container">
                <Row className="g-5 align-items-center rep-hero-row">
                    <Col xs="12" lg="6">
                        <div className="rep-hero-left">
                            <span className="rep-hero-badge">
                                <span className="rep-badge-dot" aria-hidden="true" />
                                AI Powered Reputation Platform
                            </span>

                            <h1 className="rep-headline">
                                AI Reputation Management that helps businesses collect more reviews, respond intelligently, and build customer trust.
                            </h1>

                            <p className="rep-subtext">
                                Nipun Reputation AI unifies review collection, AI-generated responses, and real-time sentiment analytics
                                into a single command center so every customer conversation strengthens your brand.
                            </p>

                            {/* <div className="rep-cta-row">
                                <a href="#rep-features" className="rep-cta-secondary">Learn More</a>
                            </div> */}

                            <ul className="rep-feature-badges" role="list">
                                <li><i className="bi bi-stars" aria-hidden="true" /> Increase Reviews</li>
                                <li><i className="bi bi-robot" aria-hidden="true" /> AI Responses</li>
                                <li><i className="bi bi-graph-up-arrow" aria-hidden="true" /> Reputation Analytics</li>
                                <li><i className="bi bi-shield-check" aria-hidden="true" /> Customer Trust</li>
                            </ul>
                        </div>
                    </Col>

                    <Col xs="12" lg="6">
                        <Button
                            color="primary"
                            size="lg"
                            className="rep-cta-primary rep-cta-primary--preview"
                            href="https://reputation.nipun.pro"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Let&apos;s get you signed in
                        </Button>

                        <div className="rep-dashboard-preview">
                            <span className="rep-dashboard-glow" aria-hidden="true" />

                            <div className="rep-card rep-header-card">
                                <span className="rep-live-dot" aria-hidden="true" />
                                <span>Live Reputation Dashboard</span>
                            </div>

                            <div className="rep-screenshot-frame">
                                {DASHBOARD_SCREENSHOTS.map((shot, index) => (
                                    <img
                                        key={shot.src}
                                        src={shot.src}
                                        alt={shot.alt}
                                        className={`rep-screenshot-img ${index === activeShot ? "is-active" : ""}`}
                                    />
                                ))}
                            </div>

                            <div className="rep-screenshot-dots" role="tablist" aria-label="Dashboard screenshots">
                                {DASHBOARD_SCREENSHOTS.map((shot, index) => (
                                    <button
                                        key={shot.src}
                                        type="button"
                                        role="tab"
                                        aria-selected={index === activeShot}
                                        aria-label={`Show screenshot ${index + 1}`}
                                        className={`rep-screenshot-dot ${index === activeShot ? "is-active" : ""}`}
                                        onClick={() => setActiveShot(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <section id="rep-features" className="rep-landing-section">
                <div className="rep-section-inner">
                    <h2 className="rep-section-heading">Everything you need to manage your reputation</h2>
                    <p className="rep-section-subtext">
                        Purpose-built AI tools that help you collect, respond, and grow customer trust.
                    </p>

                    <div className="rep-features-grid">
                        {FEATURES.map((feature) => (
                            <div className="rep-feature-card" key={feature.title}>
                                <div className="rep-feature-icon" aria-hidden="true"><i className={`bi ${feature.icon}`} /></div>
                                <h3 className="rep-feature-title">{feature.title}</h3>
                                <p className="rep-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="rep-landing-section rep-landing-section-alt" aria-label="Platform statistics">
                <div className="rep-section-inner">
                    <div className="rep-stats-grid">
                        {STATS.map((stat) => (
                            <div className="rep-stat-card" key={stat.label}>
                                <div className="rep-stat-icon" aria-hidden="true"><i className={`bi ${stat.icon}`} /></div>
                                <div className="rep-stat-value">{stat.value}</div>
                                <div className="rep-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="rep-landing-section" aria-label="AI response demo">
                <div className="rep-section-inner">
                    <h2 className="rep-section-heading">See AI replies in action</h2>
                    <p className="rep-section-subtext">
                        Every review gets a thoughtful, on-brand response generated in seconds.
                    </p>

                    <div className="rep-ai-demo-card">
                        <div className="rep-ai-bubble rep-ai-bubble-customer">
                            <div className="rep-ai-bubble-label">Customer Review</div>
                            <p className="rep-ai-bubble-text">
                                "The service was great but waiting time was longer than expected."
                            </p>
                        </div>

                        <div className="rep-ai-arrow" aria-hidden="true">↓</div>

                        <div className="rep-ai-bubble rep-ai-bubble-generated" key={demoKey}>
                            <div className="rep-ai-bubble-label">AI Response</div>
                            <p className="rep-ai-bubble-text">
                                "Thank you for your valuable feedback. We appreciate your patience and continuously work to improve our service."
                            </p>
                        </div>

                        <button
                            type="button"
                            className="btn rep-ai-generate-btn"
                            onClick={() => setDemoKey((key) => key + 1)}
                        >
                            Generate with AI
                        </button>
                    </div>
                </div>
            </section>

            <section className="rep-landing-section rep-landing-section-alt" aria-label="Supported integrations">
                <div className="rep-section-inner">
                    <h2 className="rep-section-heading">Connects with the platforms you already use</h2>
                    <div className="rep-integrations-grid">
                        {INTEGRATIONS.map((integration) => (
                            <div className="rep-integration-card" key={integration.name}>
                                <div className="rep-integration-icon" aria-hidden="true"><i className={`bi ${integration.icon}`} /></div>
                                <div className="rep-integration-name">{integration.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="rep-landing-section" aria-label="Customer testimonials">
                <div className="rep-section-inner">
                    <h2 className="rep-section-heading">Trusted by growing businesses</h2>
                    <div className="rep-testimonials-grid">
                        {TESTIMONIALS.map((testimonial) => (
                            <div className="rep-testimonial-card" key={testimonial.author}>
                                <div className="rep-testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                                <p className="rep-testimonial-quote">"{testimonial.quote}"</p>
                                <div className="rep-testimonial-author">{testimonial.author}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="rep-bottom-cta-section" aria-label="Get started">
                <div className="rep-section-inner text-center">
                    <h2 className="rep-bottom-cta-heading">Ready to build your online reputation?</h2>
                    <Button
                        color="light"
                        size="lg"
                        className="rep-bottom-cta-button"
                        href="https://reputation.nipun.pro"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Let&apos;s get you signed in
                    </Button>
                    <p className="rep-bottom-cta-subtext">
                        Secure Authentication powered by Microsoft Entra External ID
                    </p>
                </div>
            </section>
        </div>
    );
}
