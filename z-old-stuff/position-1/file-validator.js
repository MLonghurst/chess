export class FileValidator {
  static validateFile(file) {
    if(!this.isValidFile(file)) throw new Error(`Invalid file: ${file}.`);
  }

  static isValidFile(file) {
    return Number.isInteger(file) && file >= 1 && file <= 8;
  }
}