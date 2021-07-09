/* eslint-disable require-jsdoc, max-len */

export function checkPasswordLength(password) {
  return (password.length > 6) && (password.length < 10);
}

export function checkPasswordContainsSpace(password) {
  return !password.includes(' ');
}

export function checkEmailValid(email) {
  const emailPattern = new RegExp(/\S+@\S+\.\S+/);
  return emailPattern.test(email);
}
