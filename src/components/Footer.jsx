import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Get in touch</h2>
        {/* <p className="footer-lead">
          Open to conversations about research, collaboration and interesting problems. The easiest way to reach me is by email.
        </p> */}
        <p className="footer-address">
          <a href="mailto:subhamshome.dev@gmail.com">subhamshome.dev@gmail.com</a>
          {/* <span aria-hidden="true"> · </span> */}
          <br />
          Edinburgh, Scotland, UK
        </p>

        <p className="footer-social">
          <a href="https://github.com/subhamshome" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/subhamshome" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>

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
