import React from "react";

import { Card } from "react-bootstrap";

import css from "./Offersforyou.css";

function Offersforyou({ offersprops }) {
  return (
    <div>
      <Card id="offersforyoumaincard" className="Card">
        <Card.Img
          className="offersimages"
          variant="top"
          src={offersprops.Image}
        />

        <Card.Body
          className="offersbody"
          style={{
            height: "20vh",
            borderRadius: "inherit",
          }}
        >
          <Card.Title className="cardtextofu">
            {offersprops.cardtitle}
          </Card.Title>
          <Card.Text className="cardtextofuu">
            {offersprops.carddescription}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Offersforyou;
