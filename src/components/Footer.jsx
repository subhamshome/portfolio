import React from 'react';
import AcademicBar from './AcademicBar';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p style={{textAlign: 'left'}}>&copy; 2023 Subham Shome<br />
          </p>
        </div>
        <div className="footer-column">
          <AcademicBar />
        </div>
        <div className="footer-column">
          <p><span style={{color: 'grey', fontSize: '12px'}}>Last updated: July, 2024</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
