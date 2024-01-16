import { FileNumber } from './file-number.js';

describe('FileNumber Class', () => {
  test('should create a valid FileNumber', () => {
    expect(() => new FileNumber(4)).not.toThrow();
  });

  test('should throw an error for invalid file number (too low)', () => {
    expect(() => new FileNumber(0)).toThrow("Invalid file number: 0");
  });

  test('should throw an error for invalid file number (too high)', () => {
    expect(() => new FileNumber(9)).toThrow("Invalid file number: 9");
  });

  test('should throw an error for non-integer values', () => {
    expect(() => new FileNumber(4.5)).toThrow("Invalid file number: 4.5");
  });

  test('should return correct value for a valid file number', () => {
    const file = new FileNumber(3);
    expect(file.valueOf()).toBe(3);
  });
});