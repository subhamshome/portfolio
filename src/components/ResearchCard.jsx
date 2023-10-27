import React from 'react';
import '../styles/researchcard.css';

const ResearchCard = ({ title }) => {
  return (
    <div className="research-card">
      <div className='research-text'>{title}</div>
    </div>
  );
};

export default ResearchCard;
