import { RankValidator } from './rank-validator.js';
import { FileValidator } from './file-validator.js';
import { Piece } from '../piece/piece.js';

export class Square {
  constructor({ rank, file }) {
    RankValidator.validateRank(rank);
    FileValidator.validateFile(file);
    this.rank = rank;
    this.file = file;
    this.piece = null;
    this.isChecked = false;
    this.inEnPassantSquare = false;
  }

  updateFromPieceCharacter(pieceCharacter) {
    return Piece.createFromPieceCharacter(pieceCharacter);
  }

  /* updatePieceFromFenSquare(fenSquare) {
    if(fenSquare.fenPiece === null) this.piece = null;
    else this.piece = PieceFactory.createPiece(fenSquare.fenPiece);
  } */

  getAttackedSquares(position) {
    if (this.isEmpty) return [];
    else return this.piece.getAttackedSquares({ position, square: this });
  }

  getDestinationSquares(position) {
    if (this.isEmpty) return [];
    else return this.piece.getDestinationSquares({ position, square: this });
  }

  get fileLetter() {
    
  }

  get coordinateInAlgebraicNotation() {
    const fileLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const fileLetter =  fileLetters[this.file - 1];
    return `${this.fileLetter}${this.rank}`;
  }

  get isEmpty() {
    return this.piece === null;
  }

  get hasWhitePiece() {
    return !this.isEmpty && this.piece.color === 'white';
  }

  get hasBlackPiece() {
    return !this.isEmpty && this.piece.color === 'black';
  }

  // reset 

  reset() {
    this.resetPiece();
    this.resetIsChecked();
    this.resetIsEnPassantSquare();
  }

  resetPiece() {
    this.piece = null;
  }

  resetIsChecked() {
    this.isChecked = false;
  }

  resetIsEnPassantSquare() {
    this.inEnPassantSquare = false;
  }

  // distance and direction computations

  getSquaresInDirection({ squares, direction }){
    return squares.filter(square => this.squareIsInDirection({ direction, square })).sort((square1, square2) => this.sortSquaresByDistanceToSquare(square1, square2));
  }

  squareIsInDirection({ direction, square }) {
    return this.squareSharesGradient({ direction, square }) && 
      this.squareIsInLatitudinalDirection({ direction, square }) && 
      this.squareIsInLongitudinalDirection({ direction, square });
  }

  squareSharesGradient({ direction, square }) {
    return (square.file - this.file) * direction.rank === (square.rank - this.rank) * direction.file;
  };

  squareIsInLatitudinalDirection({ direction, square }) {
    return Math.sign(square.file - this.file) === Math.sign(direction.file);
  }

  squareIsInLongitudinalDirection ({ direction, square }) {
    return Math.sign(square.rank - this.rank) === Math.sign(direction.rank);
  }

  getLatitudinalDistanceToSquare(square) {
    return Math.abs(square.file - this.file);
  }

  getLongitudinalDistanceToSquare(square) {
    return Math.abs(square.rank - this.rank);
  }

  getDistanceToSquare(square) {
    return this.getLongitudinalDistanceToSquare(square) + this.getLatitudinalDistanceToSquare(square);
  }

  sortSquaresByDistanceToSquare(square1, square2) {
    return this.getDistanceToSquare(square1) - this.getDistanceToSquare(square2)
  }
}