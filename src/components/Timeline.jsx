import React, { useState } from 'react';
import amity from '../assets/timeline/amity_logo.png';
import isi from '../assets/timeline/isi_logo.png';
import tcs from '../assets/timeline/tcs_logo.jpg';
import ppcu from '../assets/timeline/ppcu_logo.png';
import uam from '../assets/timeline/uam_logo.jpg';
import ubx from '../assets/timeline/ubx_logo.png';
import ims from '../assets/timeline/ims_logo.png';
import hwu from '../assets/timeline/hwu_logo.jpg';
// Single-colour versions (background removed) for the journey strip.
import amityMono from '../assets/timeline/amity_mono.png';
import ppcuMono from '../assets/timeline/ppcu_mono.png';
import uamMono from '../assets/timeline/uam_mono.png';
import ubxMono from '../assets/timeline/ubx_mono.png';
import tcsMono from '../assets/timeline/tcs_mono.png';
import hwuMono from '../assets/timeline/hwu_mono.png';
import '../styles/timeline.css';

// Where the journey physically went (oldest to newest).
const stops = [
  { place: 'Kolkata, India', what: 'B.Tech, Amity', years: '2015 – 2019', logo: amityMono },
  { place: 'Kolkata, India', what: 'Software Developer, TCS', years: '2019 – 2022', logo: tcsMono },
  { place: 'Budapest, Hungary', what: 'MS, PPCU', years: '2022', logo: ppcuMono },
  { place: 'Madrid, Spain', what: 'MS, UAM', years: '2023', logo: uamMono },
  { place: 'Bordeaux, France', what: 'MS + thesis, UBx / IMS', years: '2023 – 2024', logo: ubxMono },
  { place: 'Edinburgh, UK', what: 'PhD, Heriot-Watt', years: '2024 – now', logo: hwuMono },
];

// Newest first.
// Degree phases: consecutive entries in the same phase are drawn inside one coloured frame.
// An entry with no `phase` sits outside any frame.
const phases = {
  phd: { label: 'PhD', color: 'var(--accent)', text: 'var(--accent-t)' },
  masters: { label: 'Master’s', color: 'var(--violet)', text: 'var(--violet-t)' },
  bachelors: { label: 'Bachelor’s', color: 'var(--teal)', text: 'var(--teal-t)' },
  industry: { label: 'Industry', color: 'var(--amber)', text: 'var(--amber-t)' },
};

