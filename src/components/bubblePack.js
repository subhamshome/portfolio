// Small circle-packing helpers for the skills bubble chart (no dependencies).
// packCircles places circles of given radii as tightly as possible around their centre of mass,
// so a cluster ends up roughly round. The result is deterministic, so the layout never jumps.

const EPS = 1e-6;

// Both positions where a circle of radius r touches circles a and b (each grown by `gap`).
const tangentSpots = (a, b, r, gap) => {
  const da = a.r + r + gap;
  const db = b.r + r + gap;
  const d = Math.hypot(b.x - a.x, b.y - a.y);
  if (d < EPS || d > da + db || d < Math.abs(da - db)) return [];
  const along = (da * da - db * db + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(da * da - along * along, 0));
  const ux = (b.x - a.x) / d;
  const uy = (b.y - a.y) / d;
  const mx = a.x + along * ux;
  const my = a.y + along * uy;
  return [
    { x: mx - h * uy, y: my + h * ux },
    { x: mx + h * uy, y: my - h * ux },
  ];
};

const centreOfMass = (circles) => {
  let w = 0;
  let x = 0;
  let y = 0;
  circles.forEach((c) => {
    const a = c.r * c.r;
    w += a;
    x += c.x * a;
    y += c.y * a;
  });
  return { x: x / w, y: y / w };
};

// Smallest-ish circle (centre + radius) that contains every circle.
const farthest = (circles, x, y) =>
  circles.reduce(
    (best, c) => {
      const d = Math.hypot(c.x - x, c.y - y) + c.r;
      return d > best.d ? { c, d } : best;
    },
    { c: circles[0], d: -1 }
  ).c;

const enclose = (circles) => {
  let { x, y } = centreOfMass(circles);
  for (let i = 0; i < 600; i += 1) {
    const far = farthest(circles, x, y);
    const step = 0.5 / (i + 2);
    x += (far.x - x) * step;
    y += (far.y - y) * step;
  }
  const r = Math.max(...circles.map((c) => Math.hypot(c.x - x, c.y - y) + c.r));
  return { x, y, r };
};

/**
 * @param {{r: number}[]} items circles to place (any extra fields are kept)
 * @param {number} gap space left between neighbours
 * @param {{keepOrder?: boolean}} options keepOrder places circles in the given order instead of biggest first
 * @returns {{items: {x: number, y: number, r: number}[], r: number}} items centred on (0, 0)
 *          (same order as the input) and the radius of the circle that encloses them all.
 */
export const packCircles = (items, gap = 0, { keepOrder = false } = {}) => {
  const order = items.map((item, index) => ({ ...item, index }));
  if (!keepOrder) order.sort((a, b) => b.r - a.r);
  const placed = [];

  order.forEach((item) => {
    if (placed.length === 0) {
      placed.push({ ...item, x: 0, y: 0 });
      return;
    }
    const candidates = [];
    if (placed.length === 1) {
      candidates.push({ x: placed[0].x + placed[0].r + item.r + gap, y: placed[0].y });
    }
    for (let i = 0; i < placed.length; i += 1) {
      for (let j = i + 1; j < placed.length; j += 1) {
        candidates.push(...tangentSpots(placed[i], placed[j], item.r, gap));
      }
    }
    const free = candidates.filter((c) =>
      placed.every((p) => Math.hypot(c.x - p.x, c.y - p.y) >= p.r + item.r + gap - EPS)
    );
    const target = centreOfMass(placed);
    free.sort((a, b) => Math.hypot(a.x - target.x, a.y - target.y) - Math.hypot(b.x - target.x, b.y - target.y));
    const spot = free[0] || { x: target.x + 1000, y: target.y };
    placed.push({ ...item, x: spot.x, y: spot.y });
  });

  const box = enclose(placed);
  const centred = placed
    .map((p) => ({ ...p, x: p.x - box.x, y: p.y - box.y }))
    .sort((a, b) => a.index - b.index)
    .map(({ index, ...rest }) => rest);
  return { items: centred, r: box.r };
};
