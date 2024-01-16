import { RankNumberManager } from './rank-number-manager.js';

describe('RankNumberManager Class', () => {
  test('should validate a valid rank number', () => {
    expect(() => RankNumberManager.validateRankNumber(4)).not.toThrow();
  });

  test('should throw an error for a rank number too low', () => {
    expect(() => RankNumberManager.validateRankNumber(0)).toThrow("Invalid rank number: 0");
  });

  test('should throw an error for a rank number too high', () => {
    expect(() => RankNumberManager.validateRankNumber(9)).toThrow("Invalid rank number: 9");
  });

  test('should throw an error for non-integer values', () => {
    expect(() => RankNumberManager.validateRankNumber(4.5)).toThrow("Invalid rank number: 4.5");
  });

  test('should throw an error for non-numeric values', () => {
    expect(() => RankNumberManager.validateRankNumber('a')).toThrow("Invalid rank number: a");
  });
});