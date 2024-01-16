import { RankNumber } from './rank-number.js';

describe('RankNumber Class', () => {
  test('should create a valid RankNumber', () => {
    expect(() => new RankNumber(4)).not.toThrow();
  });

  test('should throw an error for invalid rank number (too low)', () => {
    expect(() => new RankNumber(0)).toThrow("Invalid rank number: 0");
  });

  test('should throw an error for invalid rank number (too high)', () => {
    expect(() => new RankNumber(9)).toThrow("Invalid rank number: 9");
  });

  test('should throw an error for non-integer values', () => {
    expect(() => new RankNumber(4.5)).toThrow("Invalid rank number: 4.5");
  });

  test('should return correct value for a valid rank number', () => {
    const rank = new RankNumber(3);
    expect(rank.valueOf()).toBe(3);
  });
});