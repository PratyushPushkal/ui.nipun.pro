import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaTools, FaArrowLeft } from "react-icons/fa";

const UnderDevelopment = () => {
    return (
        <div
            className="d-flex align-items-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #0f172a 0%, #2563eb 100%)",
                color: "#fff",
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" className="text-center">

                        <div
                            className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                            style={{
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.12)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <FaTools size={55} />
                        </div>

                        <h1
                            className="fw-bold mb-3"
                            style={{ fontSize: "3rem" }}
                        >
                            Page Under Development
                        </h1>

                        <p
                            className="mb-4 mx-auto"
                            style={{
                                maxWidth: 650,
                                fontSize: "1.15rem",
                                color: "#dbeafe",
                            }}
                        >
                            We're working on something exciting! This page will
                            be available soon with powerful features and a
                            premium user experience.
                        </p>

                        <div
                            className="mt-5 pt-4"
                            style={{
                                borderTop: "1px solid rgba(255,255,255,0.2)",
                            }}
                        >
                            <h5 className="fw-semibold mb-2">nipun.pro</h5>
                            <p className="mb-0 text-light">
                                Building AI-powered solutions for modern businesses.
                            </p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UnderDevelopment;