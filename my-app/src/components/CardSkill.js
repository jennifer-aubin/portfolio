import React from 'react';
import Card from 'react-bootstrap/Card';

function CardSkill() {

  const cardsData = [
    {
      title: 'Front-End',
      text: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Back-End',
      text: ['Node.js', 'Express', 'Python']
    },
    {
      title: 'Database',
      text: ['MongoDB', 'SQL', 'Firebase']
    },
    {
      title: 'Others',
      text: ['Git', 'Docker', 'Kubernetes']
    }
  ];

  return (
    <div className="card-skill-container">
      {cardsData.map((card, index) => (
        <Card key={index} style={{ width: '15rem', margin: '1rem' }} className="custom-card">
          <Card.Body>
            <Card.Title className="card-title">{card.title}</Card.Title>
            <Card.Text>
              <ul className="card-text-list">
                {card.text.map((item, itemIndex) => (
                  <li key={itemIndex} className="card-text-item">{item}</li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardSkill;
