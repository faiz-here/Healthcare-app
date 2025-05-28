import React from 'react';
import './AnatomySection.css';
import humanBody from '../assets/humanBody.jpg'
import heart from '../assets/heart.png'
import bone from '../assets/bone.png'

const AnatomySection = () => {
  const indicators = [
    { label: 'Healthy Heart', color: '#9861C5', top: '20%', left: '65%',img: heart },
    { label: 'Bone Stable', color: 'skyblue', top: '60%', left: '40%', img: bone },
  ];

  return (
    <div className="anatomy-section">
      <div className="anatomy-image">
        <img
          src={humanBody}
          alt="Human anatomy" className='humanbody'
        />
        {indicators.map((item, idx) => (
          <div
          className="indicator"
          key={idx}
          style={{ top: item.top, left: item.left, backgroundColor: item.color, fonColor: "green",color: 'black', border:'none' }}
          >
          <img src={item.img} alt="" className='img'/> 
           <span style={{ }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
