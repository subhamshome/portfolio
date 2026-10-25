import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

   return(
      <div className='contact-div-main'>
            <div className='contact-grid'>
               <div className='contact-text'>
                  <div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLocationDot} /><p>Edinburgh, Scotland, UK</p>
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:ss3038@hw.ac.uk" className="contact-links"><p>ss3038@hw.ac.uk</p></a>
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faMedium} /><a href="https://subhamshome.medium.com" target="_blank" rel="noopener noreferrer" className="contact-links"><p>Personal Blog</p></a>
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLinkedin} /><a href="https://linkedin.com/in/subhamshome" target="_blank" rel="noopener noreferrer" className="contact-links"><p>LinkedIn</p></a>
                     </div>
                  </div>
               </div>
               <div className='contact-grid-2'>
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.299016052954!2d-3.3232209232437424!3d55.909515473142676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c46af06eff31%3A0xea463bd59d93b226!2sHeriot-Watt%20University%20Edinburgh%20Campus!5e0!3m2!1sen!2sin!4v1725376062295!5m2!1sen!2sin"
                                    className="map-contact"
                  allowFullScreen 
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