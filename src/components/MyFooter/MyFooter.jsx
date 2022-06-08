import { React, useEffect } from "react";

import "./myfooter.css";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function MyFooter() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="outsidediv">
        <div className="insidediv">
          <div>
            <h2>
              <strong className="h2">
                AESTHETIC <br />
                <a href="https://www.facebook.com/junaid.asif.9615">
                  <button id="iconbuttons">
                    <FaFacebookSquare />
                  </button>
                </a>
                <a href="/">
                  <button href="google/aesthetic" id="iconbuttons">
                    <FaGoogle />
                  </button>
                </a>
                <a href="https://instagram.com/j.asiff?igshid=YmMyMTA2M2Y=">
                  <button href="instagram/aesthetic" id="iconbuttons">
                    <FaInstagram />
                  </button>
                </a>
                <a href="https://twitter.com/Jasif21?t=3bWLDGSTw6-EgzPU6A2cCw&s=09">
                  <button href="twitter/aesthetic" id="iconbuttons">
                    <FaTwitter />
                  </button>
                </a>
              </strong>
            </h2>
          </div>

          <div id="footerdivlower">
            <ul className="insidecol">
              <li id="culi">
                <strong>Company</strong>
              </li>
              <br />
              <li>
                <a href=""> About Us</a>{" "}
              </li>
              <li>
                <a href=""> Departments</a>
              </li>
              <li>
                <a href=""> Find a Doctor</a>
              </li>
              <li>
                <a href=""> FAQ</a>
              </li>
              <li>
                <a href=""> News</a>
              </li>
            </ul>
            <ul className="insidecol">
              <li id="culi">
                <strong>Quick Links</strong>
              </li>
              <br />
              <li>
                <a href="">Home</a>{" "}
              </li>
              <li>
                <a href="">News</a>{" "}
              </li>
              <li>
                <a href="">Services</a>{" "}
              </li>
              <li>
                <a href="">ContactUs</a>{" "}
              </li>
              <br />
            </ul>
            <ul className="insidecol">
              <li id="culi">
                <strong>Contact Us</strong>
              </li>
              <br />
              <li id="culi">
                <FaMapMarkerAlt id="iconflcu" /> Los Angeles Gournadi, 1230
                Bariasl
              </li>

              <li id="culi">
                <FaPhoneAlt id="iconflcu" /> +92-310-6512776
              </li>

              <li id="culi">
                <FaEnvelope id="iconflcu" /> Support@gmail.com
              </li>
              <br />
              <br />
            </ul>
          </div>

          <iframe
            id="map"
            title="googlemap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.773629952136!2d74.2237868220195!3d31.42036240543611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901182adb260d%3A0x8429b7785cff82e5!2sGM%20Hostels%20for%20Boys!5e0!3m2!1sen!2s!4v1654193653194!5m2!1sen!2s"
            width="50%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <h5 className="h5">
            Copyright © 2022 All rights reserved | All Rights Reserved | Terms &
            Use | Privacy Policy.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default MyFooter;
