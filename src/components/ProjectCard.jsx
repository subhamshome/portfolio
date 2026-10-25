import React from 'react';
import '../styles/projectcard.css';

const ProjectCard = ({ title, description, image, tags = [], result, buttonLabel, buttonLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" loading="lazy" />
      <div className="project-card-content-container">
        <div>
          <h4 className="project-card-title">{title}</h4>
          <p className="project-card-description">{description}</p>
          {tags.length > 0 && (
            <div className="project-card-tags">
              {tags.map((tag) => (
                <span className="project-card-tag" key={tag}>{tag}</span>
              ))}
            </div>
          )}
          {result && <p className="project-card-result">{result}</p>}
        </div>
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="project-card-button">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
