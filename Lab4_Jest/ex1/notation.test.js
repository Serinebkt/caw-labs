// notation.test.js
const { mean } = require('./notation.js');

test('mean calcule la moyenne de [85, 90, 78, 92, 88]', () => {
  expect(mean([85, 90, 78, 92, 88])).toBe(86.6);
});

test('mean retourne 0 pour tableau vide', () => {
  expect(mean([])).toBe(0);
});

test('mean calcule la moyenne de nombres négatifs', () => {
  expect(mean([-1, -2, -3])).toBe(-2);
});