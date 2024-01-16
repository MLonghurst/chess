import { FileNumberManager } from './file-number-manager.js';

describe('FileNumberManager Class', () => {
  test('should validate a valid file number', () => {
    expect(() => FileNumberManager.validateFileNumber(4)).not.toThrow();
  });

  test('should throw an error for a file number too low', () => {
    expect(() => FileNumberManager.validateFileNumber(0)).toThrow("Invalid file number: 0");
  });

  test('should throw an error for a file number too high', () => {
    expect(() => FileNumberManager.validateFileNumber(9)).toThrow("Invalid file number: 9");
  });

  test('should throw an error for non-integer values', () => {
    expect(() => FileNumberManager.validateFileNumber(4.5)).toThrow("Invalid file number: 4.5");
  });

  test('should throw an error for non-numeric values', () => {
    expect(() => FileNumberManager.validateFileNumber('a')).toThrow("Invalid file number: a");
  });
});