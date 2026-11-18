import React from 'react';
import '../styles/skills.css';

// Plain grouped skills, mirroring the CV's Technical Skills block. No sizes or scores.
const groups = [
    {
        title: 'Languages',
        color: 'var(--teal)',
        text: 'var(--teal-t)',
        skills: ['Python', 'C++', 'MATLAB', 'SQL', 'JavaScript / React'],
    },
    {
        title: 'Deep Learning Frameworks',
        color: 'var(--accent)',
        text: 'var(--accent-t)',
        skills: ['PyTorch', 'PyTorch Lightning', 'PyTorch Geometric', 'JAX', 'TensorFlow', 'Keras', 'Hugging Face', 'Scikit-Learn'],
    },
    {
        title: 'HPC & Systems',
        color: 'var(--amber)',
        text: 'var(--amber-t)',
        skills: ['CUDA', 'Multi-GPU Training', 'PyTorch DDP', 'Slurm', 'Linux / Bash', 'Docker', 'Git', 'Weights & Biases', 'TensorBoard'],
    },
    {
        title: 'Scientific Computing',
        color: 'var(--violet)',
        text: 'var(--violet-t)',
        skills: ['NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'Astropy', 'eht-imaging', 'OpenCV', 'Scikit-Image'],
    },
    {
        title: 'Models & Methods',
        color: 'var(--accent-dark)',
        text: 'var(--accent-dark-t)',
        skills: ['Vision Transformers', 'LLMs', 'GNNs', 'Inverse Problems'],
    },
];

const Skills = () => (
    <div className="skills">
        {groups.map(({ title, color, text, skills }) => (
            <section className="skill-row" key={title} style={{ '--group-color': color, '--group-text': text }}>
                <h3 className="skill-row-title">{title}</h3>
                <ul className="skill-chips">
                    {skills.map((name) => (
                        <li className="skill-chip" key={name}>{name}</li>
                    ))}
                </ul>
            </section>
        ))}
    </div>
);

export default Skills;
