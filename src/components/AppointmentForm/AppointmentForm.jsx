import React from "react";
import {
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import userHomeBg2 from "../../components/images/userHomeBg2.jpg";
import contactus1 from "../../components/images/contactus1.jpg";

import css from "./AppointmentForm.css";

function AppointmentForm() {
  return (
    <div style={{ backgroundImage: `url(${userHomeBg2})` }}>
      <div className="carousel">
        <strong className="userhometext">
          Get Yourself Healed with Aesthetic ★
        </strong>
        <hr />
        <strong style={{ color: "gold", fontSize: "xxx-large" }}>
          Appointment
        </strong>
      </div>
      <br />
      <br />
      <Container id="container">
        <Row id="iconsrow" style={{ padding: "0% 35% 0% 7%" }}>
          <Col id="colpadding" sm>
            <FaMapMarkerAlt id="coloricons" size={60} />
            <strong id="color">Address</strong>

            <p id="color">Los Angeles Gournadi, 1230 Bariasl</p>
          </Col>
          <Col id="colpadding" sm>
            <FaPhoneAlt id="coloricons" size={60} paddingInline="4%" />
            <strong id="color">Hotline</strong>

            <p id="color"> +92-310-6512776</p>
          </Col>
          <Col id="colpadding" sm>
            <FaEnvelope id="coloricons" size={60} />
            <strong id="color">Email</strong>

            <p id="color"> Support@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <Container id="picandformcontainer">
        <Row>
          <Col data-aos="zoom-in-up" id="colpadding" xs={12} sm={6} md={6}>
            <img id="img" style={{ maxWidth: "100%" }} src={contactus1} />
          </Col>
          <Col data-aos="zoom-in-up" id="colpadding" xs={12} sm={6} md={6}>
            <>
              <FloatingLabel className="mb-3" controlId="name" label="Name">
                <Form.Control type="text" placeholder="Name" />
              </FloatingLabel>
              <FloatingLabel
                controlId="email"
                label="Email Address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Date"
                className="mb-3"
              >
                <Form.Control type="date" placeholder="mm/dd/yyyy" />
              </FloatingLabel>

              <FloatingLabel
                className="mb-3"
                controlId="floatingSelect"
                label="Aesthetic"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Type Of Service</option>
                  <option value="1">Facial Procedures</option>
                  <option value="2">Body Procedures</option>
                  <option value="3">Buttocks</option>
                  <option value="4">Skin Care</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel>
                <div className="d-grid gap-2">
                  <Button id="sendmessage" size="lg">
                    Book Appointment
                  </Button>
                </div>
              </FloatingLabel>
            </>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppointmentForm;
