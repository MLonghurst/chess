import { Square } from './square.js';

export class boardManager {
  static getSquares() {
    const fileNumbers = [8, 7, 6, 5, 4, 3, 2, 1];
    const rankNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const cooordinates = [];
    fileNumbers.forEach(fileNumber => {
      rankNumbers.forEach(rankNumber => {
        cooordinates.push({ fileNumber, rankNumber });
      });
    });
    const squares = coordinates.map(coordinate => new Square(coordinate));
    return squares;
  }
}