import { useEffect, useState } from "react";
import { Container, Nav, NavItem, NavLink, Collapse, Button } from "reactstrap";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/nipun_2.png";
import "./Navbar.css";

const NAV_LINKS = [
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
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

    const handleAnchorClick = (event, href) => {
        if (!href || !href.startsWith("#")) return;
        event.preventDefault();
        handleNavClick();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const hasLinks = links.length > 0;
    const renderNavItem = (link) => {
        const isRoute = link.href && link.href.startsWith("/");

        return (
            <NavItem key={link.href}>
                <NavLink
                    tag={isRoute ? RouterLink : undefined}
                    to={isRoute ? link.href : undefined}
                    href={isRoute ? undefined : link.href}
                    onClick={(event) => (
                        link.href && link.href.startsWith("#")
                            ? handleAnchorClick(event, link.href)
                            : handleNavClick()
                    )}
                >
                    {link.label}
                </NavLink>
            </NavItem>
        );
    };

    return (
        <header className={`site-header ${(alwaysSolid || scrolled) ? "site-header--scrolled" : ""}`}>
            <Container>
                <nav className="site-header__inner" aria-label="Primary navigation">
                    <RouterLink to={brandHref} className="brand" onClick={handleNavClick}>
                        <img src={logo} alt="Nipun logo" className="brand__logo" width={40} height={40} loading="eager" />
                        <span className="brand__text">
                            <span className="brand__name">Nipun</span>
                            <span className="brand__tagline">AI Powered Business Solutions</span>
                        </span>
                    </RouterLink>

                    {hasLinks && (
                        <>
                            {/* Desktop nav (visible on larger screens) */}
                            <div className="site-header__desktop">
                                <Nav className="site-header__nav site-header__nav--desktop">
                                    {links.map(renderNavItem)}
                                </Nav>
                                <Button
                                    color="primary"
                                    className="btn-cta-nav"
                                    href={ctaHref}
                                    onClick={(e) => {
                                        if (ctaHref && ctaHref.startsWith("#")) {
                                            e.preventDefault();
                                            const id = ctaHref.slice(1);
                                            const el = document.getElementById(id);
                                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                            setIsOpen(false);
                                        } else {
                                            handleNavClick();
                                        }
                                    }}
                                >
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
                                    {links.map(renderNavItem)}
                                </Nav>
                                <Button
                                    color="primary"
                                    className="btn-cta-nav"
                                    href={ctaHref}
                                    onClick={(e) => {
                                        if (ctaHref && ctaHref.startsWith("#")) {
                                            e.preventDefault();
                                            const id = ctaHref.slice(1);
                                            const el = document.getElementById(id);
                                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                            setIsOpen(false);
                                        } else {
                                            handleNavClick();
                                        }
                                    }}
                                >
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
