import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

// --- isPhoneNumber Tests ---
test('Valid phone number with parentheses: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Valid phone number with dashes: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Invalid phone number missing dashes: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('Invalid phone number too short: 123-45-678', () => {
  expect(isPhoneNumber('123-45-678')).toBe(false);
});

// --- isEmail Tests ---
test('Valid email: test123@domain.com', () => {
  expect(isEmail('test123@domain.com')).toBe(true);
});

test('Valid email with underscore domain: user@my_email.org', () => {
  expect(isEmail('user@my_email.org')).toBe(true);
});

test('Invalid email with dot in username: name.lastname@domain.com', () => {
  expect(isEmail('name.lastname@domain.com')).toBe(false);
});

test('Invalid email missing domain: user@.com', () => {
  expect(isEmail('user@.com')).toBe(false);
});

// --- isStrongPassword Tests ---
test('Valid strong password: Abc12345', () => {
  expect(isStrongPassword('Abc12345')).toBe(true);
});

test('Valid strong password with underscore: A1_b2c3', () => {
  expect(isStrongPassword('A1_b2c3')).toBe(true);
});

test('Invalid password too short: ab1', () => {
  expect(isStrongPassword('ab1')).toBe(false);
});

test('Invalid password with symbol: aBcd!234', () => {
  expect(isStrongPassword('aBcd!234')).toBe(false);
});

// --- isDate Tests ---
test('Valid date MM/DD/YYYY: 12/25/2024', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('Valid date M/D/YYYY: 1/5/2000', () => {
  expect(isDate('1/5/2000')).toBe(true);
});

test('Invalid date in wrong format: 2024-12-25', () => {
  expect(isDate('2024-12-25')).toBe(false);
});

test('Invalid date with too many digits: 123/456/7890', () => {
  expect(isDate('123/456/7890')).toBe(false);
});

// --- isHexColor Tests ---
test('Valid short hex with #: #abc', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('Valid long hex without #: a1b2c3', () => {
  expect(isHexColor('a1b2c3')).toBe(true);
});

test('Invalid hex with too many characters: #1234', () => {
  expect(isHexColor('#1234')).toBe(false);
});

test('Invalid hex with letters out of range: #GGGGGG', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
