import React from "react";
import { Card } from "react-bootstrap";
import css from "./skincareCards.css";
function SkincareCards({ skincareprops }) {
  return (
    <div id="mediascreensc"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Card id="skincarecardsmedia">
        <Card.Body id="gradient">
          <Card.Title id="ct">{skincareprops.title}</Card.Title>
          <Card.Subtitle id="scctsub"  className="mb-2 text-muted">
            {skincareprops.subtitle}
          </Card.Subtitle>
          <Card.Text id="sccdes">{skincareprops.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SkincareCards;
