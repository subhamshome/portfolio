import React, { useEffect, useRef, useState } from 'react';
import { packCircles } from './bubblePack';
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


// Placeholder scores from 1 (beginner) to 10 (expert), generated once with
//   random.seed(2026); {name: random.randint(1, 10) for name in skills}
// Edit any number below to match your real level. Each name must match a skill() call.
const SCORES = {
    'PyTorch': 9,
    'PyTorch Geometric': 9,
    'PyTorch Lightning': 8,
    'TensorFlow': 7,
    'Keras': 7,
    'Scikit-Learn': 8,
    'CUDA': 8,
    'Multi-GPU Training': 8,
    'PyTorch DDP': 6,
    'Slurm': 7,
    'Linux / Bash': 7,
    'NumPy': 10,
    'SciPy': 9,
    'Pandas': 8,
    'Matplotlib': 6,
    'Astropy': 9,
    'eht-imaging': 7,
    'OpenCV': 7,
    'Scikit-Image': 6,
    'Pillow': 4,
    'Python': 10,
    'MATLAB': 5,
    'C++': 6,
    'SQL (MS-SQL)': 5,
    'JavaScript / React': 4,
    'C#': 3,
    'TeX': 7,
    'Git': 9,
    'LaTeX': 8,
    'Jupyter Notebooks': 10,
    'Anaconda': 3,
    'Visual Studio Code': 10,
    'Google Colab': 9,
    'TensorBoard': 8,
};

// `icon` is a logo image; `badge` is a short monogram used when there is no logo.
// `score` (1-10) will set the bubble size in the expertise chart. It comes from SCORES above.
const skill = (name, icon, badge) => ({ name, icon, badge, score: SCORES[name] });

const groups = [
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

// ---------- bubble chart layout ----------
// Bubble radius grows with the score; each group is packed into its own cluster, then the clusters
// are packed together. Tweak these numbers to change how strongly size follows score.
const radiusFor = (score) => 14 + 5.5 * score;
const GAP_IN_GROUP = 7;
const GROUP_PADDING = 16;
const GAP_BETWEEN_GROUPS = 40;
const LABEL_ROOM = 34; // space left around the chart for the curved group titles

const fontFor = (name, r) => {
    const longestWord = Math.max(...name.split(/[\s/]+/).map((w) => w.length));
    const byRadius = Math.min(Math.max(r * 0.27, 11), 19);
    const byWidth = (1.7 * r) / (0.58 * longestWord);
    return Math.max(Math.min(byRadius, byWidth), 8);
};

const layoutGroup = ({ title, color, text, skills }) => {
    const inner = packCircles(skills.map((sk) => ({ r: radiusFor(sk.score), skill: sk })), GAP_IN_GROUP);
    return { title, color, text, inner: inner.items, r: inner.r + GROUP_PADDING };
};

const frame = (circles, pad) => {
    const minX = Math.min(...circles.map((c) => c.x - c.r)) - pad;
    const maxX = Math.max(...circles.map((c) => c.x + c.r)) + pad;
    const minY = Math.min(...circles.map((c) => c.y - c.r)) - pad;
    const maxY = Math.max(...circles.map((c) => c.y + c.r)) + pad;
    return { minX, minY, width: maxX - minX, height: maxY - minY };
};

// Every bubble with its position inside its own group (for phones: one cluster per group).
const groupLayouts = groups.map(layoutGroup);
const phoneLayouts = groupLayouts.map((g) => ({
    group: g,
    rings: [],
    bubbles: g.inner.map((b) => ({ ...b, group: g })),
    ...frame(g.inner, 4),
}));

// Everything on one canvas: group rings, each holding its bubbles (for wider screens).
// Groups are placed in the order they are listed (Languages first, in the middle; Tools last).
const wide = packCircles(groupLayouts.map((g) => ({ r: g.r, group: g })), GAP_BETWEEN_GROUPS, { keepOrder: true });
const wideRings = wide.items;
const wideLayout = {
    rings: wideRings.map((ring) => ({ x: ring.x, y: ring.y, r: ring.r, group: ring.group })),
    bubbles: wideRings.flatMap((ring) =>
        ring.group.inner.map((b) => ({ ...b, x: ring.x + b.x, y: ring.y + b.y, group: ring.group }))
    ),
    ...frame(wideRings, LABEL_ROOM),
};

// ---------- small hooks ----------
const useNarrow = () => {
    const query = '(max-width: 760px)';
    const [narrow, setNarrow] = useState(() => !!(window.matchMedia && window.matchMedia(query).matches));
    useEffect(() => {
        if (!window.matchMedia) return undefined;
        const mq = window.matchMedia(query);
        const update = () => setNarrow(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);
    return narrow;
};

// True once the element has scrolled into view (always true where IntersectionObserver is missing).
const useSeen = () => {
    const ref = useRef(null);
    const [seen, setSeen] = useState(() => typeof IntersectionObserver === 'undefined');
    useEffect(() => {
        if (seen || !ref.current) return undefined;
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setSeen(true);
                io.disconnect();
            }
        }, { threshold: 0.15 });
        io.observe(ref.current);
        return () => io.disconnect();
    }, [seen]);
    return [ref, seen];
};

