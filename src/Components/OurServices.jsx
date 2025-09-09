import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './ServicesSection.css'; // for custom styling

const services = [
  {
    title: 'On-grid Solar',
    image: 'https://www.belmontsolar.com/wp-content/uploads/Off-Grid-Solar-Installation/ground-mounted-off-grid-solar-energy-1024x768.jpg',
  },
  {
    title: 'Remote Gate',
    image: 'https://i.pinimg.com/originals/2d/42/65/2d42658dacbd6d11d71424d942c09292.jpg',
  },
  {
    title: 'Boom Barrier',
    image: 'https://solutionsunlimited.co.ke/wp-content/uploads/2022/09/Boom-Barrier.jpg',
  },
  {
    title: 'Off-grid Solar',
    image: 'https://www.choosesolar.com.au/wp-content/uploads/2019/12/shutterstock_1470587588-1.jpg',
  },
  {
    title: 'Remote Shutter',
    image: 'https://cdn.instructables.com/ORIG/FU4/1NAC/IPTJGZXF/FU41NACIPTJGZXF.jpg?width=2100',
  },
  {
    title: 'CCTV IP Series',
    image: 'https://tigersecurity.co.nz/wp-content/uploads/2020/10/honeywell-30-series.jpg',
  },
];

const OurServices = () => {
  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <motion.div
                className="service-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={service.image} alt={service.title} />
                  <Card.Body className="text-center">
                    <Card.Title>{service.title}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;