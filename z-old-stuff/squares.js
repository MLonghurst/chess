import { Square } from './square.js';

export class Squares extends Array {
  constructor(board) {
    super();
    this.#addSquares(board);
  }

  #addSquares(board) {
    const fileNumbers = [8, 7, 6, 5, 4, 3, 2, 1];
    const rankNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
    fileNumbers.forEach(fileNumber => {
      rankNumbers.forEach(rankNumber => {
        const coordinate = { fileNumber, rankNumber };
        const square = new Square(coordinate, board);
        this.push(square);
      });
    });
  }
}