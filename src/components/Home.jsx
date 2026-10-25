import React, { useState } from 'react';
import '../styles/home.css';
import AcademicBar from './AcademicBar';
import introImage from '../assets/introImage.jpg';
import heroVideoMp4 from '../assets/hero.mp4';
import heroVideoWebm from '../assets/hero.webm';
import heroPoster from '../assets/hero-poster.jpg';
import Skills from './Skills';
import Projects from './Projects';
import Timeline from "./Timeline";
import Awards from './Awards';
import Publications from './Publications';
import ResearchCard from './ResearchCard';
import Contact from './Contact';

const resume = `${process.env.PUBLIC_URL}/Subham_Shome_CV.pdf`;

const Home = () => {
        const [showFullIntro, setShowFullIntro] = useState(false);

        const highlights = [
                'PhD, Heriot-Watt, 2024\u201328',
                'Published 2025',
                'Cybathlon 2023-24 winner',
                'IPCV MSc, 4.51/5, 2nd in batch',
                '3 years software dev, TCS',
        ];

        const introSummary = (
                <>
                        <p>I'm a <b>PhD</b> researcher at the <b>Biomedical and Astronomical Signal Processing (BASP) Laboratory, Heriot-Watt University</b> in Edinburgh, working on physics-based image reconstruction for radio astronomy, including imaging black holes. I came to research from three years as a software developer at TCS, then a triple Master's in Image Processing and Computer Vision across Hungary, Spain and France (4.51/5, second in my batch). I like applied maths, inverse problems and fast, GPU-accelerated code.</p>
                        <ul className='intro-highlights' aria-label='Highlights'>
                                {highlights.map((item) => (
                                        <li key={item}>{item}</li>
                                ))}
                        </ul>
                </>
        );

        const introMore = (
                <>
                        <p>My academic journey began with a Bachelor of Technology degree from Amity University in Kolkata, India, in 2019, where I was honored as the Silver Medalist in Electronics and Communication Engineering. My undergraduate thesis was a medical imaging project in image processing and deep learning that earned "<i>extraordinary</i>" remarks, building on a summer internship at the Indian Statistical Institute.</p>
                        <p>At TCS (June 2019 to August 2022) I mainly worked on frontend development with React JS, with some SQL database management and .NET backend work in C#. I then moved into research through the IPCV Master's, studying on a 100% Excellence Scholarship and interning at <b>IMS Bordeaux</b> on "<i>Parameter Learning in Tomography</i>". Outside research, I am fascinated by Astronomy and Cosmology.</p>
                </>
        );

 return (
    <div className='main-div-home'>
        <div id='home'>
                <video className='hero-video' autoPlay muted loop playsInline preload='metadata' poster={heroPoster} aria-hidden='true'>
                        <source src={heroVideoWebm} type='video/webm' />
                        <source src={heroVideoMp4} type='video/mp4' />
                </video>
                <div className='hero'>
                        <h1>Subham SHOME</h1>
                        <p className='hero-pitch'>Physics-guided deep learning for image reconstruction and inverse problems</p>
                        <div className='hero-affiliation'>
                                PhD, BASP Lab, Heriot-Watt University, Edinburgh (expected Feb 2028) &nbsp;|&nbsp; Erasmus Mundus MSc, IPCV
                                <div className='academic-hero'>
                                        <AcademicBar />
                                </div>
                                <a href={resume} target='_blank' rel='noopener noreferrer' className='hero-cv-button'>Download CV</a>
                        </div>
                </div>
        </div>

        <section id='about' className='sections-home about'>
                <h1 className='home-headers'>Introduction</h1>
                <div className='intro-grid'>
                        <div className='intro-img-container'>
                                <img src={introImage} alt='Portrait of Subham Shome' className='intro-image' loading='lazy' />
                        </div>
                        <div className='intro-text-container'>
                                {introSummary}
                                {showFullIntro && introMore}
                                <button
                                        type='button'
                                        className='intro-toggle'
                                        aria-expanded={showFullIntro}
                                        onClick={() => setShowFullIntro(!showFullIntro)}
                                >
                                        {showFullIntro ? 'Show less' : 'Read more'}
                                </button>
                        </div>
                </div>
                <h3>Research Interests</h3>
                <div className='research-card-section'>
                        <ResearchCard title="Image Reconstruction" />
                        <ResearchCard title="Radio Astronomy" />
                        <ResearchCard title="Inverse Problems" />
                        <ResearchCard title="Astroinformatics" />
                        <ResearchCard title="Applied Mathematics" />
                        <ResearchCard title="Tomographic Imaging" />
                        <ResearchCard title="Deep Learning" />
                        <ResearchCard title="Computer Vision" />
                </div>
        </section>

        <section id='skills' className='sections-home skills-main'>
                <h1 className='home-headers'>Technical Expertise</h1>
                <Skills />
        </section>

        <section id='timeline' className='sections-home timeline-main'>
                <h1 className='home-headers'>My journey so far</h1>
                <Timeline />
        </section>

        <section id='projects' className='sections-home projects-section'>
                <h1 className='home-headers'>Research Projects</h1>
                <div className='projects-main'>
                        <Projects />
                </div>
        </section>

        <section id='publications' className='sections-home publications-section'>
                <h1 className='home-headers'>Publications</h1>
                <Publications />
        </section>

        <section id='awards' className='sections-home awards-main'>
                <h1 className='home-headers'>Honors and Awards</h1>
                <Awards />
        </section>

        <section id='contact' className='sections-home contact-main'>
                <h1 className='home-headers'>Contact me</h1>
                <Contact />
        </section>
    </div>
 );
};

export default Home;
