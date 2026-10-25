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
    expect(screen.getByText(/Physics-guided deep learning/i)).toBeInTheDocument();
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

  test('uses the work email and no retired contact details', () => {
    const { container } = renderApp();
    const mailto = Array.from(container.querySelectorAll('a[href^="mailto:"]')).map((a) => a.getAttribute('href'));
    expect(mailto.length).toBeGreaterThan(0);
    mailto.forEach((m) => expect(m).toBe('mailto:ss3038@hw.ac.uk'));
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
  test('has quick links to real sections, a theme toggle and a credit link', () => {
    const { container } = renderApp();
    const footer = screen.getByRole('contentinfo');
    const targets = Array.from(footer.querySelectorAll('.footer-links a[href^="#"]')).map((a) => a.getAttribute('href').slice(1));
    expect(targets.length).toBeGreaterThanOrEqual(6);
    targets.forEach((id) => expect(container.querySelector(`#${id}`)).not.toBeNull());
    expect(within(footer).getByRole('link', { name: /CV/ })).toHaveAttribute('href', expect.stringMatching(/Subham_Shome_CV\.pdf$/));
    expect(within(footer).queryByText('ss3038@hw.ac.uk')).toBeNull();
    expect(footer).not.toHaveTextContent(/Built with React/i);
    expect(within(footer).getByRole('button', { name: /Switch to dark theme/i })).toBeInTheDocument();
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
    expect(screen.getByRole('link', { name: /PDF/i })).toBeInTheDocument();
  });

  test('skills are grouped and include the GNN / EHT stack', () => {
    renderApp();
    ['Deep Learning & ML', 'Languages', 'Tools'].forEach((t) => expect(screen.getByText(t)).toBeInTheDocument());
    ['PyTorch Geometric', 'PyTorch Lightning', 'eht-imaging', 'Astropy'].forEach((t) => expect(screen.getByText(t)).toBeInTheDocument());
  });

  test('HPC group is shown, the MLOps group is not (yet)', () => {
    renderApp();
    expect(screen.getByText('HPC & GPU Computing')).toBeInTheDocument();
    ['CUDA', 'Slurm', 'PyTorch DDP', 'Multi-GPU Training', 'Linux / Bash', 'TensorBoard'].forEach((t) =>
      expect(screen.getByText(t)).toBeInTheDocument()
    );
    expect(screen.queryByText('MLOps & Engineering')).toBeNull();
    expect(screen.queryByText('NetworkX')).toBeNull();
  });
});

describe('timeline', () => {
  test('lists every entry newest first, with the new TCS title', () => {
    const { container } = renderApp();
    const items = container.querySelectorAll('.tl-item');
    expect(items).toHaveLength(10);
    expect(items[0]).toHaveTextContent(/PhD/);
    expect(items[items.length - 1]).toHaveTextContent(/Amity/);
    expect(screen.getByText('Software Developer at TCS')).toBeInTheDocument();
    expect(screen.queryByText(/resignation/i)).toBeNull();
    expect(screen.queryByText(/preparedness/i)).toBeNull();
  });

  test('both ISI internships are kept as separate entries', () => {
    renderApp();
    expect(screen.getByText(/First Glimpse of Computer Vision at ISI/)).toBeInTheDocument();
    expect(screen.getByText(/Deep Learning Winter Internship at ISI/)).toBeInTheDocument();
  });

  test('shows the journey strip and the three tracks', () => {
    const { container } = renderApp();
    expect(container.querySelectorAll('.journey-stop')).toHaveLength(5);
    const legend = Array.from(container.querySelectorAll('.tl-legend li')).map((li) => li.textContent.trim());
    expect(legend).toEqual(['Research', 'Education', 'Industry']);
  });

  test('detail toggle exposes its state for assistive tech', () => {
    renderApp();
    const toggle = screen.getAllByRole('button', { name: /Show details: Doctor of Philosophy/i })[0];
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: /Hide details: Doctor of Philosophy/i })).toHaveAttribute('aria-expanded', 'true');
  });
});

describe('theme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  test('defaults to light and toggles to dark, remembering the choice', () => {
    renderApp();
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
    const [toggle] = screen.getAllByRole('button', { name: /Switch to dark theme/i });
    fireEvent.click(toggle);
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(screen.getAllByRole('button', { name: /Switch to light theme/i }).length).toBeGreaterThan(0);
  });

  test('restores a saved dark theme on load', () => {
    localStorage.setItem('theme', 'dark');
    renderApp();
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });
});

describe('routing', () => {
  test('unknown paths fall back to the home page', () => {
    renderApp('/does-not-exist');
    expect(screen.getByRole('heading', { level: 1, name: /Subham SHOME/i })).toBeInTheDocument();
  });
});
