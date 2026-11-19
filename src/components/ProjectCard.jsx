import React from 'react';
import '../styles/projectcard.css';

// One card per row: image on the left; title, tags, links, then the description and result.
const ProjectCard = ({ title, description, image, tags = [], result, links = [], note }) => (
  <div className="project-card">
    <div className="project-card-media">
      <img src={image} alt={title} className="project-card-image" loading="lazy" />
    </div>
    <div className="project-card-content-container">
      <h4 className="project-card-title">{title}</h4>
      {tags.length > 0 && (
        <div className="project-card-tags">
          {tags.map((tag) => (
            <span className="project-card-tag" key={tag}>{tag}</span>
          ))}
        </div>
      )}
      {links.length > 0 && (
        <div className="project-card-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="project-card-button">
              {link.label}
            </a>
          ))}
        </div>
      )}
      {note && <p className="project-card-note">{note}</p>}
      <p className="project-card-description">{description}</p>
      {result && <p className="project-card-result">{result}</p>}
    </div>
  </div>
);

export default ProjectCard;
