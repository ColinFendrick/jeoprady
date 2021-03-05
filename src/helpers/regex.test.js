import { emailRegex, passwordRegex } from './regex';

describe('Testing regex', () => {
  test('Email passes', () => {
    expect(emailRegex('c@a.com')).toEqual(true);
  });

  test('Password passes', () => {
    expect(passwordRegex('abiasdf*97@#')).toEqual(true);
  });
});
