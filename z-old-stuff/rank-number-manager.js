export class RankNumberManager {
  static validateRankNumber(rankNumber) {
    let rankNumberIsValid = Number.isInteger(rankNumber) && rankNumber >= 1 && rankNumber <= 8;
    if(!rankNumberIsValid) throw new Error("Invalid rank number: " + rankNumber);
  }
}