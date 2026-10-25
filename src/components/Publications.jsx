import React from 'react';
import '../styles/publications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Add new papers at the top of this list (newest first).
const publications = [
  {
    title: 'Efficient Algorithm for Optic Disc Segmentation in Retinal Images',
    authors: [
      'Subham Shome',
      'Radhika Mandawewala',
      'Subhasish Roy',
      'Anirban Mitra',
      'Subrata Paul',
      'Amitava Podder',
      'Stobak Dutta',
    ],
    venue: 'Journal of Neonatal Surgery',
    details: 'Vol. 14, No. 15S',
    year: 2025,
    summary:
      'A fast, lightweight method for segmenting the optic disc in retinal fundus images using thresholding and morphological operations, evaluated on the public Drishti-GS dataset.',
    results: 'Dice 93.95% · Jaccard 88.9% · centre-localisation accuracy 99.67%',
    tags: ['Segmentation', 'Biomedical Imaging', 'Image Processing'],
    links: [
      { label: 'Paper (DOI)', href: 'https://doi.org/10.63682/jns.v14i15S.3494', icon: faArrowUpRightFromSquare },
      { label: 'PDF', href: 'https://jneonatalsurg.com/index.php/jns/article/view/3494/4110', icon: faFilePdf },
    ],
  },
];

const Publications = () => (
  <div className="publications">
    {publications.map((pub) => (
      <article className="publication" key={pub.title}>
        <div className="publication-year">{pub.year}</div>
        <div className="publication-body">
          <h4 className="publication-title">{pub.title}</h4>
          <p className="publication-authors">
            {pub.authors.map((author, i) => (
              <React.Fragment key={author}>
                {author === 'Subham Shome' ? <b>{author}</b> : author}
                {i < pub.authors.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </p>
          <p className="publication-venue">
            <i>{pub.venue}</i>, {pub.details}, {pub.year}
          </p>
          <p className="publication-summary">{pub.summary}</p>
          <p className="publication-results">{pub.results}</p>
          <div className="publication-tags">
            {pub.tags.map((tag) => (
              <span className="publication-tag" key={tag}>{tag}</span>
            ))}
          </div>
          <div className="publication-links">
            {pub.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="publication-link">
                <FontAwesomeIcon icon={link.icon} /> {link.label}
              </a>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default Publications;
