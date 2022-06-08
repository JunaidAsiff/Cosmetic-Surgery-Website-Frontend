import React from "react";
import "./ContactusBody.css";

function ContactusBody() {
  return (
    <div className="fullmain">
      <section data-aos="flip-down" className="ftco-section">
        <div className="container">
          <strong id="strongcuf">Feel Free To Ask Anything .....</strong>
          <br />
          <strong id="strongcuf">Always Available for you ....</strong>
          <div className="row justify-content-center">
            <div id="maindivcu" className="col-lg-10">
              <div id="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4 py-5">
                      <h3 className="mb-4">Write us</h3>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                        novalidate="novalidate"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                nameName="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="6"
                                placeholder="Message"
                                style={{ height: "91px" }}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                                id="cussendmessage"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-stretch">
                    <div
                      className="info-wrap w-100 p-md-5 p-4 py-5"
                      style={{ background: "#1C1E25" }}
                    >
                      <h3>Contact information</h3>
                      <p className="mb-4">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address:</span> 198 West 21th Street, Suite
                            721 New York NY 10016
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://03106512776">+ 92 3106512776</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Whatsapp:</span>{" "}
                            <a href="https://api.whatsapp.com/send?phone=923046892838">Message me </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:fa19-bce-087@cuilahore.edu.pk">jasif125five@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Website</span> <a href="/">Aesthetic.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactusBody;
