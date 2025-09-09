import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {  FaTreeCity, FaIndustry } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Residence',
    // icon: <FaHome className="text-primary me-2 fs-4" />,
    description: 'Reduce electricity costs and improve overall energy efficiency by installing solar panels on your home.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e',
  },
  {
    title: 'Public Space',
    icon: <FaTreeCity className="text-success me-2 fs-4" />,
    description: 'Installing solar panels in public spaces is essential for fostering a sustainable, eco-friendly environment.',
    image: 'https://images.unsplash.com/photo-1602524208170-30c9f2e1d3e2',
  },
  {
    title: 'Industrial',
    icon: <FaIndustry className="text-dark me-2 fs-4" />,
    description: 'Utilize solar energy for your operations. Solar panels will boost your company’s eco-friendly image.',
    image: 'https://images.unsplash.com/photo-1605648916312-7792a9f6823b',
  },
  {
    title: 'Industrial',
    icon: <FaIndustry className="text-dark me-2 fs-4" />,
    description: 'Utilize solar energy for your operations. Solar panels will boost your company’s eco-friendly image.',
    image: 'https://images.unsplash.com/photo-1605648916312-7792a9f6823b',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Services = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="text-muted small d-block mb-2">
            {/* <FaHome className="me-1" /> Our Service */}
          </span>
          <h2 className="fw-bold fs-3">Boost Property Value with Solar Panels</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Installing solar panels is a smart investment that can boost your property’s value.
          </p>
        </div>

        <Row className="g-4">
  {cards.map((card, i) => (
    <Col xs={12} sm={6} md={4} lg={3} key={card.title}>
      <motion.div
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <Card className="h-100 border-0 shadow-sm rounded-4">
          <Card.Body className="pb-0">
            <div className="d-flex align-items-center mb-3">
              {card.icon}
              <h5 className="mb-0 fw-semibold ms-2">{card.title}</h5>
            </div>
            <p className="text-muted small">{card.description}</p>
          </Card.Body>
          <Card.Img
            variant="bottom"
            src={card.image}
            alt={card.title}
            className="rounded-bottom"
            style={{ objectFit: 'cover', maxHeight: '240px' }}
          />
        </Card>
      </motion.div>
    </Col>
  ))}
</Row>

      </Container>
    </section>
  );
};

export default Services;
