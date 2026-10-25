import React, { useState, useEffect } from 'react';
import '../styles/backtotop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} className='arrow' />
    </button>
  );
};

export default BackToTopButton;
