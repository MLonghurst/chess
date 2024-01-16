export class FileNumberManager {
  static validateFileNumber(fileNumber) {
    let fileNumberIsValid = Number.isInteger(fileNumber) && fileNumber >= 1 && fileNumber <= 8;
    if(!fileNumberIsValid) throw new Error("Invalid file number: " + fileNumber);
  }
}