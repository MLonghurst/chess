import { PieceCreator } from '../../piece/piece-creator.js';

export class Square {
  #position;

  constructor({ rank, file, position }) {
    this.#position = position;
    this.rank = rank;
    this.file = file;
    this.piece = null;
  }

  updateFromFen(fen) {
    const piecePlacement = fen.split(' ')[0];
    const piecePlacementWithOnes = piecePlacement.replace(/[1-8]/g, number => '1'.repeat(number));
    const ranksOfCharacters = piecePlacementWithOnes.split('/').reverse();
    const character = ranksOfCharacters[this.rank - 1][this.file - 1];
    this.piece = PieceCreator.createPieceFromCharacter({ character, position: this.#position });
  }

  updateFromMove(move) {
    move.squareUpdates.forEach(squareUpdate => {
      const square = this.#position.squares.find(({ rank, file }) => squareUpdate.rank === rank && squareUpdate.file === file);
      square.piece = PieceCreator.createPiece({ piece: squareUpdate.piece, position: this.#position });
    });
  }

  // piece

  get isEmpty() {
    return this.piece === null;
  }

  get hasPiece() {
    return !this.isEmpty;
  }

  get hasWhitePiece() {
    return !this.isEmpty && this.piece.color === 'white';
  }

  get hasBlackPiece() {
    return !this.isEmpty && this.piece.color === 'black';
  }

  get isEnPassantSquare() {
    const enPassantSquare = this.#position.enPassant.square;
    return this.rank === enPassantSquare?.rank && this.file === enPassantSquare?.file;
  }

  // path

  getSquaresFromPath({ direction, range, algorithm }) {
    const squares = [];
    for (const square of this.getSquaresInDirectionByRange({ direction, range })) {
      if (algorithm.some(property => square[property])) squares.push(square);
      if (square.hasPiece) break;
    }
    return squares;
  }

  getSquaresInDirectionByRange({ direction, range }) {
    return this.getSquaresInDirection(direction).slice(range.minimum - 1, range.maximum);
  }

  getSquaresInDirection(direction){
    return this.#position.squares.filter(square => this.squareIsInDirection({ direction, square })).sort(this.sortSquaresByDistanceToSquare.bind(this));
  }

  // direction 

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

  // distance 

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

  // utilities

  get algebraicCoordinate() {
    const fileLetter = 'abcdefgh'[this.file - 1];
    return `${fileLetter}${this.rank}`;
  }

  get character() {
    if (this.piece === null) return '1';
    const typeToLowerCaseCharacter = {
      king: 'k',
      queen: 'q',
      rook: 'r',
      bishop: 'b',
      knight: 'n',
      pawn: 'p',
    };
    const lowerCaseCharacter = typeToLowerCaseCharacter[this.piece.type];
    return this.piece.color === 'white' ? lowerCaseCharacter.toUpperCase() : lowerCaseCharacter;
  }
}