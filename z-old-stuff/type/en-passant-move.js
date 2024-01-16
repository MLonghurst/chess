import { Move } from "../move-1.js";

export class EnPassantMove extends Move {
  #squares;

  constructor({ squares, move: { originSquare, destinationSquare, promotedPiece }}) {
    this.#squares = squares;
    super({ originSquare, destinationSquare, promotedPiece });
  }

  getSquareUpdates() {
    return [
      { square: this.originSquare, piece: null },
      { square: this.destinationSquare, piece: this.originSquare.piece },
      { square: this.#getCapturedPawnSquare(), piece: null}
    ];
  }

  #getCapturedPawnSquare() {
    return this.#squares.getSquare({ rank: this.originSquare.rank, file: this.destinationSquare.file });
  }
}