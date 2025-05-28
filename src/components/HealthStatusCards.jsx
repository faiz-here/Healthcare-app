import React from 'react';
import './HealthStatusCards.css';
import lungs from '../assets/lungs.png'
import teeth from '../assets/tooth.png'
import bone from '../assets/bone.png'

const cardsData = [
  {
    title: 'Lungs',
    img: lungs,
    status: 'Issue Detected',
    color: 'red',
    date: '22 May, 2025',
  },
  {
    title: 'Teeth',
    img: teeth,
    status: 'Healthy',
    color: 'green',
    date: '18 May, 2025',
  },
  {
    title: 'Bone',
    img: bone,
    status: 'Stable',
    color: 'blue',
    date: '10 May, 2025',
  },
];

const HealthStatusCards = () => {
  return (
    <div className="health-cards-container">
      {cardsData.map((card, index) => (
        <div className="health-card" key={index}>
          <div className='image-card'>
          <img src={card.img} alt="" />
          <h3>{card.title}</h3>
          </div>
          <p className="status" style={{ color: card.color }}>
            {card.status}
          </p>
          <p className="date">{card.date}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
