import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardCarousel from './CardCarousel'; // Assurez-vous d'importer le carrousel

const Skill = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <div className="skill-line1"></div>
        <div className="skill-text">Skills</div>
        <Row className="justify-content-center no-gutters">
          <Col md="auto">
            {/* Carrousel de Cartes */}
            <CardCarousel />
            <div className="skill-line2"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skill;
