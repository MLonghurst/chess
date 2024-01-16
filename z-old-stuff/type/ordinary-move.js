import { Move } from "../move-1.js";

export class OrdinaryMove extends Move {
  constructor({ originSquare, destinationSquare, promotedPiece }) {
    super({ originSquare, destinationSquare, promotedPiece });
  }

  getSquareUpdates() {
    return [
      { square: this.originSquare, piece: null },
      { square: this.destinationSquare, piece: this.originSquare.piece }
    ];
  }
}