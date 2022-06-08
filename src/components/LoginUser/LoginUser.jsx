import { React, useEffect } from "react";
import { Form, Button, Figure } from "react-bootstrap";
import AOS from "aos";

import "./loginuser.css";

import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiLock } from "react-icons/fi";

import logo from "../../components/images/logo.png";

function LoginUser() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <div className="maindivloginuser">
      <div data-aos="flip-left" className="mydiv">
        <div className="login">
          <Form
            className="loginuserform"
            style={{
              width: "25%",
              height: "55%",
              marginInline: "auto",
            }}
          >
            <div style={{ textAlign: "-webkit-center" }}>
              <Figure>
                <Figure.Image
                  style={{
                    borderRadius: "100px",
                    height: "110px",
                    background: "transparent",
                  }}
                  src={logo}
                />
              </Figure>
            </div>
            <div className="strong">
              <strong id="userloginstrong">Welcome</strong>
            </div>
            <span
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Sign In by entering the information below
            </span>

            <div style={{ display: "flex" }}>
              <span>
                <CgProfile
                  size={30}
                  style={{ color: "white", marginTop: "11px" }}
                />
              </span>
              <Form.Floating
                className="mb-3"
                style={{ width: "-webkit-fill-available" }}
                // className="mb-3"
              >
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Username"
                  style={{ background: "none", color: "white" }}
                />
                <label style={{ color: "white" }} htmlFor="floatingInputCustom">
                  Username
                </label>
              </Form.Floating>
            </div>
            <div style={{ display: "flex" }}>
              <span>
                <FiLock
                  size={30}
                  style={{ color: "white", marginTop: "11px" }}
                />
              </span>
              <Form.Floating
                style={{ width: "-webkit-fill-available" }}
                className="mb-3"
              >
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
                  style={{ background: "none", color: "white" }}
                />
                <label
                  style={{ color: "white" }}
                  htmlFor="floatingPasswordCustom"
                >
                  Password
                </label>
              </Form.Floating>
            </div>
            <div class="form-check" style={{ marginLeft: "30px" }}>
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                <span
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "left",
                    padding: "0 0 2% 0",
                  }}
                >
                  Remember Me
                </span>
              </label>
            </div>
            <Link style={{ textDecorationLine: "none" }} to="/">
              <span
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "right",
                  padding: "0 0 2% 0",
                }}
              >
                Forgot Password
              </span>
            </Link>
            <div className="d-grid gap-2">
              <div style={{ textAlign: "-webkit-center" }}>
                <Button
                  className="loginuserbutton"
                  type="submit"
                  size="lg"
                  href="/"
                >
                  Get Started
                </Button>
              </div>
              <span className="spanuserlogin">
                Don't have an account?
                <br />
                <Link style={{ color: "#B08AAE" }} to="/sign-me-up">
                  SIGN UP
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default LoginUser;
