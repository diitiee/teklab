import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            {/* <div className='justify-content-start'>
                    <div className="badge">
                      <IoMdGlobe className="globe-icon" />
                      Go solar, go green
                    </div> </div>      */}
            <h4 className="display-4 fw-bold">About us</h4>
            <div className="d-flex justify-content-center">
              <div
                className="border-bottom  border-3"
                style={{ width: "100px" }}
              ></div>
            </div>
            <p className="lead mt-3">
              Powering a sustainable future with innovative solar solutions
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
  <div
    style={{
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #ddd',
      maxWidth: '550px',
      margin: '0 auto', // optional: to center the div horizontally
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // adds subtle shadow to the container instead of the image
    }}
  >
    <Image
      src="https://thearchitectsdiary.com/wp-content/uploads/2020/11/Installing-Solar-Panels-In-Your-Home-1.jpeg"
      alt="Solar panels installation"
      fluid
      style={{ width: '100%', height: 'auto', borderRadius: '0' }} // remove internal radius
    />
  </div>
</Col>

          <Col lg={6}>
            <h3 className="fw-bold mb-4">TEKLAB SOLAR & AUTOMATION</h3>
            <p className="mb-4">
              At TEKLAB SOLAR & AUTOMATION, we are committed to transforming the
              future with clean and sustainable energy solutions. As a leading
              government-approved installer of high-quality solar products, we
              specialize in installing the best solar panels and inverters for
              businesses and consumers.
            </p>
            <p>
              Our advanced technology and dedication to excellence ensure that
              our partners receive efficient, reliable, and environmentally
              friendly energy solutions that reduce costs while promoting a
              greener planet.
            </p>
            <div className="d-flex justify-content-center">
              <Button
                variant="dark"
                className="mt-3"
                style={{ borderRadius: "8px", padding: "10px 20px" }}
              >
                Learn More About Our Mission
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUs;
