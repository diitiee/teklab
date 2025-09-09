import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { FaAward, FaLeaf, FaSolarPanel, FaUsers } from 'react-icons/fa6'

function Whyus() {
  return (
    <div>
        <Row className="mb-5">
          <Col className="text-center mb-4">
            <h3 className="fw-bold">Why Choose Us?</h3>
          </Col>
        </Row>

        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <FaLeaf className="text-success" size={50} />
                </div>
                <Card.Title>Sustainability Focus</Card.Title>
                <Card.Text>
                  We strive to minimize environmental impact while maximizing
                  energy production for a greener future.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <FaSolarPanel className="text-success" size={50} />
                </div>
                <Card.Title>Quality Products</Card.Title>
                <Card.Text>
                  We offer high-quality Ongrid and Hybrid solar plant solutions
                  with government subsidies available.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <FaAward className="text-success" size={50} />
                </div>
                <Card.Title>Government Approved</Card.Title>
                <Card.Text>
                  We are a certified government-approved vendor, ensuring
                  compliance with all regulations and standards.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <FaUsers className="text-success" size={50} />
                </div>
                <Card.Title>Expert Team</Card.Title>
                <Card.Text>
                  Our team of experts is passionate about developing solar
                  technology and providing exceptional service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <h3 className="fw-bold mb-4">Our Mission</h3>
            <p className="lead px-lg-5 mx-lg-5">
              We are proud of our role in promoting renewable energy and
              empowering communities to embrace a green future through
              innovative solar and automation technologies.
            </p>
            <Button variant="outline-success" size="lg" className="mt-3">
              Contact Us Today
            </Button>
          </Col>
        </Row>
    </div>
  )
}

export default Whyus