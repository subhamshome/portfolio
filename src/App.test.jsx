import { render, screen, within, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderApp = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

describe('portfolio page', () => {
  test('renders the hero with name, pitch and CV button', () => {
    renderApp();
    expect(screen.getByRole('heading', { level: 1, name: /Subham SHOME/i })).toBeInTheDocument();
    expect(screen.getByText(/Physics-guided deep learning for VLBI/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Download CV/i })).toHaveAttribute('href', expect.stringMatching(/Subham_Shome_CV\.pdf$/));
  });

  test('renders every section the navigation points to', () => {
    const { container } = renderApp();
    const header = container.querySelector('header');
    const targets = Array.from(header.querySelectorAll('nav a[href^="#"]')).map((a) => a.getAttribute('href').slice(1));
    expect(targets.length).toBeGreaterThanOrEqual(6);
    targets.forEach((id) => expect(container.querySelector(`#${id}`)).not.toBeNull());
  });

  test('external links open safely', () => {
    const { container } = renderApp();
    const blank = container.querySelectorAll('a[target="_blank"]');
    expect(blank.length).toBeGreaterThan(10);
    blank.forEach((a) => expect(a.getAttribute('rel')).toMatch(/noopener/));
  });

  test('uses the personal email and no retired contact details', () => {
    const { container } = renderApp();
    const mailto = Array.from(container.querySelectorAll('a[href^="mailto:"]')).map((a) => a.getAttribute('href'));
    expect(mailto.length).toBeGreaterThan(0);
    mailto.forEach((m) => expect(m).toBe('mailto:subhamshome.dev@gmail.com'));
    expect(container.innerHTML).not.toMatch(/u-bordeaux/);
    expect(container.innerHTML).not.toMatch(/facebook\.com|instagram\.com/);
  });

  test('photography link stays hidden until it is re-enabled', () => {
    const { container } = renderApp();
    expect(container.innerHTML).not.toMatch(/subhamshomephotography/);
  });

  test('icon-only links and buttons have accessible names', () => {
    renderApp();
    ['Open menu', 'Close menu', 'Back to top'].forEach((name) =>
      expect(screen.getByRole('button', { name, hidden: true })).toBeInTheDocument()
    );
    ['LinkedIn', 'GitHub', 'Google Scholar'].forEach((name) =>
      expect(screen.getAllByRole('link', { name }).length).toBeGreaterThan(0)
    );
  });

  test('all images have alt text', () => {
    const { container } = renderApp();
    container.querySelectorAll('img').forEach((img) => expect(img).toHaveAttribute('alt'));
  });

  test('footer shows the current year', () => {
    renderApp();
    const footer = screen.getByRole('contentinfo');
    expect(within(footer).getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
  });
});

describe('footer', () => {
  test('has quick links to real sections, and a credit link', () => {
    const { container } = renderApp();
    const footer = screen.getByRole('contentinfo');
    const targets = Array.from(footer.querySelectorAll('.footer-links a[href^="#"]')).map((a) => a.getAttribute('href').slice(1));
    expect(targets.length).toBeGreaterThanOrEqual(6);
    targets.forEach((id) => expect(container.querySelector(`#${id}`)).not.toBeNull());
    expect(within(footer).getByRole('link', { name: /CV/ })).toHaveAttribute('href', expect.stringMatching(/Subham_Shome_CV\.pdf$/));
    expect(within(footer).queryByText('subhamshome.dev@gmail.com')).toBeNull();
    expect(footer).not.toHaveTextContent(/Built with React/i);
    expect(screen.queryByRole('button', { name: /theme/i, hidden: true })).toBeNull();
    expect(within(footer).getByRole('link', { name: /Source on GitHub/i })).toHaveAttribute('href', 'https://github.com/subhamshome/portfolio');
  });
});

describe('content', () => {
  test('intro "Read more" toggles the long version', () => {
    renderApp();
    const button = screen.getByRole('button', { name: /read more/i });
    expect(screen.queryByText(/Silver Medalist in Electronics/i)).toBeNull();
    fireEvent.click(button);
    expect(screen.getByText(/Silver Medalist in Electronics/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /show less/i })).toBeInTheDocument();
  });

  test('projects: 3 shown first, all 9 after expanding, each with a GitHub link', () => {
    const { container } = renderApp();
    expect(container.querySelectorAll('.project-card')).toHaveLength(3);
    fireEvent.click(screen.getByRole('button', { name: /show all 9 projects/i }));
    const cards = container.querySelectorAll('.project-card');
    expect(cards).toHaveLength(9);
    cards.forEach((card) =>
      expect(card.querySelector('a.project-card-button')).toHaveAttribute('href', expect.stringMatching(/^https:\/\/github\.com\/subhamshome\//))
    );
  });

  test('publications lists the paper with DOI and PDF links', () => {
    renderApp();
    expect(screen.getByText(/Efficient Algorithm for Optic Disc Segmentation/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Paper \(DOI\)/i })).toHaveAttribute('href', expect.stringContaining('doi.org'));
    expect(screen.getByRole('link', { name: /^PDF$/i })).toBeInTheDocument();
  });

  test('skills are plain grouped chips with no scores or sizes', () => {
    const { container } = renderApp();
    ['Languages', 'Deep Learning Frameworks', 'HPC & Systems', 'Scientific Computing', 'Models & Methods'].forEach((t) =>
      expect(screen.getByText(t)).toBeInTheDocument()
    );
    ['PyTorch Geometric', 'PyTorch Lightning', 'eht-imaging', 'Astropy', 'CUDA', 'Slurm', 'PyTorch DDP', 'Docker', 'Weights & Biases', 'JAX', 'Hugging Face', 'GNNs'].forEach((t) =>
      expect(screen.getByText(t)).toBeInTheDocument()
    );
    expect(container.querySelectorAll('.skill-row')).toHaveLength(5);
    expect(container.querySelector('.bubble-chart')).toBeNull();
    expect(container.querySelector('#skills')).not.toHaveTextContent(/\/10/);
    ['C#', 'Anaconda', 'Pillow', 'Visual Studio Code', 'Self-supervised Learning', 'Transformers'].forEach((t) =>
      expect(screen.queryByText(t)).toBeNull()
    );
    expect(screen.queryByText('MLOps & Engineering')).toBeNull();
  });
});

describe('timeline', () => {
  test('splits the journey into Experience, Education and Internships, all visible', () => {
    const { container } = renderApp();
    const titles = Array.from(container.querySelectorAll('.tl-section-title')).map((h) => h.textContent);
    expect(titles).toEqual(['Experience', 'Education', 'Internships']);
    const counts = Array.from(container.querySelectorAll('.tl-section')).map((sec) => sec.querySelectorAll('.tl-item').length);
    expect(counts).toEqual([3, 5, 3]);
    const [work, studies, internships] = Array.from(container.querySelectorAll('.tl-section'));
    expect(studies.querySelector('.tl-item')).toHaveTextContent(/PhD/);
    expect(studies).not.toHaveTextContent(/Teaching Assistant|EHTC/);
    const studyItems = studies.querySelectorAll('.tl-item');
    expect(studyItems[studyItems.length - 1]).toHaveTextContent(/Amity/);
    expect(internships).toHaveTextContent(/ISI/);
    expect(internships.querySelector('.tl-item')).toHaveTextContent(/Thesis at IMS/);
    expect(studies).not.toHaveTextContent(/IMS/);
    expect(work).toHaveTextContent(/Teaching Assistant/);
    expect(work).toHaveTextContent(/EHTC Collaborator/);
    expect(work).toHaveTextContent(/Software Developer at TCS/);
    expect(screen.queryByText(/resignation/i)).toBeNull();
    expect(screen.queryByText(/preparedness/i)).toBeNull();
    expect(screen.queryByText(/Excellence Scholarship at IPCV/)).toBeNull();
  });

  test('groups entries into PhD, Master\'s and Bachelor\'s frames', () => {
    const { container } = renderApp();
    const frames = Array.from(container.querySelectorAll('.tl-phase'));
    const byLabel = (re) => frames.filter((f) => re.test(f.querySelector('.tl-phase-label').textContent));
    const masters = byLabel(/Master/);
    expect(masters.map((f) => f.querySelectorAll('.tl-item').length).sort()).toEqual([2, 3]);
    expect(masters.some((f) => /Thesis at IMS/.test(f.textContent) && /Winter Internship at ISI/.test(f.textContent))).toBe(true);
    const bachelors = byLabel(/Bachelor/);
    expect(bachelors.some((f) => /Amity/.test(f.textContent))).toBe(true);
    expect(bachelors.some((f) => /First Glimpse of Computer Vision at ISI/.test(f.textContent))).toBe(true);
    expect(byLabel(/Industry/).some((f) => /Software Developer at TCS/.test(f.textContent))).toBe(true);
    const phd = byLabel(/PhD/);
    expect(phd.some((f) => /Teaching Assistant/.test(f.textContent) && /EHTC/.test(f.textContent))).toBe(true);
  });

  test('both ISI internships are kept as separate entries', () => {
    renderApp();
    expect(screen.getByText(/First Glimpse of Computer Vision at ISI/)).toBeInTheDocument();
    expect(screen.getByText(/Deep Learning Winter Internship at ISI/)).toBeInTheDocument();
  });

  test('shows the journey strip', () => {
    const { container } = renderApp();
    expect(container.querySelectorAll('.journey-stop')).toHaveLength(6);
  });

  test('detail toggle exposes its state for assistive tech', () => {
    renderApp();
    const toggle = screen.getAllByRole('button', { name: /Show details: Doctor of Philosophy/i })[0];
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: /Hide details: Doctor of Philosophy/i })).toHaveAttribute('aria-expanded', 'true');
  });
});

describe('timeline details', () => {
  test('every entry shows its subtitle and keeps the detail behind the + button', () => {
    const { container } = renderApp();
    const items = container.querySelectorAll('.tl-item');
    expect(items.length).toBe(11);
    items.forEach((li) => {
      expect(li.querySelector('.tl-subtitle')).not.toBeNull();
      expect(li.querySelector('.tl-toggle')).not.toBeNull();
      expect(li).not.toHaveClass('open');
    });
    expect(container.querySelector('.tl-more-link')).toBeNull();
  });
});

describe('routing', () => {
  test('unknown paths fall back to the home page', () => {
    renderApp('/does-not-exist');
    expect(screen.getByRole('heading', { level: 1, name: /Subham SHOME/i })).toBeInTheDocument();
  });
});
