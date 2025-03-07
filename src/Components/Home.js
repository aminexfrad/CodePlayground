import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import homeImg from "../Assets/hero-img.png";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };


  const btnStyle = {
    backgroundColor: "#007bff",  // Changer la couleur en bleu
    border: 0,
    padding: "10px 30px",
    fontSize: "16px",
    borderRadius: "30px",
    textTransform: "uppercase",
  };

  return (
    <div
      style={{
        backgroundColor: "#1d2a3a",  // Fond bleu sombre
        minHeight: "100vh",
        height: "auto",
        color: "#f1f1f1",
      }}
    >
      <Container style={wrapper}>
        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "120px",
            paddingBottom: "70px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="main img"
              style={{
                justifyContent: "center",
                padding: "20px",
                borderRadius: "15px",
              }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#5bb7ff" }}>Code Websites Anywhere, Anytime</h2> {/* Titre bleu clair */}
            <h5
              style={{
                textAlign: "justify",
                color: "#aad4ff",  // Texte bleu clair
                paddingTop: "15px",
                lineHeight: "1.8",
              }}
            >
              Unlock the power of instant code editing with our online HTML, CSS,
              and JavaScript editor. Edit your code and see the changes live
              without delay.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Try Web Editor
            </Button>

            <h2 style={{ color: "#5bb7ff", paddingTop: "70px" }}>
              Create Your README in Seconds
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "#aad4ff",  // Texte bleu clair
                paddingTop: "15px",
                lineHeight: "1.8",
              }}
            >
              Simplify your documentation process with our online markdown editor.
              Effortlessly build and customize your README with ease.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/markdown">
              Start Markdown Editor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
