import React from 'react';
import { Container } from 'react-bootstrap';
import CardSkill from './CardSkill';

const Skill = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <div className="skill-text">Skills</div>
        <CardSkill />
      </Container>
    </section>
  );
};

export default Skill;
