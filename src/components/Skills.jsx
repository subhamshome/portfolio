import React from 'react';
import anaconda from '../assets/skills/anaconda.png';
import astropy from '../assets/skills/astropy.png';
import colab from '../assets/skills/colab.png';
import cpp from '../assets/skills/cpp.png';
import git from '../assets/skills/git.png';
import jupyter from '../assets/skills/jupyter.png';
import keras from '../assets/skills/keras.png';
import latex from '../assets/skills/latex.png';
import matlab from '../assets/skills/matlab.png';
import matplotlib from '../assets/skills/matplotlib.png';
import sql from '../assets/skills/mssql.png';
import numpy from '../assets/skills/numpy.png';
import opencv from '../assets/skills/opencv.png';
import pandas from '../assets/skills/pandas.png';
import pillow from '../assets/skills/pillow.png';
import python from '../assets/skills/python.png';
import pytorch from '../assets/skills/pytorch.png';
import skimage from '../assets/skills/skimage.png';
import sklearn from '../assets/skills/sklearn.png';
import tensorflow from '../assets/skills/tensorflow.png';
import tex from '../assets/skills/tex.png';
import vscode from '../assets/skills/vscode.png';
import '../styles/skills.css';


// `icon` is a logo image; `badge` is a short monogram used when there is no logo.
const skill = (name, icon, badge) => ({ name, icon, badge });

const groups = [
    {
        title: 'Research Focus',
        color: 'var(--highlight)',
        text: 'var(--highlight-t)',
        skills: [
            skill('Image Reconstruction', null, 'IR'),
            skill('Inverse Problems', null, 'IP'),
            skill('Radio Interferometry', null, 'RI'),
            skill('VLBI / EHT Data', null, 'EHT'),
            skill('Interferometric Calibration', null, 'CAL'),
            skill('Graph Neural Networks', null, 'GNN'),
            skill('Tomographic Imaging', null, 'CT'),
        ],
    },
    {
        title: 'Deep Learning & ML',
        color: 'var(--accent)',
        text: 'var(--accent-t)',
        skills: [
            skill('PyTorch', pytorch),
            skill('PyTorch Geometric', null, 'PyG'),
            skill('PyTorch Lightning', null, 'PL'),
            skill('TensorFlow', tensorflow),
            skill('Keras', keras),
            skill('Scikit-Learn', sklearn),
        ],
    },
    {
        title: 'HPC & GPU Computing',
        color: 'var(--amber)',
        text: 'var(--amber-t)',
        skills: [
            skill('CUDA', null, 'CU'),
            skill('Multi-GPU Training', null, 'GPU'),
            skill('PyTorch DDP', null, 'DDP'),
            skill('Slurm', null, 'SL'),
            skill('Linux / Bash', null, 'sh'),
        ],
    },
    // MLOps & Engineering: uncomment this group when these skills are ready to show.
    // {
    //     title: 'MLOps & Engineering',
    //     color: 'var(--teal)',
    //     text: 'var(--teal-t)',
    //     skills: [
    //         skill('Docker', null, 'Dk'),
    //         skill('MLflow', null, 'ML'),
    //         skill('GitHub Actions', null, 'CI'),
    //         skill('pytest', null, 'pt'),
    //     ],
    // },
    {
        title: 'Scientific Computing & Imaging',
        color: 'var(--violet)',
        text: 'var(--violet-t)',
        skills: [
            skill('NumPy', numpy),
            skill('SciPy', null, 'Sp'),
            skill('Pandas', pandas),
            skill('Matplotlib', matplotlib),
            skill('Astropy', astropy),
            skill('eht-imaging', null, 'ehtim'),
            skill('OpenCV', opencv),
            skill('Scikit-Image', skimage),
            skill('Pillow', pillow),
        ],
    },
    {
        title: 'Languages',
        color: 'var(--teal)',
        text: 'var(--teal-t)',
        skills: [
            skill('Python', python),
            skill('MATLAB', matlab),
            skill('C++', cpp),
            skill('SQL (MS-SQL)', sql),
            skill('JavaScript / React', null, 'JS'),
            skill('C#', null, 'C#'),
            skill('TeX', tex),
        ],
    },
    {
        title: 'Tools',
        color: 'var(--accent-dark)',
        text: 'var(--accent-dark-t)',
        skills: [
            skill('Git', git),
            skill('LaTeX', latex),
            skill('Jupyter Notebooks', jupyter),
            skill('Anaconda', anaconda),
            skill('Visual Studio Code', vscode),
            skill('Google Colab', colab),
            skill('TensorBoard', null, 'TB'),
        ],
    },
];

const Skills = () => (
    <div className="skills">
        {groups.map(({ title, color, text, skills }) => (
            <div className="skill-group" key={title} style={{ '--group-color': color, '--group-text': text }}>
                <h3 className="skill-group-title">{title}</h3>
                <ul className="skill-chips">
                    {skills.map(({ name, icon, badge }) => (
                        <li className="skill-chip" key={name}>
                            {icon ? (
                                <img src={icon} alt="" loading="lazy" />
                            ) : (
                                <span className="skill-badge" aria-hidden="true">{badge}</span>
                            )}
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export default Skills;
