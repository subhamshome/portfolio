import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faKaggle,
  faOrcid, // Import the Orcid icon
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/academicbar.css';

const AcademicBar = () => {
  return (
    <div className="academic-bar">
      <a href="mailto:subham.shome@etu.u-bordeaux.fr" target="_blank" rel="noopener noreferrer" className='email'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://linkedin.com/in/subhamshome" target="_blank" rel="noopener noreferrer" className='linkedin'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/subhamshome" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://orcid.org/0009-0002-4120-1979" target="_blank" rel="noopener noreferrer" className='orcid'>
        <FontAwesomeIcon icon={faOrcid} />
      </a>
      <a href="https://kaggle.com/subhamshome" target="_blank" rel="noopener noreferrer" className='kaggle'>
        <FontAwesomeIcon icon={faKaggle} />
      </a>
    </div>
  );
};

export default AcademicBar;
