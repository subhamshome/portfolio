import React from 'react';
import '../styles/home.css';
import AcademicBar from './AcademicBar';
import introImage from '../assets/introImage.png';
import Skills from './Skills';
import Projects from './Projects';
import Timeline from "./Timeline";
import Awards from './Awards';
import ResearchCard from './ResearchCard';
import Contact from './Contact';

const Home = () => {

        const heroText = [
                <div>
                        Image Processing and Computer Vision (M.S.) Graduate &nbsp;|&nbsp; Ex-TCS
                        <div className='academic-hero'>
                                <AcademicBar className='academic-hero' />
                        </div>                        
                </div>
        ];

        

        const introText = [
                <p style={{marginLeft: '10%', marginRight: 0}}>
                        I recently completed my Triple-Masters degree in Image Processing and Computer Vision (<b>IPCV MSc</b>) at universities 
                        in Hungary, Spain, and France, graduating with a 4.51/5 GPA and placing second in my batch. I was fortunate to study 
                        with a 100% IPCV Excellence Scholarship. During my final semester, I interned at <b>IMS Bordeaux</b>, working on 
                        "<i>Parameter Learning in Tomography.</i>"
                        <br /><br />
                        My academic journey began with a Bachelor of Technology degree from Amity University in Kolkata, India, in 2019, where 
                        I was honored as the Silver Medalist in Electronics and Communication Engineering. My undergraduate thesis focused on 
                        a medical imaging project in the realms of image processing and deep learning, earning "<i>extraordinary</i>" remarks. This 
                        project built upon work I undertook during a summer internship at the prestigious Indian Statistical Institute.
                        <br /><br />
                        I have been recognized for my work with numerous awards and honors, including sponsorship of the Synapse AI Symposium, 
                        winning the Cybathlon 2024 Vision Assistance Challenge, and receiving the Erasmus+ Grant.
                        <br /><br />
                        Before embarking on my current academic journey, I worked for three years as a Software Developer at TCS, from June 
                        2019 to August 2022. During my tenure, I primarily specialized in frontend development with React JS, and occasionally 
                        delved into managing SQL databases and some .NET backend development with C#.
                        <br /><br />
                        My academic and professional experiences have fueled my deep passion for applied mathematics, particularly within the 
                        domains of Image Processing and Computer Vision. I find immense satisfaction in working with complex mathematical 
                        algorithms and numerical data. Additionally, I have a profound interest in Astronomy and Cosmology, which continues 
                        to inspire my intellectual pursuits.
                </p>
        ];

 return (
    <div className='main-div-home'>
        <div id='home'>
                <div className='hero'>
                        {/* <HeroImage /> */}
                        <h1>Subham SHOME</h1>
                        {heroText}
                </div>
        </div>

        <div id='about' className='sections-home'/>                            
        <div className='about'>
                <h1 className='home-headers'>Introduction</h1>
                <div className='intro-grid'>
                        <div className='intro-img-container'>
                                <img src={introImage} alt='self-intro' className='intro-image'/>
                        </div>
                        <div className='intro-text-container'>
                                {introText}  
                        </div>
                </div>
                <h3>Research Interests</h3>
                <div className='research-card-section'>
                <ResearchCard title="Image Processing" />
                <ResearchCard title="Radio Astronomy" />
                <ResearchCard title="Image Reconstruction" />
                <ResearchCard title="Astroinformatics" />
                <ResearchCard title="Applied Mathematics" />
                <ResearchCard title="Tomographic Imaging" />
                <ResearchCard title="Deep Learning" />
                <ResearchCard title="Numerical Analysis" />
                </div>
        </div>

        <div id='skills' className='sections-home'/>                            
        <div className='skills-main'>
                <h1 className='home-headers'>Technical Expertise</h1>
                <Skills />
        </div>

        <div id='timeline' className='sections-home'/>                            
        <div className='timeline-main'>
                
        <h1 className='home-headers'>My journey so far</h1>
        <Timeline
                mode="VERTICAL_ALTERNATING"
                theme={{
                primaryColor: "#000000",
                secondaryColor: "#ffffff",
                }}
        />
        </div>

        <div id='projects' className='sections-home'/>                            
        <div style={{maxWidth: '100vw'}}>
                <h1 className='home-headers'>Research Projects</h1>
                <div className='projects-main'>
                        <Projects />
                </div>
                
                
        </div>

        <div id='awards' className='sections-home'/>                            
        <div className='awards-main'>
                <h1 className='home-headers'>Honors and Awards</h1>
                <Awards />
        </div>

        <div id='contact' className='sections-home'/>                            
        <div className='contact-main'>
                <h1 className='home-headers'>Contact me</h1>
                <Contact />
        </div>
    </div>
 ) 
};

export default Home;