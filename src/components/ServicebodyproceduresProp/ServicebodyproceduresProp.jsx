import React from "react";

import css from "./ServicebodyproceduresProp.css";

import {
    Col,
    Row,
  } from "react-bootstrap";

function ServicebodyproceduresProp({servicebodyprop}) {
  return (
    <div>
      <div>
        <br />
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <div>
              <h3 id="facialp">{servicebodyprop.proceduretitle}</h3>
              <h3 id="minflh3">{servicebodyprop.type}</h3>
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <div id="starprize">
              <h3 id="h3ratingstar">{servicebodyprop.rating}</h3>
              <h3 id="prize">{servicebodyprop.prize}</h3>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <img id="faceliftimage" src={servicebodyprop.Image} alt="" />
      </div>
      <div id="ppdivp">
        <p>
         {servicebodyprop.description}
        </p>
        <div id="divulsb">
          <ul id="ulsb">
            <li id="li">{servicebodyprop.generalpoint1}</li>
            <li id="li">{servicebodyprop.generalpoint2}</li>
            <li id="li">{servicebodyprop.generalpoint3}</li>
            <li id="li">{servicebodyprop.generalpoint4}</li>
          </ul>
          <ul id="ulsb">
            <li id="li">{servicebodyprop.generalpoint5}</li>
            <li id="li">{servicebodyprop.generalpoint6}</li>
            <li id="li">{servicebodyprop.generalpoint7}</li>
            <li id="li">{servicebodyprop.generalpoint8}</li>
          </ul>
        </div>
        <p>
          {servicebodyprop.reviews}
        </p>
      </div>
    </div>
  );
}

export default ServicebodyproceduresProp;