// Newest first within each section.
const sections = [
  {
    id: 'experience',
    label: 'Experience',
    intro: 'Research and teaching at Heriot-Watt, and three years of software engineering at TCS.',
    entries: [
      {
        title: 'PhD Researcher and EHTC Collaborator at HWU',
        phase: 'phd',
        subtitle: 'Collaborator in the Event Horizon Telescope Collaboration (EHTC), at the BASP Laboratory, Heriot-Watt University',
        detail: 'Supervised by Prof. Yves Wiaux and Prof. Kazunori Akiyama. Developing deep learning guided by the physical measurement model for radio-interferometric imaging and calibration of EHT data, with attention and multi-scale networks and graph neural networks, trained with multi-GPU DDP on Slurm HPC clusters',
        date: 'Sep 2024 – Present',
        place: 'Edinburgh, UK',
        logo: hwu,
      },
      {
        title: 'Teaching Assistant at HWU',
        phase: 'phd',
        subtitle: 'Teaching Assistant for Deep Learning and Optimization at Heriot-Watt University',
        detail: 'Supporting labs and tutorials and marking coursework for 15–20 students per year over three years',
        date: 'Sep 2025 – Present',
        place: 'Edinburgh, UK',
        logo: hwu,
      },
      {
        title: 'Software Developer at TCS',
        phase: 'industry',
        subtitle: 'Started my career at TCS as an Assistant Systems Engineer trainee',
        detail: 'Automated 20% of Walmart’s monitoring system (30%+ weekly efficiency gain) and cut ASDA.com bugs by 15%, through full-stack development with MERN stack and SQL databases.',
        date: 'Jun 2019 – Aug 2022',
        place: 'Kolkata, India',
        logo: tcs,
      },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    intro: 'From Bachelors till PhD, across India, Hungary, Spain, France and the UK.',
    entries: [
      {
        title: 'Doctor of Philosophy (PhD) at HWU',
        phase: 'phd',
        subtitle: 'PhD in Computational Imaging (Radio Astronomy) at the BASP Laboratory, Heriot-Watt University, UK',
        detail: 'Physics-guided deep learning for radio-interferometric imaging and calibration, for VLBI black hole imaging',
        date: 'Sep 2024 – Feb 2028 (expected)', 
        place: 'Edinburgh, UK',
        logo: hwu,
      },
      {
        title: 'Master of Science 3 (Informatics) at UBx',
        phase: 'masters',
        subtitle: "Commenced my third semester of the Master's program at the University of Bordeaux, France",
        detail: 'Delved deeper into applied mathematical approaches to AI and Computer Vision',
        date: 'Sep 2023',
        place: 'Bordeaux, France',
        logo: ubx,
      },
      {
        title: 'Master of Science 2 (Computer Vision) at UAM',
        phase: 'masters',
        subtitle: "Began my second semester of the Master's program at the Autonomous University of Madrid, Spain",
        detail: 'Explored various applications and theories behind deep vision models',
        date: 'Feb 2023',
        place: 'Madrid, Spain',
        logo: uam,
      },
      {
        title: 'Master of Science 1 (Computer Science) at PPCU',
        phase: 'masters',
        subtitle: "Embarked on my first semester of the Master's program at Pazmany Peter Catholic University, Budapest, Hungary",
        detail: "First of three semesters across Hungary, Spain and France in the IPCV Master's programme",
        date: 'Sep 2022',
        place: 'Budapest, Hungary',
        logo: ppcu,
      },
      {
        title: 'Bachelor of Technology at Amity',
        phase: 'bachelors',
        subtitle: 'Commenced my undergraduate (B.Tech) studies in Electronics and Communication Engineering at Amity University, Kolkata',
        detail: 'Got introduced to image processing and deep learning through my undergraduate thesis, which earned "extraordinary" remarks, and a summer internship at the Indian Statistical Institute',
        date: 'Aug 2015 – 2019',
        place: 'Kolkata, India',
        logo: amity,
      },
    ],
  },
  {
    id: 'internships',
    label: 'Internships',
    intro: 'My master’s thesis in Bordeaux and two internships at ISI Kolkata.',
    entries: [
      {
        title: 'Master’s Thesis at IMS Bordeaux',
        phase: 'masters',
        subtitle: 'Master’s thesis researcher at the IMS Laboratory in Bordeaux, France, supervised by Dr. Jean-Francois Giovannelli',
        detail: 'Implemented Wiener-filter and Huber-penalty reconstruction in MATLAB on tomographic data; Huber cut MSE by 72% versus re-gridding and raised PSNR by 5.5 dB',
        date: 'Jan 2024 – Jul 2024',
        place: 'Bordeaux, France',
        logo: ims,
      },
      {
        title: 'Deep Learning Winter Internship at ISI',
        phase: 'masters',
        subtitle: 'Initiated my second internship (online) at the Indian Statistical Institute, Kolkata',
        detail: 'Took the course "Deep Learning: Perceptrons to Diffusion Models" and gained insights into various models and the mathematics underpinning deep learning',
        date: 'Jan 2023 – Mar 2023',
        place: 'Kolkata, India (online)',
        logo: isi,
      },
      {
        title: 'First Glimpse of Computer Vision at ISI',
        phase: 'bachelors',
        subtitle: 'Completed my first internship at the Indian Statistical Institute, Kolkata',
        detail: 'Ventured into the realms of computer vision, image processing, and machine learning, building an image-classification system that reached 86% accuracy with classical ML and CNNs',
        date: 'May 2018 – Jul 2018',
        place: 'Kolkata, India',
        logo: isi,
      },
    ],
  },
];

// Title, dates and subtitle are always visible; the detail (outcomes, supervisors) opens with the + button.
const TimelineItem = ({ entry }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={`tl-item ${open ? 'open' : ''}`}>
      <img className="tl-logo" src={entry.logo} alt="" loading="lazy" />
      <div className="tl-card">
        <div className="tl-head">
          <div>
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
            <span className="tl-toggle-icon" aria-hidden="true">+</span>
          </button>
        </div>
        <p className="tl-subtitle">{entry.subtitle}</p>
        <div className="tl-detail" aria-hidden={!open}>
          <p>{entry.detail}</p>
        </div>
      </div>
    </li>
  );
};

// Split a section's entries into runs of the same phase.
const groupByPhase = (entries) =>
  entries.reduce((groups, entry) => {
    const last = groups[groups.length - 1];
    if (last && last.phase === entry.phase) last.entries.push(entry);
    else groups.push({ phase: entry.phase, entries: [entry] });
    return groups;
  }, []);

const Timeline = () => (
  <div className="journey">
    <ol className="journey-strip" aria-label="Places I have studied and worked, in order">
      {stops.map((stop) => (
        <li className="journey-stop" key={`${stop.place}-${stop.what}`}>
          <div className="journey-mark">
            <img src={stop.logo} alt="" loading="lazy" />
            <span className="journey-arrow" aria-hidden="true" />
          </div>
          <strong>{stop.place}</strong>
          <span>{stop.what}</span>
          <em>{stop.years}</em>
        </li>
      ))}
    </ol>

    <ul className="tl-legend" aria-label="Legend">
      {Object.values(phases).map(({ label, color }) => (
        <li key={label} style={{ '--track-color': color }}>
          <span className="tl-dot" /> {label}
        </li>
      ))}
    </ul>

    <div className="tl-columns">
      {sections.map(({ id, label, intro, entries }) => (
        <section className="tl-section" key={id} aria-labelledby={`tl-${id}`}>
          <div className="tl-section-head">
            <h3 id={`tl-${id}`} className="tl-section-title">{label}</h3>
            <p className="tl-section-intro">{intro}</p>
          </div>
          {groupByPhase(entries).map((group) => {
            const phase = phases[group.phase];
            const items = group.entries.map((entry) => <TimelineItem entry={entry} key={entry.title} />);
            return phase ? (
              <div
                className="tl-phase"
                key={group.entries[0].title}
                style={{ '--track-color': phase.color, '--track-text': phase.text }}
              >
                <span className="tl-phase-label">{phase.label}</span>
                <ol className="tl-list">{items}</ol>
              </div>
            ) : (
              <ol className="tl-list tl-list-plain" key={group.entries[0].title}>{items}</ol>
            );
          })}
        </section>
      ))}
    </div>
  </div>
);

export default Timeline;
