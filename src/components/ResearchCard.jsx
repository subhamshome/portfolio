import React from 'react';
import '../styles/researchcard.css';

const ResearchCard = ({ title }) => {
  return (
    <div className="research-card">
      <h4>{title}</h4>
    </div>
  );
};

export default ResearchCard;
