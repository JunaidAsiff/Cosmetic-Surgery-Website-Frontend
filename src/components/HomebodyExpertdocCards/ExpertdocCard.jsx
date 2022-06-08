import React from "react";
import { Card } from "react-bootstrap";
import css from "./ExpertdocCard.css";
function ExpertdocCard({ expdocprops }) {
  return (
    <div data-aos="zoom-out">
      <Card id="expertdoccardmain" border="info">
        <Card.Body id="cbedms">
          <Card.Img id="cied" variant="top" src={expdocprops.Image} />
          <Card.Title id="expdocct">{expdocprops.exptitle}</Card.Title>
          <Card.Text id="expdocctext">{expdocprops.expdescription}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExpertdocCard;