// ---------- drawing ----------
const pct = (value, total) => `${(value / total) * 100}%`;

const Cluster = ({ layout, showTitles }) => {
    const { rings, bubbles, minX, minY, width, height } = layout;
    const [ref, seen] = useSeen();
    return (
        <div
            ref={ref}
            className={`bubble-chart ${seen ? 'is-seen' : ''}`}
            style={{ aspectRatio: `${width} / ${height}` }}
        >
            <svg className="bubble-rings" viewBox={`${minX} ${minY} ${width} ${height}`} aria-hidden="true">
                {rings.map(({ x, y, r, group }, i) => {
                    const arc = r + 9;
                    return (
                        <g key={group.title} style={{ '--group-color': group.color, '--group-text': group.text }}>
                            <circle className="bubble-ring" cx={x} cy={y} r={r} />
                            {showTitles && (
                                <>
                                    <path
                                        id={`arc-${i}`}
                                        d={`M ${x - arc} ${y} A ${arc} ${arc} 0 0 1 ${x + arc} ${y}`}
                                        fill="none"
                                    />
                                    <text className="bubble-ring-title">
                                        <textPath href={`#arc-${i}`} startOffset="50%" textAnchor="middle">
                                            {group.title}
                                        </textPath>
                                    </text>
                                </>
                            )}
                        </g>
                    );
                })}
            </svg>
            {bubbles.map(({ x, y, r, skill: sk, group }, i) => (
                <div
                    key={sk.name}
                    className="bubble"
                    role="img"
                    tabIndex={0}
                    aria-label={`${sk.name}, ${sk.score} out of 10`}
                    style={{
                        left: pct(x - r - minX, width),
                        top: pct(y - r - minY, height),
                        width: pct(2 * r, width),
                        height: pct(2 * r, height),
                        '--f': `${(fontFor(sk.name, r) / width) * 100}cqw`,
                        '--group-color': group.color,
                        '--group-text': group.text,
                        '--i': i,
                    }}
                >
                    <span className="bubble-name">{sk.name}</span>
                    <span className="bubble-score" aria-hidden="true">{sk.score}/10</span>
                </div>
            ))}
        </div>
    );
};

const Skills = () => {
    const narrow = useNarrow();
    return (
        <div className="skills">
            {narrow ? (
                phoneLayouts.map((layout) => (
                    <section className="skills-group-phone" key={layout.group.title}>
                        <h3 style={{ color: layout.group.text }}>{layout.group.title}</h3>
                        <Cluster layout={layout} showTitles={false} />
                    </section>
                ))
            ) : (
                <Cluster layout={wideLayout} showTitles />
            )}
        </div>
    );
};

export default Skills;
