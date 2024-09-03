import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

   const address = [<p>Edinburgh, Scotland, UK</p>];
   
   const email = [<a href="mailto:ss3038@hw.ac.uk" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>ss3038@hw.ac.uk</p>
   </a>];
   
   const blog = [<a href="https://subhamshome.medium.com" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>Personal Blog</p>
   </a>];

   const facebook = [<a href="https://facebook.com/thesubhamshome" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>Facebook</p>
   </a>];

   const instagram = [<a href="https://instagram.com/thesubhamshome" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>Instagram</p>
   </a>];

   const linkedin = [<a href="https://linkedin.com/in/subhamshome" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>LinkedIn</p>
   </a>];

   return(
      <div className='contact-div-main'>
            <div className='contact-grid'>
               <div className='contact-text'>
                  <div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLocationDot} />{address}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faEnvelope} />{email}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faMedium} />{blog}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLinkedin} />{linkedin}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faFacebook} />{facebook}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faInstagram} />{instagram}
                     </div>
                  </div>
               </div>
               <div className='contact-grid-2'>
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.299016052954!2d-3.3232209232437424!3d55.909515473142676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c46af06eff31%3A0xea463bd59d93b226!2sHeriot-Watt%20University%20Edinburgh%20Campus!5e0!3m2!1sen!2sin!4v1725376062295!5m2!1sen!2sin"
                  width="600" 
                  height="450" 
                  className="map-contact"
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Google Maps HWU"
                  referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
               </div>
            </div>
     </div>
   )
};
   
export default Contact;