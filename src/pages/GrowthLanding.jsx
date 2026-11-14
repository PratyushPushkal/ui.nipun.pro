import { useLayoutEffect } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScreenshotCarousel from "../components/ScreenshotCarousel";
import { GROWTH_MODULES, GROWTH_SCREENSHOTS } from "../growthModules";
import "./GrowthLanding.css";

const GROWTH_URL = "https://growth.nipun.pro";

function scrollToModule(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function GrowthLanding() {
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="growth-landing">
            <Navbar
                links={[
                    { label: "Home", href: "/" },
                    { label: "Platform", href: "#growth-modules" },
                ]}
                alwaysSolid
                ctaHref={GROWTH_URL}
                ctaLabel="Open Growth"
            />

            <main>
                <section className="growth-hero">
                    <Container>
                        <div className="growth-hero__grid">
                            <div className="growth-hero__copy">
                                <span className="growth-eyebrow">
                                    <span className="growth-eyebrow__dot" />
                                    Introducing Nipun Growth
                                </span>
                                <h1>One platform.<br /><span>Three ways to grow.</span></h1>
                                <p>
                                    Grow your visibility, marketing, and customer trust with one connected platform
                                    for Google Business Profile automation, digital marketing, and reputation feedback.
                                </p>
                                <div className="growth-hero__actions">
                                    <a className="growth-button growth-button--primary" href={GROWTH_URL}>
                                        Launch Growth <i className="bi bi-arrow-up-right" aria-hidden="true" />
                                    </a>
                                    <button
                                        className="growth-button growth-button--secondary"
                                        type="button"
                                        onClick={() => scrollToModule("growth-modules")}
                                    >
                                        Explore the modules
                                    </button>
                                </div>
                            </div>

                            <ScreenshotCarousel
                                screenshots={GROWTH_SCREENSHOTS}
                                label="Nipun Growth product screenshots"
                            />
                        </div>
                    </Container>
                </section>

                <section className="growth-modules-section" id="growth-modules">
                    <Container>
                        <div className="growth-section-heading">
                            <span className="growth-section-heading__eyebrow">Nipun Growth</span>
                            <h2>Three focused modules. One connected experience.</h2>
                            <p>Explore the tools that help your business get found, reach customers, and build trust.</p>
                        </div>

                        <div className="growth-module-list">
                            {GROWTH_MODULES.map((module) => (
                                <article className="growth-module" id={module.id} key={module.id}>
                                    <div className="growth-module__visual" aria-hidden="true">
                                        <span className="growth-module__visual-number">{module.number}</span>
                                        <i className={`bi ${module.icon}`} />
                                    </div>
                                    <div className="growth-module__body">
                                        <span className="growth-module__number">
                                            <i className={`bi ${module.icon}`} aria-hidden="true" />
                                            Module {module.number}
                                        </span>
                                        <h3>{module.title}</h3>
                                        <p>{module.description}</p>
                                        <ul role="list">
                                            {module.features.map((feature) => (
                                                <li key={feature}>
                                                    <i className="bi bi-check-circle-fill" aria-hidden="true" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Container>
                </section>

                <section className="growth-cta">
                    <Container>
                        <div className="growth-cta__inner">
                            <div>
                                <span>Make room for growth</span>
                                <h2>Bring your growth work together.</h2>
                            </div>
                            <a className="growth-button growth-button--light" href={GROWTH_URL}>
                                Get started with Nipun Growth <i className="bi bi-arrow-right" aria-hidden="true" />
                            </a>
                        </div>
                    </Container>
                </section>
            </main>

            <footer className="growth-footer">
                <Container>
                    <Link className="growth-footer__brand" to="/">Nipun <span>Growth</span></Link>
                    <span>Business growth, brought together.</span>
                </Container>
            </footer>
        </div>
    );
}
