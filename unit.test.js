// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from './unit-test-me.js';

/**
 * isPhoneNumber Tests
 */
test('isPhoneNumber returns true for valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns true for valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for too few digits', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('isPhoneNumber returns false for letters', () => {
  expect(isPhoneNumber('800-HOT-LINE')).toBe(false);
});

/**
 * isEmail Tests
 */
test('isEmail returns true for standard email', () => {
  expect(isEmail('hello@ucsd.edu')).toBe(true);
});

test('isEmail returns true for email with dots', () => {
  expect(isEmail('first.last@gmail.com')).toBe(true);
});

test('isEmail returns false for missing @', () => {
  expect(isEmail('username.gmail.com')).toBe(false);
});

test('isEmail returns false for missing top-level domain', () => {
  expect(isEmail('user@domain')).toBe(false);
});

/**
 * isStrongPassword Tests
 */
test('isStrongPassword returns true for standard strong password', () => {
  expect(isStrongPassword('a1234_')).toBe(true);
});

test('isStrongPassword returns true for max length password', () => {
  expect(isStrongPassword('z_1234567890123')).toBe(true);
});

test('isStrongPassword returns false for passwords starting with numbers', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});

test('isStrongPassword returns false for too short passwords', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

/**
 * isDate Tests
 */
test('isDate returns true for standard date format', () => {
  expect(isDate('05/05/2026')).toBe(true);
});

test('isDate returns true for single digit month/day', () => {
  expect(isDate('5/5/2026')).toBe(true);
});

test('isDate returns false for 2-digit years', () => {
  expect(isDate('05/05/26')).toBe(false);
});

test('isDate returns false for nonsensical strings', () => {
  expect(isDate('May-5th-2026')).toBe(false);
});

/**
 * isHexColor Tests
 */
test('isHexColor returns true for 6-character hex', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('isHexColor returns true for 3-character hex', () => {
  expect(isHexColor('#000')).toBe(true);
});

test('isHexColor returns false for invalid hex characters', () => {
  expect(isHexColor('#GGG000')).toBe(false);
});

test('isHexColor returns false for too many characters', () => {
  expect(isHexColor('#1234567')).toBe(false);
});