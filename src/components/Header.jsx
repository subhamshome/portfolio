import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/header.css'; 
import resume from '../assets/Subham_Shome_CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faCamera } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
 const [scrolling, setScrolling] = useState(false);
 const blog = 'https://subhamshome.medium.com';
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMobileMenu = () => {
   setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 const handleScrollToSection = (sectionId) => (e) => {
    e.preventDefault();
  
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top;
      const headerHeight = document.querySelector('.header').offsetHeight;
      const totalOffset = offset - headerHeight;
  
      window.scrollBy({
        top: totalOffset,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
 };

 const handleScrollToTopClick = () => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
 };

 return (   
    <header id='header' className={`header ${scrolling ? 'scrolled' : ''}`}>
      <Link 
        to='/' 
        className={`header-link ${scrolling ? 'scrolled-text' : ''}`}
        onClick={handleScrollToTopClick}>
        <h2>Subham Shome</h2>
      </Link>
      <nav className="nav">
        <a href="#about" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('about')}>
          About
        </a>
        <a href="#skills" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('skills')}>
          Skills
        </a>
        <a href="#timeline" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('timeline')}>
          Timeline
        </a>
        <a href="#projects" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('projects')}>
          Projects
        </a>
        <a href="#awards" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('awards')}>
          Awards
        </a>
        <a href="#contact" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('contact')}>
          Contact
        </a>
        <Link to={blog} target="_blank" className={`a ${scrolling ? 'scrolled-a' : ''}`}>
          Blog
        </Link>
        <Link to={resume} target="_blank" className={`header-button ${scrolling ? 'header-button-scrolled' : ''}`}>
          Resume
        </Link>
        <div className="camera-div">
          <a href="https://www.subhamshomephotography.com" target="_blank" rel="noopener noreferrer"  className={`a ${scrolling ? 'scrolled-camera-icon' : ''}`}>
            <FontAwesomeIcon icon={faCamera} />
          </a>
        </div>
      </nav>

      <button className={`mobile-menu-button ${scrolling ? 'scrolled-mobile-menu-button' : ''} 
        ${isMobileMenuOpen ? 'menu-button-open' : ''}`} onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button className={`mobile-menu-close-button ${scrolling ? 'scrolled-mobile-menu-close-button' : ''} 
        ${isMobileMenuOpen ? 'close-button-open' : ''}`} onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className='mobile-menu-nav'>
            <a href="#about" className="scrolled-a" onClick={handleScrollToSection('about')}>
              About
            </a>
            <a href="#skills" className="scrolled-a" onClick={handleScrollToSection('skills')}>
              Skills
            </a>
            <a href="#timeline" className="scrolled-a" onClick={handleScrollToSection('timeline')}>
              Timeline
            </a>
            <a href="#projects" className="scrolled-a" onClick={handleScrollToSection('projects')}>
              Projects
            </a>
            <a href="#awards" className="scrolled-a" onClick={handleScrollToSection('awards')}>
              Awards
            </a>
            <a href="#contact" className="scrolled-a" onClick={handleScrollToSection('contact')}>
              Contact
            </a>
            <Link to={blog} target="_blank" className="scrolled-a">
              Blog
            </Link>
            <br />
            <Link to={resume} target="_blank" className="header-button-scrolled">
              Resume
            </Link>
            <br />
            <div>
              <a href="https://www.subhamshomephotography.com" target="_blank" rel="noopener noreferrer" className="camera-icon">
                <FontAwesomeIcon icon={faCamera} />
              </a>
            </div>
        </nav>
      </div>
      

    </header>
 );
};

export default Header;