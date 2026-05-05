// sum.test.js
import { sum } from '../sum.js';

test('adds 1 + 2 to equal 3', () => {
  // We change the expectation to 4 so that the test fails for the screenshot requirement
  expect(sum(1, 2)).toBe(4);
});