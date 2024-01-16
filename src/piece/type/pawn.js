import { Piece } from '../piece.js';

export class Pawn extends Piece {
  constructor({ color, position }) {
    super({ type: 'pawn', color, position });
    this.moveActions = ['moveWithoutCapture', 'moveWithCapture'];
  }

  get movesWithPromotion() {
    const square = this.getSquare();
    return this.type === 'pawn' && ((this.color === 'white' && square.rank === 7) || (this.color === 'black' && square.rank === 2));
  }

  getCompassPoints(action) {
    const longitudinalCompassPoint = this.color === 'white' ? 'N' : 'S';
    return action === 'moveWithoutCapture' ? [longitudinalCompassPoint] : [`${longitudinalCompassPoint}E`, `${longitudinalCompassPoint}W`];
  }

  getRange(action) {
    const homeSquareRank = (this.color === 'white') ? 2 : 7;
    const pawnIsOnHomeSquare = this.getSquare().rank === homeSquareRank;
    return action === 'moveWithoutCapture' && pawnIsOnHomeSquare ? { minimum: 1, maximum: 2} : { minimum: 1, maximum: 1 };
  }

  getAlgorithm(action) {
    if (action === 'attack') return ['isEmpty', 'hasPiece'];
    if (action === 'moveWithoutCapture') return ['isEmpty'];
    return [this.hasEnemyPieceProperty, 'isEnPassantSquare']
  }

  getPromotionPieces() {
    return this.movesWithPromotion ? ['queen', 'rook', 'bishop', 'knight'].map(type => ({ type, color: this.color })) : [null];
  }
}