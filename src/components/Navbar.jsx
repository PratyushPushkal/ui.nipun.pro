import { useEffect, useState } from "react";
import { Container, Nav, NavItem, NavLink, Collapse, Button } from "reactstrap";
import logo from "../assets/nipun.png";
import "./Navbar.css";

const NAV_LINKS = [
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar({ links = NAV_LINKS, brandHref = "/", alwaysSolid = false, ctaHref = "#contact", ctaLabel = "Get Started" }) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = () => setIsOpen(false);
    const hasLinks = links.length > 0;

    return (
        <header className={`site-header ${(alwaysSolid || scrolled) ? "site-header--scrolled" : ""}`}>
            <Container>
                <nav className="site-header__inner" aria-label="Primary navigation">
                    <a href={brandHref} className="brand" onClick={handleNavClick}>
                        <img src={logo} alt="Nipun logo" className="brand__logo" width={40} height={40} loading="eager" />
                        <span className="brand__text">
                            <span className="brand__name">Nipun</span>
                            <span className="brand__tagline">AI Based Solutions</span>
                        </span>
                    </a>

                    {hasLinks && (
                        <>
                            {/* Desktop nav (visible on larger screens) */}
                            <div className="site-header__desktop">
                                <Nav className="site-header__nav site-header__nav--desktop">
                                    {links.map((link) => (
                                        <NavItem key={link.href}>
                                            <NavLink href={link.href} onClick={handleNavClick}>
                                                {link.label}
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>
                                <Button color="primary" className="btn-cta-nav" href={ctaHref} onClick={handleNavClick}>
                                    {ctaLabel}
                                </Button>
                            </div>

                            <button
                                className="navbar-toggler"
                                type="button"
                                aria-label="Toggle navigation"
                                aria-expanded={isOpen}
                                onClick={() => setIsOpen((prev) => !prev)}
                            >
                                <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`} />
                            </button>

                            <Collapse isOpen={isOpen} navbar className="site-header__collapse">
                                <Nav className="site-header__nav mx-auto" navbar>
                                    {links.map((link) => (
                                        <NavItem key={link.href}>
                                            <NavLink href={link.href} onClick={handleNavClick}>
                                                {link.label}
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>
                                <Button color="primary" className="btn-cta-nav" href={ctaHref} onClick={handleNavClick}>
                                    {ctaLabel}
                                </Button>
                            </Collapse>
                        </>
                    )}
                </nav>
            </Container>
        </header>
    );
}
