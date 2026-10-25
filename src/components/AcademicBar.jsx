import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faKaggle,
  faOrcid,
  faGoogleScholar
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/academicbar.css';

const AcademicBar = () => {
  return (
    <div className="academic-bar">
      <a href="mailto:ss3038@hw.ac.uk" aria-label="Email" className='academic-email'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://linkedin.com/in/subhamshome" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='linkedin'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/subhamshome" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://scholar.google.com/citations?user=uU-S0zMAAAAJ&hl=en&inst=16061989973938494330" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" className='google-scholar'>
        <FontAwesomeIcon icon={faGoogleScholar} />
      </a>
      <a href="https://orcid.org/0009-0002-4120-1979" target="_blank" rel="noopener noreferrer" aria-label="ORCID" className='orcid'>
        <FontAwesomeIcon icon={faOrcid} />
      </a>
      <a href="https://kaggle.com/subhamshome" target="_blank" rel="noopener noreferrer" aria-label="Kaggle" className='kaggle'>
        <FontAwesomeIcon icon={faKaggle} />
      </a>
    </div>
  );
};

export default AcademicBar;
