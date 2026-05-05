import { sum } from '../sum.js';

test('adds 1 + 2 to equal 3', () => {
  // We use 4 so the GitHub Action fails
  expect(sum(1, 2)).toBe(4);
});