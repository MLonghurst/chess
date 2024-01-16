export class RankValidator {
  static validateRank(rank) {
    if(!this.isValidRank(rank)) throw new Error(`Invalid rank: ${rank}.`);
  }

  static isValidRank(rank) {
    return Number.isInteger(rank) && rank >= 1 && rank <= 8;
  }
}


