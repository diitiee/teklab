import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Badge bg="success" className="mb-3 px-3 py-2 fs-6 text-uppercase">
                Gov. Approved Vendor
              </Badge>
              <h2 className="fw-bold mb-3">Why Choose Us?</h2>
              <p className="text-muted">
                We are focused on sustainability and strive to minimize environmental impact while maximizing
                energy production. Our team of experts is passionate about developing solar technology and
                supporting our partners in providing exceptional service. We take pride in promoting renewable
                energy and empowering communities to embrace a green future.
              </p>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src="https://img.freepik.com/free-photo/man-worker-firld-by-solar-panels_1303-15559.jpg?uid=R180118753&ga=GA1.1.1722886742.1725226493&semt=ais_hybrid&w=740" // Replace with your actual image path
                alt="Why Choose Us"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
