import { CastlingMove } from './type/castling-move.js';
import { PiecePromotionMove } from './type/piece-promotion-move.js';
import { EnPassantMove } from './type/en-passant-move.js';
import { OrdinaryMove } from './type/ordinary-move.js';

export class Move {
  constructor({ originSquare, destinationSquare, promotedPiece }) {
    this.originSquare = originSquare;
    this.destinationSquare = destinationSquare;
    this.promotedPiece = promotedPiece;
  }

  isLegal(position) {
    const positionAfterMove = position.getCopy().move(this);
    return positionAfterMove.isLegal()
  }

  static create({ squares, move }) {
    if (Move.#moveIsCastlingMove(move)) return new CastlingMove({ squares, move });
    if (Move.#moveIsPiecePromotionMove(move)) return new PiecePromotionMove(move);
    if (Move.#moveIsEnPassantMove(move)) return new EnPassantMove({ squares, move });
    return new OrdinaryMove(move);
  } 

  static #moveIsCastlingMove(move) {
    return move.originSquare.piece.type === 'king' && move.originSquare.getDistanceToSquare(destinationSquare) === 2;
  }

  static #moveIsPiecePromotionMove(move) {
    return move.promotedPiece;
  }

  static #moveIsEnPassantMove(move) {
    return move.originSquare.piece.type === 'pawn' && move.destinationSquare.isEnPassantSquare;
  }
}