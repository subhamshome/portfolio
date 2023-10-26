import React, { useState } from 'react';
import anaconda from '../assets/skills/anaconda.png'
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
import vscode from '../assets/skills/vscode.png';
import '../styles/skills.css';


const all = [python, matlab, cpp, sql, tensorflow, keras, pytorch, opencv, skimage, 
    sklearn, pillow, numpy, pandas, matplotlib, git, latex, jupyter, anaconda, vscode, colab];

const languages = [python, matlab, cpp, sql];

const libraries = [tensorflow, keras, pytorch, opencv, sklearn, skimage, pillow, numpy, pandas, matplotlib];

const tools = [git, latex, jupyter, anaconda, vscode, colab];

const labels = {
    [python]: 'Python',
    [matlab]: 'Matlab',
    [cpp]: 'C++',
    [git]: 'Git',
    [keras]: 'Keras',
    [latex]: 'LaTeX',
    [matplotlib]: 'Matplotlib',
    [numpy]: 'NumPy',
    [opencv]: 'OpenCV',
    [pandas]: 'Pandas',
    [pillow]: 'Pillow',
    [pytorch]: 'PyTorch',
    [skimage]: 'Scikit-Image',
    [sklearn]: 'Scikit-Learn',
    [tensorflow]: 'TensorFlow',
    [sql]: 'SQL (MS-SQL)',
    [jupyter]: 'Jupyter Notebooks',
    [anaconda]: 'Anaconda',
    [vscode]: 'Visual Studio Code',
    [colab]: 'Google Colab',
};

const Skills = () => {
const [activeTab, setActiveTab] = useState('languages');

const renderSkillsList = (skillList) => (
    <div className="icon-grid">
    {skillList.map((company, index) => (
        <div className="icon-item" key={index}>
        <img src={company} alt={`Company ${index + 1}`} />
        <div className="label">{labels[company] || 'Label not available'}</div>
        </div>
    ))}
    </div>
);

return (
    <div className="skills">

        <div className="tab-container">
            <div className="tabs">
            <button
                onClick={() => setActiveTab('languages')}
                className={activeTab === 'languages' ? 'active' : ''}
            >
                Languages
            </button>
            <button
                onClick={() => setActiveTab('libraries')}
                className={activeTab === 'libraries' ? 'active' : ''}
            >
                Libraries
            </button>
            <button
                onClick={() => setActiveTab('tools')}
                className={activeTab === 'tools' ? 'active' : ''}
            >
                Tools
            </button>
            <button
                onClick={() => setActiveTab('all')}
                className={activeTab === 'all' ? 'active' : ''}
            >
                All
            </button>
            </div>
            {activeTab === 'languages' && renderSkillsList(languages)}
            {activeTab === 'libraries' && renderSkillsList(libraries)}
            {activeTab === 'tools' && renderSkillsList(tools)}
            {activeTab === 'all' && renderSkillsList(all)}
        </div>
    </div>
    );
};
  
export default Skills;