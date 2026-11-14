import { useState } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { GROWTH_MODULES } from "../growthModules";
import ScreenshotCarousel from "./ScreenshotCarousel";
import "./Products.css";

export default function Products() {
    const [activeModule, setActiveModule] = useState(0);
    const module = GROWTH_MODULES[activeModule];

    return (
        <section id="products" className="products-section">
            <Container>
                <div className="section-heading text-center">
                    <span className="eyebrow">Nipun Growth</span>
                    <h2 className="title">One platform. Three growth modules.</h2>
                    <p className="subtitle mx-auto">Bring your business profile, marketing, and customer feedback together.</p>
                </div>

                <div className="growth-product-showcase">
                    <div className="growth-product-showcase__panel" role="tabpanel" aria-labelledby={`product-tab-${module.id}`}>
                        <div className="growth-product-showcase__visual">
                            <ScreenshotCarousel
                                key={module.id}
                                screenshots={module.screenshots}
                                label={`${module.title} screenshots`}
                            />
                        </div>
                        <div className="growth-product-showcase__content">
                            <span className="growth-product-showcase__eyebrow">
                                <i className={`bi ${module.icon}`} aria-hidden="true" />
                                Module 0{activeModule + 1}
                            </span>
                            <h3>{module.title}</h3>
                            <p>{module.description}</p>
                            <ul>
                                {module.features.map((feature) => (
                                    <li key={feature}><i className="bi bi-check-circle-fill" aria-hidden="true" />{feature}</li>
                                ))}
                            </ul>
                            <Link className="growth-product-showcase__link" to="/growth">
                                Explore Nipun Growth <i className="bi bi-arrow-right" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>

                    <div className="growth-module-tabs" role="tablist" aria-label="Nipun Growth modules">
                        {GROWTH_MODULES.map((item, index) => (
                            <button
                                id={`product-tab-${item.id}`}
                                key={item.id}
                                type="button"
                                role="tab"
                                aria-selected={index === activeModule}
                                onClick={() => setActiveModule(index)}
                            >
                                <span className="growth-module-tabs__number">0{index + 1}</span>
                                <i className={`bi ${item.icon}`} aria-hidden="true" />
                                <span>{item.tabLabel}</span>
                                <i className="bi bi-arrow-up-right growth-module-tabs__arrow" aria-hidden="true" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="growth-products-cta">
                    <Button tag={Link} to="/growth" color="primary" className="btn-primary-glow">
                        Explore Nipun Growth
                    </Button>
                    <Button
                        tag={Link}
                        to={{
                            pathname: "/",
                            hash: "#contact",
                            search: `?message=${encodeURIComponent("I would like a demo of Nipun Growth. Please get in touch.")}`,
                        }}
                        outline
                        color="primary"
                        className="btn-outline-soft"
                    >
                        Request a demo
                    </Button>
                </div>
            </Container>
        </section>
    );
}
