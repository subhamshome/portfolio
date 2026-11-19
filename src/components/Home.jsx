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

const resume = `${process.env.PUBLIC_URL}/Subham_Shome_CV.pdf`;

const Home = () => {
        const [showFullIntro, setShowFullIntro] = useState(false);

        const introSummary = (
                <>
                        <p>I’m a PhD researcher at the <b>Biomedical and Astronomical Signal Processing (<a href="https://basp.site.hw.ac.uk/" target="_blank" rel="noopener noreferrer">BASP</a>) Laboratory at Heriot-Watt University</b>, supervised by <a href="https://researchportal.hw.ac.uk/en/persons/yves-wiaux/" target="_blank" rel="noopener noreferrer">Prof. Yves Wiaux</a> and <a href="https://researchportal.hw.ac.uk/en/persons/kazunori-akiyama/" target="_blank" rel="noopener noreferrer">Prof. Kazunori Akiyama</a>, and a collaborator in the <b>Event Horizon Telescope Collaboration (<a href="https://eventhorizontelescope.org/" target="_blank" rel="noopener noreferrer">EHTC</a>)</b>. I work on inverse problems and computational imaging, turning sparse, noisy measurements into images, with black hole imaging as my main application.</p>
                </>
        );

        const introMore = (
                <>
                        <p>I combine physical models of how the data are measured with deep networks, including reconstruction and calibration models and graph neural networks, trained on multi-GPU HPC clusters, so the reconstructions can be trusted as well as look convincing.</p>
                        <p>Before research I worked for three years as a software developer at TCS, then completed an <b>Erasmus Mundus MS in Image Processing and Computer Vision (<a href="https://ipcv.eu/" target="_blank" rel="noopener noreferrer">IPCVai</a>)</b> across Hungary, Spain and France. I also teach deep learning as a Teaching Assistant at Heriot-Watt.</p>
                </>
        );

 return (
    <div className='main-div-home'>
        <div id='home'>
                <video className='hero-video' autoPlay muted loop playsInline preload='metadata' poster={heroPoster} aria-hidden='true'>
                        <source src={heroVideoWebm} type='video/webm' />
                        <source src={heroVideoMp4} type='video/mp4' />
                </video>
                <div className='hero-ring' aria-hidden='true' />
                <div className='hero'>
                        <h1>Subham SHOME</h1>
                        <p className='hero-pitch'>Physics-guided deep learning for VLBI image reconstruction and inverse problems</p>
                        <div className='hero-affiliation'>
                                <span className='hero-affil-line'>PhD, BASP Lab, Heriot-Watt University, Edinburgh (expected Feb 2028)</span>
                                <span className='hero-affil-line'>Event Horizon Telescope (EHT) Collaborator</span>
                                <span className='hero-affil-line'>Erasmus Mundus MS, IPCV</span>
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
                        <ResearchCard title="Computational Imaging" />
                        <ResearchCard title="Inverse Problems" />
                        <ResearchCard title="Physics-Guided Deep Learning" />
                        <ResearchCard title="Scientific Machine Learning" />
                        <ResearchCard title="Radio Interferometry (VLBI / EHT)" />
                        <ResearchCard title="Black Hole Imaging" />
                        <ResearchCard title="Uncertainty Quantification" />
                        <ResearchCard title="Graph Neural Networks" />
                        <ResearchCard title="Signal Processing" />
                        <ResearchCard title="Large-Scale Model Training" />
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

        <section id='publications' className='sections-home publications-section'>
                <h1 className='home-headers'>Publications</h1>
                <Publications />
        </section>

        <section id='projects' className='sections-home projects-section'>
                <h1 className='home-headers'>Research Projects</h1>
                <div className='projects-main'>
                        <Projects />
                </div>
        </section>

        <section id='awards' className='sections-home awards-main'>
                <h1 className='home-headers'>Honors and Awards</h1>
                <Awards />
        </section>

    </div>
 );
};

export default Home;
