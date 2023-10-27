import React from 'react';
import '../styles/awards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faAward, faTrophy, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Awards = () => {
   return(
      <div className='awards-div-main'>
        <div className='awards-text'>
            <div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faAward} /></div>
               <div>
                  <span className='award-text-header'>Sponsorship - Synapse AI Symposium</span>
                  <br />
                  <span className='award-date'>June 2023</span>
                  <br />
                  Selected among Synapse AI Symposium’s top 50 candidates at Milan, alongside global AI luminaries.
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faTrophy} /></div>
               <div>
                  <span className='award-text-header'>Winner - Cybathlon 2024</span>
                  <br />
                  <span className='award-date'>April 2023</span>
                  <br />
                  Secured Cybathlon 2023-24’s Vision Assistance Challenge victory among 21 global teams at ETH Zurich.
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faAward} /></div>
               <div>
                  <span className='award-text-header'>Erasmus+ Grant</span>
                  <br />
                  <span className='award-date'>January 2023</span>
                  <br />
                  Chosen along with 9 applicants to receive the prestigious Erasmus+ Grant as funding for studies in Europe.
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faUserGraduate} /></div>
               <div>
                  <span className='award-text-header'>IPCV Excellence Scholarship - 100%</span>
                  <br />
                  <span className='award-date'>April 2022</span>
                  <br />
                  Granted full IPCV scholarship as one of only 3 non-EU citizens selected from more than 1000 applicants.
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faMedal} /></div>
               <div>
                  <span className='award-text-header'>Silver Medalist in Academics, BTech</span>
                  <br />
                  <span className='award-date'>October 2019</span>
                  <br />
                  Earned Silver Medal for B.Tech ECE with <span style={{fontWeight: 'bold'}}>9.26/10</span> GPA across 4 years.
               </div>
               </div>
            </div>
        </div>
     </div>
   )
};
   
   export default Awards;