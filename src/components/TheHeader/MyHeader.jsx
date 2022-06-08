import React from "react";
import { Navbar, Nav, Row, Col, Button, Container } from "react-bootstrap";
import "./myheader.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import weblogo from "../images/weblogo.png";
function MyHeader() {
  return (
    <div className="sticky">
      <div id="innerone">
        <Container>
          <Row>
            <Col xs={12} sm={12} fluid>
              <Navbar className="uppernav">
                <strong className="strongtext">
                  <ul id="unorderedlist" style={{ display: "flex" }}>
                    <li className="culi">
                      <FaPhoneAlt /> +92-310-6512776.{" "}
                    </li>
                    <li className="culi">
                      <FaMapMarkerAlt />
                      Los Angeles Gournadi, 1230 Bariasl.{" "}
                    </li>
                    <li className="culi">
                      <FaRegClock />
                      Mon to Sat 9:00am to 18:00pm.{" "}
                    </li>
                  </ul>
                </strong>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar id="navbardropdown" collapseOnSelect expand="lg">
        <Container>
          <Link id="navitem" to="/">
            <strong className="namestrong">
              <img id="logonavbar" src={weblogo} alt="weblogo" />
            </strong>{" "}
          </Link>
          <Navbar.Toggle
            style={{ border: "#1d7874 inset" }}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link id="navitem" to="/">
                <strong className="cuvd">Home</strong>{" "}
              </Link>
              <Link id="navitem" to="/our-news">
                <strong className="cuvd">News</strong>
              </Link>
              <Link id="navitem" to="/our-services/facelift">
                <strong className="cuvd">Services</strong>
              </Link>
              <Link id="navitem" to="/contact-us">
                <strong className="cuvd">Contact us</strong>
              </Link>
            </Nav>
            <Nav>
              <Link to="/signin">
                <Button id="navrightbutton" variant="outline-success" size="lg">
                  LogIn
                </Button>
              </Link>

              <Link to="/signup-user">
                <Button id="navrightbutton" variant="outline-danger" size="lg">
                  SignUp
                </Button>
              </Link>
              <Link to="/appointment">
                <Button id="navrightbutton" variant="outline-info" size="lg">
                  Appointment
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyHeader;
