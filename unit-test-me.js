// matches valid phone numbers
export function isPhoneNumber(phoneNumber) {
  // Added ^ and $ to ensure the ENTIRE string is a phone number
  const phoneRegex = /^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;
  return phoneRegex.test(phoneNumber);
}

// matches valid emails
export function isEmail(email) {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
}

/**
 * The password's first character must be a letter, it must contain at least 4 characters 
 * and no more than 15 characters and no characters other than letters, numbers 
 * and the underscore may be used
 */
export function isStrongPassword(password) {
  const pwRegex = /^[a-zA-Z]\w{3,14}$/;
  return pwRegex.test(password);
}

// matches dates of the form XX / XX / YYYY
export function isDate(date) {
  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  return dateRegex.test(date);
}

// Matches valid 3 or 6 character hex codes
export function isHexColor(color) {
  const colorRegex = /^#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
  return colorRegex.test(color);
}