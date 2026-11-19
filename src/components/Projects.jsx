import React from 'react';
import ProjectCard from './ProjectCard';
import r2d2eht from '../assets/projects/r2d2eht.png';
// import gnncal from '../assets/projects/gnncal.png';
import '../styles/projects.css';

import masters from '../assets/projects/masters.png';
import opticdisc1 from '../assets/projects/opticdisc1.jpg';
import sdss from '../assets/projects/sdss.png';


const Projects = () => {
    // Current PhD work first, then the strongest earlier projects.
    const projectsData = [
        {
        title: "R2D2 for event-horizon-scale imaging",
        description: "Adapting the R2D2 deep neural network series, a learned imaging approach from radio astronomy, to Event Horizon Telescope data. My work covers training data simulation, multi-GPU training and evaluation of the networks.",
        image: r2d2eht,
        tags: ['PyTorch','Deep Learning','VLBI','Inverse Problems','Slurm / HPC'],
        note: 'Ongoing PhD work. Code and results will be shared once they are public.'
        },
        // {
        // title: "Graph Neural Network based calibration of EHT Data",
        // description: "A graph neural network for calibrating telescope gains in Event Horizon Telescope observations, with stations as nodes and baselines as edges. I am building the full pipeline from data ingestion to calibrated outputs.",
        // image: gnncal,
        // tags: ['PyTorch Geometric','GNNs','PyTorch Lightning','VLBI Calibration','Slurm / HPC'],
        // note: 'Ongoing PhD work. Code and results will be shared once they are public.'
        // },
        {
        title: "Wiener vs Huber Tomographic Reconstruction",
        description: "Compared Wiener and Huber-penalty tomographic reconstruction on simulated data; Huber cut MSE by 72% versus re-gridding.",
        image: masters,
        links: [
            { label: "GitHub", href: "https://github.com/subhamshome/ipcv-masters-thesis" },
            { label: "Google Scholar", href: "https://scholar.google.com/citations?user=uU-S0zMAAAAJ&hl=en&inst=16061989973938494330" },
        ],
        tags: ['MATLAB','Tomography','Inverse Problems','Parameter Tuning'],
        result: 'Huber penalty cut MSE by 72% vs re-gridding (PSNR +5.5 dB)'
        },
        {
        title: "Optic disc segmentation in Drishti-GS dataset",
        description: "A fast, lightweight method for segmenting the optic disc in retinal fundus images, published in the Journal of Neonatal Surgery (2025).",
        image: opticdisc1,
        links: [
            { label: "GitHub", href: "https://github.com/subhamshome/optic-disc-segmentation-drishtigs" },
            { label: "Paper (DOI)", href: "https://doi.org/10.63682/jns.v14i15S.3494" },
        ],
        tags: ['MATLAB','Image Processing','Segmentation'],
        result: 'Dice 93.95% on Drishti-GS (published 2025)'
        },
        {
        title: "Sloan Digital Sky Survey DR14",
        description: "Classified galaxies, stars and quasars from SDSS DR14 with ensemble methods.",
        image: sdss,
        links: [
            { label: "GitHub", href: "https://github.com/subhamshome/sloan-digital-sky-survey-sdss-dr14-ml" },
        ],
        tags: ['Python','scikit-learn','XGBoost'],
        result: '99.4% accuracy with XGBoost, 99.1% with random forest'
        },
    ];

    return (
        <div className='project-cards'>
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      );
}

export default Projects;
