import React from 'react';
import '../styles/projectcard.css';

const ProjectCard = ({ title, description, image, buttonLabel, buttonLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content-container">
        <div>
          <h4 className="project-card-title">{title}</h4>
          <p className="project-card-description">{description}</p>
        </div>
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <button className="project-card-button">{buttonLabel}</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
