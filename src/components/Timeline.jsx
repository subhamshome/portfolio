import React, { useState } from 'react';
import amity from '../assets/timeline/amity_logo.png';
import isi from '../assets/timeline/isi_logo.png';
import ipcv from '../assets/timeline/ipcv_logo.jpeg';
import tcs from '../assets/timeline/tcs_logo.jpg';
import ppcu from '../assets/timeline/ppcu_logo.png';
import uam from '../assets/timeline/uam_logo.jpg';
import ubx from '../assets/timeline/ubx_logo.png';
import ims from '../assets/timeline/ims_logo.png';
import hwu from '../assets/timeline/hwu_logo.jpg';
import '../styles/timeline.css';

const tracks = {
  research: { label: 'Research', color: 'var(--accent)', text: 'var(--accent-t)' },
  education: { label: 'Education', color: 'var(--violet)', text: 'var(--violet-t)' },
  industry: { label: 'Industry', color: 'var(--teal)', text: 'var(--teal-t)' },
};

// Where the journey physically went (oldest to newest).
const stops = [
  { place: 'Kolkata, India', what: 'B.Tech, Amity · TCS', years: '2015 – 2022', logo: amity },
  { place: 'Budapest, Hungary', what: 'MSc, PPCU', years: '2022', logo: ppcu },
  { place: 'Madrid, Spain', what: 'MSc, UAM', years: '2023', logo: uam },
  { place: 'Bordeaux, France', what: 'MSc + thesis, UBx / IMS', years: '2023 – 2024', logo: ubx },
  { place: 'Edinburgh, UK', what: 'PhD, Heriot-Watt', years: '2024 – now', logo: hwu },
];

// Newest first.
const entries = [
  {
    track: 'research',
    title: 'Doctor of Philosophy (PhD) at HWU',
    subtitle: 'Started my research journey at BASP lab in Heriot-Watt University, UK',
    detail: 'Working on physically guided deep radio-interferometric image reconstruction with deep learning',
    date: 'Sep 2024 – Present',
    place: 'Edinburgh, UK',
    logo: hwu,
  },
  {
    track: 'research',
    title: 'Master of Science Part 4 at IMS Bordeaux',
    subtitle: 'Commenced my master thesis at the IMS Laboratory in Bordeaux, France',
    detail: 'Worked on parameter tuning in tomography to develop an optimized and guaranteed algorithm',
    date: 'Jan 2024',
    place: 'Bordeaux, France',
    logo: ims,
  },
  {
    track: 'education',
    title: 'Master of Science Part 3 at UBx',
    subtitle: "Commenced my third semester of the Master's program at the University of Bordeaux, France",
    detail: 'Delving deeper into applied mathematical approaches to AI and Computer Vision',
    date: 'Sep 2023',
    place: 'Bordeaux, France',
    logo: ubx,
  },
  {
    track: 'education',
    title: 'Master of Science Part 2 at UAM',
    subtitle: "Began my second semester of the Master's program at the Autonomous University of Madrid, Spain",
    detail: 'Explored various applications and theories behind deep vision models, which greatly piqued my interest',
    date: 'Feb 2023',
    place: 'Madrid, Spain',
    logo: uam,
  },
  {
    track: 'research',
    title: 'Deep Learning Winter Internship at ISI',
    subtitle: 'Initiated my second internship (online) at the Indian Statistical Institute, Kolkata',
    detail: 'Gained insights into various models and the mathematics underpinning deep learning',
    date: 'Jan 2023',
    place: 'Kolkata, India (online)',
    logo: isi,
  },
  {
    track: 'education',
    title: 'Master of Science Part 1 at PPCU',
    subtitle: "Embarked on my first semester of the Master's program at Pazmany Peter Catholic University, Budapest, Hungary",
    detail: "First of three semesters across Hungary, Spain and France in the IPCV Master's programme",
    date: 'Sep 2022',
    place: 'Budapest, Hungary',
    logo: ppcu,
  },
  {
    track: 'education',
    title: 'Excellence Scholarship at IPCV',
    subtitle: "Awarded a 100% scholarship for pursuing a Master's in Image Processing and Computer Vision",
    detail: 'Left my software engineering role at TCS to pursue the programme full-time',
    date: 'Apr 2022',
    place: 'Erasmus Mundus IPCV',
    logo: ipcv,
  },
  {
    track: 'industry',
    title: 'Software Developer at TCS',
    subtitle: 'Started my career at TCS as an Assistant Systems Engineer trainee',
    detail: 'Frontend development with React JS, plus SQL databases and some .NET (C#) backend work',
    date: 'Jun 2019 – Aug 2022',
    place: 'Kolkata, India',
    logo: tcs,
  },
  {
    track: 'research',
    title: 'First Glimpse of Computer Vision at ISI',
    subtitle: 'Completed my first internship at the Indian Statistical Institute, Kolkata',
    detail: 'Ventured into the realms of computer vision, image processing, and machine learning',
    date: 'May 2018',
    place: 'Kolkata, India',
    logo: isi,
  },
  {
    track: 'education',
    title: 'Undergraduate Journey Begins at Amity',
    subtitle: 'Commenced my undergraduate (B.Tech) studies in Electronics and Communication Engineering at Amity University, Kolkata',
    detail: 'Initially aspired to be an electronics engineer, working with integrated circuits (ICs)',
    date: 'Aug 2015 – 2019',
    place: 'Kolkata, India',
    logo: amity,
  },
];

const TimelineItem = ({ entry }) => {
  const [open, setOpen] = useState(false);
  const track = tracks[entry.track];
  return (
    <li className={`tl-item ${open ? 'open' : ''}`} style={{ '--track-color': track.color, '--track-text': track.text }}>
      <img className="tl-logo" src={entry.logo} alt="" loading="lazy" />
      <div className="tl-card">
        <div className="tl-head">
          <div>
            <span className="tl-badge">{track.label}</span>
            <h4 className="tl-title">{entry.title}</h4>
            <p className="tl-meta">{entry.date} · {entry.place}</p>
          </div>
          <button
            type="button"
            className="tl-toggle"
            aria-expanded={open}
            aria-label={`${open ? 'Hide' : 'Show'} details: ${entry.title}`}
            onClick={() => setOpen(!open)}
          >
            {open ? '−' : '+'}
          </button>
        </div>
        <div className="tl-more">
          <p className="tl-subtitle">{entry.subtitle}</p>
          <p className="tl-detail">{entry.detail}</p>
        </div>
      </div>
    </li>
  );
};

const Timeline = () => (
  <div className="journey">
    <ol className="journey-strip" aria-label="Places I have studied and worked">
      {stops.map((stop) => (
        <li className="journey-stop" key={stop.place}>
          <img src={stop.logo} alt="" loading="lazy" />
          <strong>{stop.place}</strong>
          <span>{stop.what}</span>
          <em>{stop.years}</em>
        </li>
      ))}
    </ol>

    <ul className="tl-legend" aria-label="Legend">
      {Object.values(tracks).map(({ label, color }) => (
        <li key={label} style={{ '--track-color': color }}>
          <span className="tl-dot" /> {label}
        </li>
      ))}
    </ul>

    <ol className="tl-list">
      {entries.map((entry) => (
        <TimelineItem entry={entry} key={entry.title} />
      ))}
    </ol>
  </div>
);

export default Timeline;
