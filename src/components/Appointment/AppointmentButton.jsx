import React from "react";
import { Col, FloatingLabel, Form, Button } from "react-bootstrap";
import "./appointmentbutton.css";
import appointment from "../images/appointment.jpg";

function AppointmentButton() {
  return (
    
    <div id="maindiv" style={{ backgroundImage: `url(${appointment})` }}>
      <Col className="cardsdiv">
        <strong style={{color:"white"}}>REQUEST FOR YOUR</strong>
        <br />
        <strong style={{color:"white"}}>Consultation</strong>
        <FloatingLabel className="mb-3" controlId="name" label="Name">
          <Form.Control type="text" placeholder="Name" />
        </FloatingLabel>
        <FloatingLabel controlId="email" label="Email Address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Date" className="mb-3">
          <Form.Control type="date" placeholder="mm/dd/yyyy" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelect" label="Aesthetic">
          <Form.Select aria-label="Floating label select example">
            <option>Type Of Services</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>
        <br />
        <div className="d-grid gap-2">
          <Button className="bookapp" variant size="lg" active>
            Book Appointment
          </Button>{" "}
        </div>
      </Col>
    </div>

  
  );
}

export default AppointmentButton;
