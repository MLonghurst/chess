export class FileNumber extends Number {
  constructor(fileNumber) {
    super(fileNumber);
    this.validate();
  }

  validate() {
    if (!this.isValid()) throw new Error("Invalid file number: " + this.valueOf());
  }

  isValid() {
      const fileNumber = this.valueOf();
      const fileNumberIsValid = Number.isInteger(fileNumber) && fileNumber >= 1 && fileNumber <= 8;
      return fileNumberIsValid;
  }
}

