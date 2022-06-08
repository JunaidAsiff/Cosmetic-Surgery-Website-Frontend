import React from "react";
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./signupuser.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function SignupUser() {
  return (
    <div className="loginsu">
      <Form id="signupForm" style={{ width: "40%", marginInline: "30%" }}>
        <div className="strong">
          <hr id="signuphr" />
          <strong id="strongsu">SignUp as User</strong>
          <hr id="signuphr" />
        </div>
        <Row>
          <Col>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="firstname"
              />
              <label htmlFor="floatingInputCustom">First Name</label>
            </Form.Floating>
          </Col>
          <Col>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="lastname"
              />
              <label htmlFor="floatingInputCustom">Last Name</label>
            </Form.Floating>
          </Col>
        </Row>

        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="Address"
          />
          <label htmlFor="floatingInputCustom">Address</label>
        </Form.Floating>
        <Row>
          <Col>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="username"
              />
              <label htmlFor="floatingInputCustom">User Name</label>
            </Form.Floating>
          </Col>
          <Col>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="email"
              />
              <label htmlFor="floatingInputCustom">Email</label>
            </Form.Floating>
          </Col>
        </Row>

        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
        <br />
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="ConfirmPassword"
          />
          <label htmlFor="floatingPasswordCustom">Confirm Password</label>
        </Form.Floating>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <br />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            className="signinbutton"
            variant="outline-primary"
            type="submit"
            size="lg"
            href="/signin"
          >
            SignUp Now
          </Button>
          <hr id="signuphr" />
          <span className="spanuserlogin">
            Already have an account? <Link to="/signin">LogIn Here</Link>
          </span>
          <hr id="signuphr" />
          <span className="spanupuserlogin">
            By creating this account, you agree to our Privacy Policy & Cookie
            Policy
          </span>
          <hr id="signuphr" />
        </div>
      </Form>
    </div>
  );
}

export default SignupUser;
