<<<<<<< HEAD
import { sum } from '../sum.js';

test('adds 1 + 2 to equal 3', () => {
  // We use 4 so the GitHub Action fails
=======
// sum.test.js
import { sum } from '../sum.js';

test('adds 1 + 2 to equal 3', () => {
  // We change the expectation to 4 so that the test fails for the screenshot requirement
>>>>>>> d9762f0d60b30bef1a1bd447953a19326b310e68
  expect(sum(1, 2)).toBe(4);
});