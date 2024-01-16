import { Squares } from './squares.js';

export class FenPosition {
  constructor(fen) {
    [this.piecePlacement, this.activeColor, this.castlingAvailability, this.enPassantTargetSquare, this.halfmoveClock, this.fullmoveNumber] = fen.split(' ');
    this.squares = this.#getSquares({ piecePlacement: this.piecePlacement, enPassantTargetSquare: this.enPassantTargetSquare });
    this.enPassantSquare = 
    this.#updateEnPassantSquare()
  }

  #getSquares() {
    return new Squares(this.piecePlacement);
  }

  /* #getEnPassantSquare() {
    return new EnPassantSquare()
  } */
}