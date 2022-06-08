import React from "react";

import { Row, Col, Container } from "react-bootstrap";

import userHomeBg2 from "../../components/images/userHomeBg2.jpg";
import NewspageCards from "../../components/NewspageCARDS/NewspageCards";
import SkincareCards from "../../components/HomebodySkincareCards/SkincareCards";

import news1 from "../../components/images/news1.png";
import news2 from "../../components/images/news2.png";
import news3 from "../../components/images/news3.png";
import news4 from "../../components/images/news4.png";
import news5 from "../../components/images/news5.png";
import news6 from "../../components/images/news6.png";
import news7 from "../../components/images/news7.png";
import news8 from "../../components/images/news8.png";
import news9 from "../../components/images/news9.png";

import css from "./Newspage.css";

function Newspage() {
  //   //array banani ha
  const array = [
    {
      Image: news1,
      cardtitle: "1st card",
      carddescription: "This is the first card",
    },
    {
      Image: news2,
      cardtitle: "2nd card",
      carddescription: "This is the second card",
    },
    {
      Image: news3,
      cardtitle: "3rd card",
      carddescription: "This is the third card",
    },
    {
      Image: news4,
      cardtitle: "4th card",
      carddescription: "This is the fourth card",
    },
    {
      Image: news5,
      cardtitle: "5th card",
      carddescription: "This is the fifth card",
    },
    {
      Image: news6,
      cardtitle: "6th card",
      carddescription: "This is the sixth card",
    },
    {
      Image: news7,
      cardtitle: "7th card",
      carddescription: "This is the seventh card",
    },
    {
      Image: news8,
      cardtitle: "8th card",
      carddescription: "This is the eighth card",
    },
    {
      Image: news9,
      cardtitle: "9th card",
      carddescription: "This is the ninth card",
    },
  ];
  const arraynews = [
    {
      title: "1st card",
      subtitle:
        "Title",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
    {
      title: "2nd card",
      subtitle:
        "Tit`le",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore ipsam porro?",
    },
  ];
  return (
    <div>
      <div style={{ backgroundImage: `url(${userHomeBg2})` }}>
        <div className="carousel">
          <strong className="userhometext">Our News</strong>
          <hr id="newspagehr" />
        </div>
        <Container id="picandformcontainer">
          <Row>
            {array.map((props) => {
              // .map se data ata ha
              return (
                <Col id="colpadding" xs={6} sm={6} md={4} lg={4}>
                  <NewspageCards props={props} />
                </Col>
              );
            })}
          </Row>
        </Container>
        {/* <hr id="newspagehr" /> */}
        {/* <Container id="containerresponsive">
          <Row>
            {arraynews.map((props) => {
              return (
                <Col id="colpadding" xs={12} sm={6} md={6} lg={4}>
                  <SkincareCards skincareprops={props} />
                </Col>
              );
            })}
          </Row>
        </Container> */}
      </div>
    </div>
  );
}

export default Newspage;
