import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
// import { faMedium } from '@fortawesome/free-brands-svg-icons'; // BLOG-LINK: for the blog item below

const resume = `${process.env.PUBLIC_URL}/Subham_Shome_CV.pdf`;

const links = [
   { icon: faEnvelope, label: 'subhamshome.dev@gmail.com', href: 'mailto:subhamshome.dev@gmail.com' },
   { icon: faLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/subhamshome' },
   { icon: faGithub, label: 'GitHub', href: 'https://github.com/subhamshome' },
   { icon: faGoogleScholar, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=uU-S0zMAAAAJ&hl=en&inst=16061989973938494330' },
   { icon: faFilePdf, label: 'CV (PDF)', href: resume },
   // BLOG-LINK: uncomment to bring the blog back (also uncomment the faMedium import above)
   // { icon: faMedium, label: 'Personal Blog', href: 'https://subhamshome.medium.com' },
];

const topics = [
   'Radio-interferometric imaging',
   'VLBI and black hole imaging',
   'Inverse problems',
   'Physics-guided deep learning',
   'Multi-GPU training on HPC',
   'Teaching deep learning',
];

const Contact = () => (
   <div className='contact-div-main'>
      <p className='contact-lead'>Open to conversations about research, collaboration and interesting problems. The easiest way to reach me is by email.</p>
      <div className='contact-grid'>
      <div className='contact-text'>
         <div className='contact-item'>
            <FontAwesomeIcon icon={faLocationDot} /><p>Edinburgh, Scotland, UK</p>
         </div>
         {links.map(({ icon, label, href }) => {
            const external = href.startsWith('http');
            return (
               <div className='contact-item' key={label}>
                  <FontAwesomeIcon icon={icon} />
                  <a href={href} className='contact-links' {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><p>{label}</p></a>
               </div>
            );
         })}
      </div>
      <aside className='contact-aside' aria-label='Currently and topics'>
         <h4>Currently</h4>
         <p>PhD researcher at the BASP Laboratory, Heriot-Watt University, and a collaborator in the Event Horizon Telescope Collaboration.</p>
         <h4>Happy to talk about</h4>
         <ul className='contact-topics'>
            {topics.map((t) => <li key={t}>{t}</li>)}
         </ul>
      </aside>
      </div>
   </div>
);

export default Contact;
