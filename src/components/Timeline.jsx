import React from 'react';
import { Chrono } from 'react-chrono';
import amity from '../assets/timeline/amity_logo.png';
import isi from '../assets/timeline/isi_logo.png';
import ipcv from '../assets/timeline/ipcv_logo.jpeg';
import tcs from '../assets/timeline/tcs_logo.jpg';
import ppcu from '../assets/timeline/ppcu_logo.png';
import uam from '../assets/timeline/uam_logo.jpg';
import ubx from '../assets/timeline/ubx_logo.png';
import ims from '../assets/timeline/ims_logo.png';
import '../styles/timeline.css';


// const amity = 'https://drive.google.com/uc?export=view&id=1z8KwaXKcrUNNpGfeSXeDK1GQEFS3HSfU';
// const ipcv = 'https://drive.google.com/uc?export=view&id=1OAJYVBlH_Ti1R_G641cI_buVGwrqZBQn';
// const isi = 'https://drive.google.com/uc?export=view&id=1x6KFFJJ9SEjzF3zJ6n3S_hzUTyF-aXLc';
// const ppcu = 'https://drive.google.com/uc?export=view&id=1sStsE92BC9aeyVCiDgLf0jyKPsWu4vGP';
// const tcs = 'https://drive.google.com/uc?export=view&id=1avYjRxyqQG9QMAv00RSMX0tOx0XLpB_r';
// const uam = 'https://drive.google.com/uc?export=view&id=1QCspz7ZCOfhTqn7jyuAOaU3ZKMnXuvzx';
// const ubx = 'https://drive.google.com/uc?export=view&id=1JJUt8H1itbVm_v_box83CzmzNYBY6pg7';

const entries = [
  {
    cardTitle: "Master of Science Part 4 at IMS Bordeaux",
    cardSubtitle: "Commenced my master thesis at the IMS Laboratory in Bordeaux, France",
    cardDetailedText: "Working on parameter tuning in tomography to develop an optimized and guaranteed algorithm",
    date: "January 2024"
  },
  {
    cardTitle: "Master of Science Part 3 at UBx",
    cardSubtitle: "Commenced my third semester of the Master's program at the University of Bordeaux, France",
    cardDetailedText: "Delving deeper into applied mathematical approaches to AI and Computer Vision",
    date: "September 2023"
  },
  {
    cardTitle: "Master of Science Part 2 at UAM",
    cardSubtitle: "Began my second semester of the Master's program at the Autonomous University of Madrid, Spain",
    cardDetailedText: "Explored various applications and theories behind deep vision models, which greatly piqued my interest",
    date: "February 2023"
  },
  {
    cardTitle: "Deep Learning Winter Internship at ISI",
    cardSubtitle: "Initiated my second internship (online) at the Indian Statistical Institute, Kolkata",
    cardDetailedText: "Gained insights into various models and the mathematics underpinning deep learning",
    date: "January 2023"
  },
  {
    cardTitle: "Master of Science Part 1 at PPCU",
    cardSubtitle: "Embarked on my first semester of the Master's program at Pazmany Peter Catholic University, Budapest, Hungary",
    cardDetailedText: "Realized my preparedness for this journey long in advance",
    date: "September 2022"
  },
  {
    cardTitle: "Excellence Scholarship at IPCV",
    cardSubtitle: "Awarded a 100% scholarship for pursuing a Master's in Image Processing and Computer Vision",
    cardDetailedText: "Additionally, I submitted my resignation letter",
    date: "April 2022"
  },
  {
    cardTitle: "Joined TCS - My First Job",
    cardSubtitle: "Commenced my career at TCS as an Assistant Systems Engineer trainee",
    cardDetailedText: "Engaged in various software development projects for a span of 3 years",
    date: "June 2019"
  },
  {
    cardTitle: "First Glimpse of Computer Vision at ISI",
    cardSubtitle: "Completed my first internship at the Indian Statistical Institute, Kolkata",
    cardDetailedText: "Ventured into the realms of computer vision, image processing, and machine learning",
    date: "May 2018"
  },
  {
    cardTitle: "Undergraduate Journey Begins at Amity",
    cardSubtitle: "Commenced my undergraduate (B.Tech) studies in Electronics and Communication Engineering at Amity University, Kolkata",
    cardDetailedText: "Initially aspired to be an electronics engineer, working with integrated circuits (ICs)",
    date: "August 2015"
  }
];


const Timeline = () => {
  return (
    <Chrono items={entries} 
    mode="VERTICAL_ALTERNATING" 
    slideShow={true} 
    hideControls={true} 
    slideItemDuration={4500}
    slideShowType="slide_from_sides" 
    // disableClickOnCircle={true} 
    allowDynamicUpdate={true}
    activeItemIndex={null}
    titleDateFormat='MMM YYYY'
    scrollable
    // timelinePointShape={null}
    >
      <div className="chrono-icons">
        <img src={ims} alt='IMS' />
        <img src={ubx} alt='UBx' />
        <img src={uam} alt='UAM' />
        <img src={isi} alt='ISI' />
        <img src={ppcu} alt='PPCU' />
        <img src={ipcv} alt='IPCV' />
        <img src={tcs} alt='TCS' />
        <img src={isi} alt='ISI' />
        <img src={amity} alt='AMITY' />
      </div>
    </Chrono>
  );
};

export default Timeline;
