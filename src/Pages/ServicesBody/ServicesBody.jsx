import React from "react";

import "./ServicesBody.css";

import allservices from "../../components/images/allservices.png";

// import ReactStars from "react-rating-stars-component";

import {
  Col,
  Row,
  Container,
  Form,
  DropdownButton,
  Dropdown,
  FloatingLabel,
  Button,
} from "react-bootstrap";

import servicefp from "../../components/images/servicefp.png";

import ServicebodyproceduresProp from "../../components/ServicebodyproceduresProp/ServicebodyproceduresProp";

function ServicesBody() {
 const facialprocarray = [
   {
    proceduretitle: "Facial procedures",
    type: "Facelift",
    rating: "★★★★★",
    prize: "$159.50",
    Image: servicefp,
    description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur maxime magni odio neque aut, ex vero laboriosam id? Quisquam, natus!",
    generalpoint1:"Routine and medical care",
    generalpoint2:"Excellence in Healthcare every",
    generalpoint3:"Building a healthy environment",
    generalpoint4:"cumsan lacus vel facilisis.",
    generalpoint5:"Routine and medical care",
    generalpoint6:"Excellence in Healthcare every",
    generalpoint7:"Building a healthy environment",
    generalpoint8:"cumsan lacus vel facilisis.",
    reviews:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime magni odio neque aut, ex vero laboriosam id? Quisquam, natus!"
 },

]




  return (
    <Container>
      <br />
      <Row>
        <Col data-aos="zoom-in-up" xs={12} sm={12} md={6} lg={4}>
          <div>
            <div>
              <div>
                <h4>
                  <img src={allservices} alt="" />
                  All services
                </h4>
              </div>
              <div>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Facial Procedures"
                >
                  <Dropdown.Item id="drop" href="/facelift">
                    Facelift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/minifacelify">
                    Mini Facelift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/eyelidlift">
                    Eyelid lift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/browlift">
                    Brow lift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/rhinolpasty">
                    Rhinoplasty
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/chinimplants">
                    Chin implants
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/facialfilters">
                    Facial filters
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Body Procedures"
                >
                  <Dropdown.Item id="drop" href="/facelift">
                    Facelift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/minifacelify">
                    Mini Facelift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/eyelidlift">
                    Eyelid lift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/browlift">
                    Brow lift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/rhinolpasty">
                    Rhinoplasty
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/chinimplants">
                    Chin implants
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/facialfilters">
                    Facial filters
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Buttocks">
                <Dropdown.Item id="drop" href="/facelift">
                    Facelift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/minifacelify">
                    Mini Facelift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/eyelidlift">
                    Eyelid lift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/browlift">
                    Brow lift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/rhinolpasty">
                    Rhinoplasty
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/chinimplants">
                    Chin implants
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/facialfilters">
                    Facial filters
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Skin care">
                <Dropdown.Item id="drop" href="/facelift">
                    Facelift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/minifacelify">
                    Mini Facelift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/eyelidlift">
                    Eyelid lift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/browlift">
                    Brow lift
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/rhinolpasty">
                    Rhinoplasty
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/chinimplants">
                    Chin implants
                  </Dropdown.Item>
                  <Dropdown.Item id="drop" href="/facialfilters">
                    Facial filters
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
          <br />
          <div  data-aos="zoom-in-up">
            <div>
              <h4>
                <img src={allservices} alt="" />
                Get an appointment
              </h4>
            </div>
            <>
              <FloatingLabel className="mb-3" controlId="name" label="Name">
                <Form.Control type="text" placeholder="Name" />
              </FloatingLabel>
              <FloatingLabel
                controlId="email"
                label="Email Address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Date"
                className="mb-3"
              >
                <Form.Control type="date" placeholder="mm/dd/yyyy" />
              </FloatingLabel>

              <FloatingLabel
                className="mb-3"
                controlId="floatingSelect"
                label="Aesthetic"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Type Of Service</option>
                  <option value="1">Advanced equipment</option>
                  <option value="2">Qualified doctors</option>
                  <option value="3">Certified services</option>
                  <option value="4">Emergency care</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel>
                <div className="d-grid gap-2">
                  <Button id="bookapp" size="lg">
                    Book Appointment
                  </Button>
                </div>
              </FloatingLabel>
            </>
          </div>
        </Col>
        {/* <Col data-aos="zoom-in-up" xs={12} sm={12} md={6} lg={7}> */}




            {facialprocarray.map((servicebodyprop) => {
              return (
                <Col data-aos="zoom-in-up" xs={12} sm={12} md={6} lg={7}>

                 
                    <ServicebodyproceduresProp servicebodyprop={servicebodyprop} />
                  </Col>
               
              );
            })}
       




{/* 

          <div>
            <div>
              <br />
              <Row>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <div>
                    <h3 id="facialp">Facial procedures</h3>
                    <h3 id="minflh3">Min Facelift</h3>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <div id="starprize">
                    <h3 id="h3ratingstar">★★★★★</h3>
                    <h3 id="prize">$159.50</h3>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <img id="faceliftimage" src={servicefp} alt="" />
            </div>
            <div id="ppdivp">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur maxime magni odio neque aut, ex vero laboriosam id?
                Quisquam, natus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                saepe ratione similique modi eaque fuga temporibus sint suscipit
                et labore?
              </p>
              <div id="divulsb">
                <ul id="ulsb">
                  <li id="li">Routine and medical care</li>
                  <li id="li">Excellence in Healthcare every</li>
                  <li id="li">Building a healthy environment</li>
                  <li id="li">cumsan lacus vel facilisis.</li>
                </ul>
                <ul id="ulsb">
                  <li id="li">Routine and medical care</li>
                  <li id="li">Excellence in Healthcare every</li>
                  <li id="li">Building a healthy environment</li>
                  <li id="li">cumsan lacus vel facilisis.</li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita sequi odio cum maiores a cumque quam aperiam quo fugiat
                sapiente!
              </p>
            </div>
          </div>

 */}




        {/* </Col> */}





        
      </Row>
      <br />
    </Container>
  );
}

export default ServicesBody;
