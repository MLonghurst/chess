export class RankNumber extends Number {
  constructor(rankNumber) {
    super(rankNumber.valueOf());
    this.validate();
  }

  validate() {
    if (!this.isValid()) throw new Error("Invalid rank number: " + this.valueOf());
  }

  isValid() {
      const rankNumber = this.valueOf();
      const rankNumberIsValid = Number.isInteger(rankNumber) && rankNumber >= 1 && rankNumber <= 8;
      return rankNumberIsValid;
  }
}