import { Container } from "reactstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="d-flex min-vh-100 align-items-center bg-light">
            <Container className="text-center">
                <p className="mb-2 fw-bold text-primary">404</p>
                <h1 className="mb-3">Page not found</h1>
                <p className="mb-4 text-secondary">
                    This address doesn't match a page on Nipun. You can return to the homepage.
                </p>
                <Link className="btn btn-primary" to="/">
                    Return home
                </Link>
            </Container>
        </main>
    );
}
