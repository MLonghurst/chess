import { PieceCreator } from '../piece/piece-creator.js';

export class PotentialMoves extends Array {
  constructor({ originSquare, destinationSquares }) {
    super();
    this.originSquare = originSquare;
    this.destinationSquares = destinationSquares;
    this.push(...this.#getPotentialMoves());
  }

  #getPotentialMoves() {
    const promo
    if (this.#requirePromotion()) return this.#getPromotionPieces().map(piece => new PotentialMove({}))
  }

  #getPromotionPieces() {
    return this.#requiresPromotion() ? ['queen', 'rook', 'bishop', 'knight'].map(type => PieceCreator.createPiece({ type, color: this.originSquare.piece.color })) : [null];
  }

  #requirePromotion() {
    const square = this.originSquare;
    const piece = this.originSquare.piece;
    return piece.type === 'pawn' && ((piece.color === 'white' && square.rank === 7) || (piece.color === 'black' && square.rank === 2));
  }

  static get [Symbol.species]() {
    return Array;
  }
}  