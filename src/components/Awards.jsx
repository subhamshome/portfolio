import React from 'react';
import '../styles/awards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faAward, faTrophy, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

// Newest first. `color` is the accent of the card's icon and top border.
const awards = [
  {
    title: 'James Watt Scholarship',
    date: 'April 2024',
    icon: faUserGraduate,
    color: 'var(--accent)',
    text: 'Selected from among top-tier candidates as the recipient of the prestigious James Watt Scholarship for PhD research at Heriot-Watt University.',
  },
  {
    title: 'Sponsorship - Synapse AI Symposium',
    date: 'June 2023',
    icon: faAward,
    color: 'var(--violet)',
    text: 'Selected among Synapse AI Symposium’s top 50 candidates at Milan, alongside global AI luminaries.',
  },
  {
    title: 'Winner - Cybathlon 2023-24',
    date: 'April 2023',
    icon: faTrophy,
    color: 'var(--highlight)',
    text: 'Secured Cybathlon 2023-24’s Vision Assistance Challenge victory among 21 global teams at ETH Zurich.',
  },
  {
    title: 'Erasmus+ Grant',
    date: 'January 2023',
    icon: faAward,
    color: 'var(--teal)',
    text: 'Chosen along with 9 applicants to receive the prestigious Erasmus+ Grant as funding for studies in Europe.',
  },
  {
    title: 'IPCV Excellence Scholarship - 100%',
    date: 'April 2022',
    icon: faUserGraduate,
    color: 'var(--accent)',
    text: 'Granted full IPCV scholarship as one of only 3 non-EU citizens selected from more than 1000 applicants.',
  },
  {
    title: 'Silver Medalist in Academics, BTech',
    date: 'October 2019',
    icon: faMedal,
    color: 'var(--violet)',
    text: <>Earned Silver Medal for B.Tech ECE with <b>9.26/10</b> GPA across 4 years.</>,
  },
];

const Awards = () => (
  <div className="awards-div-main">
    <div className="awards-grid">
      {awards.map(({ title, date, icon, color, text }) => (
        <article className="award-card" key={title} style={{ '--award-color': color }}>
          <div className="award-icon" aria-hidden="true">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="award-body">
            <h4 className="award-title">{title}</h4>
            <span className="award-date">{date}</span>
            <p className="award-text">{text}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Awards;
