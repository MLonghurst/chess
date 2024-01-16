import { EnhancedArray } from '../../../utilities/enhanced-array/enhanced-array.js';
import { Square } from './square.js';

export class Squares extends EnhancedArray {
  constructor() {
    super();
    this.push(...this.#getSquares());
  }

  #getSquares() {
    const files = [1, 2, 3, 4, 5, 6, 7, 8];
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
    return ranks.map(rank => files.map(file => new Square({ rank, file }))).flat();
  }

  // update methords

  updateFromFen(fen) {
    const piecePlacement = fen.split(' ')[0];
    const enPassantTargetSquare = fen.split(' ')[3];
    this.#updateFromPiecePlacement(piecePlacement)
    this.#updateFromEnPassantTargetSquare(enPassantTargetSquare);
    this.#updateIsChecked();
  }

  #updateFromPiecePlacement(piecePlacement) {
    const piecePlacementWithOnes = piecePlacement.replace(/[1-8]/g, number => '1'.repeat(number));
    const orderedPieceCharacters = piecePlacementWithOnes.split('/').reverse().join().split('');
    this.forEach((square, i) => square.updateFromPieceCharacter(orderedPieceCharacters[i]));
  }

  #updateFromEnPassantTargetSquare(enPassantTargetSquare) {
    this.forEach(square => square.isEnPassantSquare = square.algebraicCoordinate === enPassantTargetSquare);
  }

  #updateIsChecked() {
    // Do stuff here involing getting attacked squares
  }

  getAttackedSquares(position) {
    const squaresWithPiecesOfInactiveColor = this.getSquaresWithPiecesWithColor(position.inactiveColor);
    const attackedSquares = squaresWithPiecesOfInactiveColor.map(square => square.getAttackedSquares(position)).flat();
    const uniqueAttackedSquares = Array.from(new Set(attackedSquares));
    return uniqueAttackedSquares.sort(this.sortByFile).sort(this.sortByRank); 
  }

  getSquaresWithPiecesWithColor(color) {
    return this.filter(square => square.piece?.color === color)
  }

  sortByFile(square1, square2) {
    return square1.file - square2.file;
  }

  sortByRank(square1, square2) {
    return square1.rank - square2.rank;
  }

  // reset methods 

  #reset() {
    this.forEach(square => square.reset());
  }

  #resetIsChecked() {
    this.forEach(square => square.resetIsChecked());
  }

  #resetIsEnPassantSquare() {
    this.forEach(square => square.resetIsEnPassantSquare());
  }
}