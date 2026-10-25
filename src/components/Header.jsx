import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ThemeToggle } from './Theme';
// Photography site link is switched off for now. To re-enable it, uncomment the
// camera import below, the `photoSite` constant and the two JSX blocks marked PHOTO-LINK.
// import { faCamera } from '@fortawesome/free-solid-svg-icons';

const resume = `${process.env.PUBLIC_URL}/Subham_Shome_CV.pdf`;

const Header = () => {
 const [scrolling, setScrolling] = useState(false);
 const blog = 'https://subhamshome.medium.com';
 // const photoSite = 'https://www.subhamshomephotography.com';
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

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
 }, [isMobileMenuOpen]);

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
        <a href="#publications" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('publications')}>
          Publications
        </a>
        <a href="#awards" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('awards')}>
          Awards
        </a>
        <a href="#contact" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('contact')}>
          Contact
        </a>
        <a href={blog} target="_blank" rel="noopener noreferrer" className={`a ${scrolling ? 'scrolled-a' : ''}`}>
          Blog
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer" className={`header-button ${scrolling ? 'header-button-scrolled' : ''}`}>
          Resume
        </a>
        <ThemeToggle className={scrolling ? 'scrolled-a' : ''} />
        {/* PHOTO-LINK (desktop): uncomment when the photography site is ready
        <div className="camera-div">
          <a href={photoSite} target="_blank" rel="noopener noreferrer" aria-label="Photography site" className={`a ${scrolling ? 'scrolled-camera-icon' : ''}`}>
            <FontAwesomeIcon icon={faCamera} />
          </a>
        </div>
        */}
      </nav>

      <button className={`mobile-menu-button ${scrolling ? 'scrolled-mobile-menu-button' : ''} 
        ${isMobileMenuOpen ? 'menu-button-open' : ''}`} onClick={toggleMobileMenu}
        type="button" aria-label="Open menu" aria-expanded={isMobileMenuOpen}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button className={`mobile-menu-close-button ${scrolling ? 'scrolled-mobile-menu-close-button' : ''} 
        ${isMobileMenuOpen ? 'close-button-open' : ''}`} onClick={toggleMobileMenu}
        type="button" aria-label="Close menu">
        <FontAwesomeIcon icon={faXmark} />
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
            <a href="#publications" className="scrolled-a" onClick={handleScrollToSection('publications')}>
              Publications
            </a>
            <a href="#awards" className="scrolled-a" onClick={handleScrollToSection('awards')}>
              Awards
            </a>
            <a href="#contact" className="scrolled-a" onClick={handleScrollToSection('contact')}>
              Contact
            </a>
            <a href={blog} target="_blank" rel="noopener noreferrer" className="scrolled-a">
              Blog
            </a>
            <br />
            <a href={resume} target="_blank" rel="noopener noreferrer" className="header-button-scrolled">
              Resume
            </a>
            <br />
            <ThemeToggle className="scrolled-a" />
            {/* PHOTO-LINK (mobile): uncomment when the photography site is ready
            <br />
            <div className='camera-div-mobile'>
              <a href={photoSite} target="_blank" rel="noopener noreferrer" aria-label="Photography site" className="camera-icon">
                <FontAwesomeIcon icon={faCamera} />
              </a>
            </div>
            */}
        </nav>
      </div>
      

    </header>
 );
};

export default Header;