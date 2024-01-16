import { Move } from "../move-1";
import { Piece } from "../../piece/piece-1";

export class PiecePromotionMove extends Move {
  constructor({ originSquare, destinationSquare, promotedPiece }) {
    super({ originSquare, destinationSquare, promotedPiece })
  }

  getSquareUpdates() {
    return [
      { square: this.originSquare, piece: null },
      { square: this.destinationSquare, piece: promotedPiece }
    ]
  }
}