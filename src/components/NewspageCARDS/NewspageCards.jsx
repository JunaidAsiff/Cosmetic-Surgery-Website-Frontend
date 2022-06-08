import { React } from "react";
import { Card } from "react-bootstrap";

import css from "./NewspageCards.css";

function NewspageCards({ props }) {
  return (
    <div data-aos="zoom-out-up" style={{ textAlign: "-webkit-center" }}>
      <Card id="newscardmediascreen" >
        <Card.Img id="newspagecardimage"
          variant="top"
           src={props.Image}
        />
        <Card.Body>
          <Card.Title id="newspagecardtitle">{props.cardtitle} </Card.Title>
          <Card.Text id="newspagecardtext"> {props.carddescription} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewspageCards;
