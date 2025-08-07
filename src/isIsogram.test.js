'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  // eslint-disable-next-line max-len
  it('returns true for a word with no repeated letters like "background"', () => {
    expect(isIsogram('background')).toBeTruthy();
  });

  it('returns false for a word with duplicate letters like "tree"', () => {
    expect(isIsogram('tree')).toBeFalsy();
  });

  it('returns true for an empty string input', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('returns false if the word has repeated letters, e.g. "Apple"', () => {
    expect(isIsogram('Apple')).toBeFalsy();
  });
});
