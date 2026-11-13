import { packCircles } from './bubblePack';

describe('packCircles', () => {
  const radii = [90, 85, 70, 62, 48, 40, 33, 30, 22];

  test('keeps input order and never overlaps', () => {
    const { items } = packCircles(radii.map((r) => ({ r })), 6);
    expect(items.map((c) => c.r)).toEqual(radii);
    for (let i = 0; i < items.length; i += 1) {
      for (let j = i + 1; j < items.length; j += 1) {
        const d = Math.hypot(items[i].x - items[j].x, items[i].y - items[j].y);
        expect(d).toBeGreaterThanOrEqual(items[i].r + items[j].r + 6 - 0.01);
      }
    }
  });

  test('the returned radius encloses every circle', () => {
    const { items, r } = packCircles(radii.map((rad) => ({ r: rad })), 6);
    items.forEach((c) => expect(Math.hypot(c.x, c.y) + c.r).toBeLessThanOrEqual(r + 0.01));
  });

  test('a single circle sits at the origin', () => {
    const { items, r } = packCircles([{ r: 50 }]);
    expect(items[0]).toMatchObject({ x: 0, y: 0 });
    expect(r).toBeCloseTo(50);
  });
});
