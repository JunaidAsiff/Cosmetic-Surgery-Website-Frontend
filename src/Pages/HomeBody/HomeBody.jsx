import React from "react";
import {
  Carousel,
  Row,
  Col,
  Card,
  FloatingLabel,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import "aos/dist/aos.css";
import "./homebody.css";

import SkincareCards from "../../components/HomebodySkincareCards/SkincareCards";
import ExpertdocCard from "../../components/HomebodyExpertdocCards/ExpertdocCard";
import Offersforyou from "../../components/OffersforyouCards/Offersforyou";

import carousal1 from "../../components/images/carousal1.png";
import carousal2 from "../../components/images/carousal2.png";
import carousal3 from "../../components/images/carousal3.png";

import homecardimage from "../../components/images/homecardimage.png";
import userHomeBg2 from "../../components/images/userHomeBg2.jpg";

import adveqp1 from "../../components/images/adveqp1.jpg";
import adveqp2 from "../../components/images/adveqp2.jpg";
import adveqp3 from "../../components/images/adveqp3.jpg";
import adveqp4 from "../../components/images/adveqp4.jpg";

import expdoc1a from "../../components/images/expdoc1a.jpg";
import expdoc2a from "../../components/images/expdoc2a.jpg";
import expdoc3a from "../../components/images/expdoc3a.jpg";
import expdoc4a from "../../components/images/expdoc4a.jpg";

function HomeBody() {
  const arrayskincare = [
    {
      title: "1st card",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro? lorem",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
    {
      title: "2nd card",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
    {
      title: "2nd card",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
    {
      title: "2nd card",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro? ",
    },
    {
      title: "2nd card",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
    {
      title: "2nd card",
      subtitle:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
  ];
  const arrayexpdoc = [
    {
      Image: expdoc1a,
      exptitle: "Doctor",
      expdescription:
        "Lorem, ipsum dolor sit amet consectetur  lorem20 adipisicing elit. Natus labore ipsam porro?",
    },
    {
      Image: expdoc2a,
      exptitle: "Doctor",
      expdescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
    {
      Image: expdoc3a,
      exptitle: "Doctor",
      expdescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
    {
      Image: expdoc4a,
      exptitle: "Doctor",
      expdescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
  ];
  const offersforyouarray = [
    {
      Image: adveqp1,
      cardtitle: "Advanced equipment",
      carddescription:
        "The advanced equipments are available to serve you in the bestest way possible. With digitized healthcare, we keep you from the bedside to the boardroom.",
    },
    {
      Image: adveqp2,
      cardtitle: "Qualified doctors",
      carddescription:
        " We solve problems on every level of treatment, treat even the most complicated cases. We challenge the limits of traditional healthcare with innovative self-care solutions.",
    },
    {
      Image: adveqp3,
      cardtitle: "Certified services",
      carddescription:
        "This is where we get to know you, your competition and your felings. We provide the best certified services for your comfort. We craft best-practices health plan according to your desires.",
    },
    {
      Image: adveqp4,
      cardtitle: "Emergency care",
      carddescription:
        "Serving all people through exemplary health care,Not just better healthcare, but a better healthcare experience. A passion for putting patients first because Your Life Matters.",
    },
  ];
  return (
    <div id="fontfamily"
      style={{
        backgroundImage: `url(${userHomeBg2})`,
        backgroundSize: "contain",
      }}
    >
      <div className="carousel">
        <strong className="userhometext">User.Home</strong>
        <hr id="hr" />
        <Carousel id="carouselmain" fade>
          <Carousel.Item>
            <img className="d-block w-100" src={carousal1} alt="First slide" />
            <Carousel.Caption style={{ top: "1.25rem" }}>
              <h3 className="h3c1">The Most Valuable Thing Is Your Health.</h3>
              <p className="p1">
                If you're happy, if you're feeling good, then nothing else
                matters.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousal2} alt="Second slide" />

            <Carousel.Caption style={{ top: "1.25rem" }}>
              <strong className="h3c2">
                Leading the way in Aesthetic excellence.
              </strong>
              <p
                id="carouselcaption2"
                className="p1"
                style={{ color: "black", fontSize: "20px" }}
              >
                Give Aesthetic a chance.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousal3} alt="Second slide" />

            <Carousel.Caption style={{ bottom: "1.25rem" }}>
              <strong id="carouseltitle3" className="h3c3">
                We Are Here For Your Care.
              </strong>
              <p className="p1" style={{ color: "white" }}>
                Physical fitness is the first requisite of happiness.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="maindiv">
        <Row id="requestconsult">
          <Col data-aos="fade-right" className="cardsdiv">
            <span className="consult">REQUEST FOR YOUR</span> <br />
            <strong className="consult">Consultation</strong>
            <FloatingLabel className="mb-3" controlId="name" label="Name">
              <Form.Control
                style={{ borderRadius: "15px" }}
                type="text"
                placeholder="Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="email"
              label="Email Address"
              className="mb-3"
            >
              <Form.Control
                style={{ borderRadius: "15px" }}
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Date"
              className="mb-3"
            >
              <Form.Control
                style={{ borderRadius: "15px" }}
                type="date"
                placeholder="mm/dd/yyyy"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelect" label="Aesthetic">
              <Form.Select
                style={{ borderRadius: "15px" }}
                aria-label="Floating label select example"
              >
                <option>Type Of Services</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
            <br />
            <div className="d-grid gap-2" style={{ justifyContent: "center" }}>
              <Button className="bookapp" variant size="lg" active>
                Book Appointment
              </Button>{" "}
            </div>
          </Col>

          <Col data-aos="fade-left">
            <Card className="wtaCard" id="cardtrans">
              <Card.Body id="welcometoaestheticrightside">
                <Card.Subtitle id="cardsubwelcome">
                  Welcome TO AESTHETIC
                </Card.Subtitle>
                <Card.Title>
                  {" "}
                  <h2>
                    Find Best Doctors With <p className="atext">★AESTHETIC★</p>
                  </h2>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li id="welcomct" >Best Outcome for Every Patient Every Time.</li>
                    <li id="welcomct" >Better Doctors. Better Care.</li>
                    <li id="welcomct" >Bettering the Human Condition.</li>
                    <li id="welcomct" >Breakthroughs every day.</li>
                  </ul>
                </Card.Text>
                <Card.Img className="img" src={homecardimage} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="divhi">
        <div className="maindiv">
          <div className="divheadings">
            <hr id="hr" />
            <h2 id="whychooseus" style={{ color: "black" }}>Why Choose Us?</h2>
            <h2 id="whychooseus" style={{ color: "black" }}>Offers For You.</h2>
            <hr id="hr" />
          </div>
        </div>

        <Container>
          <Row>
            {offersforyouarray.map((offersprops) => {
              return (
                <Col id="faderightcol"
                  style={{ margin: "1% 0% 1% 0%" }}
                  data-aos="fade-right"
                  sm={6}
                >
                  <Offersforyou offersprops={offersprops} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <br />
      <div className="maindiv">
        <div className="ourteamexpertstext">
          {" "}
          <hr id="hr" />
          <strong id="ourteam" className="ourteamexpertstext">
            Our Team <br /> Our Expert Doctors
          </strong>{" "}
          <hr id="hr" />
        </div>

        <Container id="containerresponsive">
          <Row>
            {arrayexpdoc.map((expdocprops) => {
              // .map se data ata ha
              return (
                <Col id="colpadding" xs={12} sm={6} md={6} lg={4}>
                  <Col className="cardsdivlower">
                    <ExpertdocCard expdocprops={expdocprops} />
                  </Col>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="maindiv">
        <div className="ourteamexpertstext">
          <hr id="hr" />
          <strong id="ournews"className="ourteamexpertstext">
            Our News <br /> Skin Care Tips
          </strong>{" "}
          <hr id="hr" />
        </div>
      </div>
      <Container id="containerresponsive">
        <Row id="rowscformedia">
          {arrayskincare.map((skincareprops) => {
            // .map se data ata ha
            return (
              <Col id="colpadding" xs={12} sm={6} md={6} lg={4}>
                <SkincareCards skincareprops={skincareprops} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default HomeBody;
