import { EnhancedArray } from '/projects/utilities/enhanced-array/enhanced-array.js';
import { Square } from '../square.js';

export class Squares extends EnhancedArray {
  constructor(position) {
    super();
    this.push(...this.#getSquares(position))
  }

  // initialization

  #getSquares(position) {
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
    const files = [1, 2, 3, 4, 5, 6, 7, 8];
    return ranks.map(rank => files.map(file => new Square({ rank, file, position }))).flat();
  }

  // utilities 

  getSquare({ rank, file }) {
    return this.find(square => square.rank === rank && square.file === file);
  }
}

/* updateFromFen(fen) {
    this.forEach(square => square.updateFromFen(fen));
  }

  updateFromMove(move) {
    this.forEach(square => square.updateFromMove(move));
  } */



// public methods

  /* updateFromFen(fen) {
    this.push(...this.#getSquaresFromFen(fen));
    this.#updateEnPassantSquareFromFen(fen);
    this.#reinitialize();
  }

  updateFromMove(move) {
    this.#updatePiecesFromMove(move);
    this.#updateEnPassantSquareFromMove(move);
    this.#reinitialize();
  }

  getAttackedSquares(color) {
    const squaresWithPiecesOfOtherColor = this.squares.filter(square => square.piece && square.piece.color !== color)
    const attackedSquares = squaresWithPiecesOfOtherColor.map(square => square.getAttackedSquares()).flat();
    const uniqueAttackedSquares = Array.from(new Set(attackedSquares));
    return uniqueAttackedSquares;
  } */

  // private methods

  

  /* #updateEnPassantSquareFromFen(fen) {
    this.#resetIsEnPassant();
    const enPassantTargetSquare = fen.split(' ')[3];
    this.find(square => square.algebraicCoordinate === enPassantTargetSquare)?.isEnPassantSquare = true;
  } */

  /* #updateEnPassantSquareFromMove(move) {
    this.#resetIsEnPassant();
    this.find(square => square.isSquare(move.enPassantSquare))?.isEnPassant = true;
  } */

