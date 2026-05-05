import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from './unit-test-me.js';

/**
 * Validates inputs using Jest's each() to stay DRY (Don't Repeat Yourself)
 */

describe('Unit Test Validation Suite', () => {

  test.each([
    ['123-456-7890', true],
    ['(123) 456-7890', true],
    ['123-456', false],
    ['800-HOT-LINE', false],
  ])('isPhoneNumber(%s) should be %s', (input, expected) => {
    expect(isPhoneNumber(input)).toBe(expected);
  });

  test.each([
    ['hello@ucsd.edu', true],
    ['first.last@gmail.com', true],
    ['username.gmail.com', false],
    ['user@domain', false],
  ])('isEmail(%s) should be %s', (input, expected) => {
    expect(isEmail(input)).toBe(expected);
  });

  test.each([
    ['a1234_', true],
    ['z_1234567890123', true],
    ['1abcde', false],
    ['abc', false],
  ])('isStrongPassword(%s) should be %s', (input, expected) => {
    expect(isStrongPassword(input)).toBe(expected);
  });

  test.each([
    ['05/05/2026', true],
    ['5/5/2026', true],
    ['05/05/26', false],
    ['May-5th-2026', false],
  ])('isDate(%s) should be %s', (input, expected) => {
    expect(isDate(input)).toBe(expected);
  });

  test.each([
    ['#FFFFFF', true],
    ['#000', true],
    ['#GGG000', false],
    ['#1234567', false],
  ])('isHexColor(%s) should be %s', (input, expected) => {
    expect(isHexColor(input)).toBe(expected);
  });

});