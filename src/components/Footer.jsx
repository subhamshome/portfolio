import React from 'react';
import AcademicBar from './AcademicBar';
import { ThemeToggle } from './Theme';
import '../styles/footer.css';

const cv = `${process.env.PUBLIC_URL}/Subham_Shome_CV.pdf`;

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-links" aria-label="Footer">
          {quickLinks.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
          <a href={cv} target="_blank" rel="noopener noreferrer">CV</a>
        </nav>

        <div className="footer-contact">
          <AcademicBar />
          <ThemeToggle className="footer-theme" />
        </div>

        <p className="footer-credit">
          {`\u00a9 ${new Date().getFullYear()} Subham Shome \u00b7 `}
          <a href="https://github.com/subhamshome/portfolio" target="_blank" rel="noopener noreferrer">
            Source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
