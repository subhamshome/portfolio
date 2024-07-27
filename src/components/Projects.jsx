import React, { useState }  from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

import deepfake from '../assets/projects/deepfake.png';
import hubble from '../assets/projects/hubble.png';
import masters from '../assets/projects/masters.png';
import murmur from '../assets/projects/murmur.png';
import mwd from '../assets/projects/mwd.png';
import opticdisc1 from '../assets/projects/opticdisc1.png';
import scania from '../assets/projects/scania.png';
import sdss from '../assets/projects/sdss.png';
import signature from '../assets/projects/signature.png';


const Projects = () => {
    const projectsData = [
        {
        title: "Parameter Learning in Tomography",
        description: "This is my masters thesis project on tomographic imaging and parameter learning using the famous Shepp-Logan phantom.",
        image: masters,
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/subhamshome/ipcv-masters-thesis"
        },
        {
        title: "Optic disc segmentation in Drishti-GS dataset",
        description: "This project deals with the segmentation of optic disc from retinal fundus images from the famous Drishti-GS dataset",
        image: opticdisc1,
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/subhamshome/optic-disc-segmentation-drishtigs"
        },
        {
        title: "Sloan Digital Sky Survey DR14",
        description: "3-class classification of cosmological objects in the famous SDSS dataset, version DR14",
        image: sdss, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/subhamshome/sloan-digital-sky-survey-sdss-dr14-ml"
        },
        {
        title: "Deepfake Detection",
        description: "Detecting deep fake images using various ensemble classifiers",
        image: deepfake, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/subhamshome/deepfake-detection"
        },
        {
        title: "ESA Hubble Dataset Creator",
        description: "Creating the publicly available dataset from images taken by the Hubble Space telescope, by scraping from ESA's website",
        image: hubble, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/subhamshome/esa-hubble-dataset-creator"
        },
        {
        title: "Signature Recognition",
        description: "Recognising signatures and measuring the truth behind every one of them using feature analysis",
        image: signature, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/subhamshome/signature-recognition"
        },
        {
        title: "Heart Murmur Classification",
        description: "Predicting a heart to be normal or abnormal based on the murmur signal classifications using simple ML algorithms",
        image: murmur, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/subhamshome/murmur-classification"
        },
        {
        title: "Scania Trucks - Air Pressure Failure Prediction",
        description: "A classical machine learning algorithm based binary classification on the famous Scania APS dataset",
        image: scania, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/subhamshome/scania-aps-fail-pred-ml"
        },
        {
        title: "Multiclass Weather Classification",
        description: "Comparative analysis of ML and DL algorithms on the popular Multi-class Weather Dataset (MWD) for multi-class weather classification",
        image: mwd, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/subhamshome/multiclass-classification-weather-mwd"
        },        
    ];
      
    const [visibleProjects, setVisibleProjects] = useState(3);

    // const showMoreProjects = () => {
    //     setVisibleProjects(visibleProjects + 3);
    // };

    const showLessProjects = () => {
        setVisibleProjects(3);
    };

    const showAllProjects = () => {
        setVisibleProjects(projectsData.length);
      };


    return (
        <div>
          <div className='project-cards'>
            {projectsData.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                buttonLabel={project.buttonLabel}
                buttonLink={project.buttonLink}
              />
            ))}
          </div>
          <div className='view-buttons'>
            {visibleProjects < projectsData.length ? (
              <button onClick={showAllProjects} className="view-more-button">
                Show All {projectsData.length} projects
              </button>
            ) : (
              <button onClick={showLessProjects} className="view-more-button">
                Show Less
              </button>
            )}
          </div>
        </div>
      );
}

export default Projects;