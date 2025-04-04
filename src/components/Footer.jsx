import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importa le icone Bootstrap

const Footer = () => {
  return (
    <footer className="bg-netflix-2 text-netflix-1 py-4">
      <Container>
        {/* Social media icons */}
        <Row className="mb-3">
          <Col xs={12}>
            <a href="#" className="fs-3 text-netflix-4 me-3">
              <Facebook />
            </a>
            <a href="#" className="fs-3 text-netflix-4 me-3">
              <Instagram />
            </a>
            <a href="#" className="fs-3 text-netflix-4 me-3">
              <Twitter />
            </a>
            <a href="#" className="fs-3 text-netflix-4">
              <Youtube />
            </a>
          </Col>
        </Row>

        {/* Footer links */}
        <Row>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Audio and Subtitles
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Audio Description
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Help Center
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Gift Cards
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Media Center
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Investor Relations
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Jobs
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Terms of Use
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Privacy
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Legal Notices
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Cookie Preferences
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a href="#" className="text-netflix-4">
              Corporate Information
            </a>
          </Col>
        </Row>

        {/* Service Code Button */}
        <Row className="mt-3">
          <Col xs={12}>
            <Button variant="outline-netflix-4" size="sm">
              Service Code
            </Button>
          </Col>
        </Row>

        {/* Copyright Text */}
        <Row className="mt-3">
          <Col xs={12} className="text-netflix-4">
            <small>&copy; 1997-2019 Netflix, Inc.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
