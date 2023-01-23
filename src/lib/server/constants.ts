// Minimum eight characters, at least one letter and one number:
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
export const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const REGEX_PASSWORD_MESSAGE = 'Invalid password, minimum eight characters, and at least one letter and one number';