import { Piece } from '../piece.js';

export class Rook extends Piece {
  constructor({ color, position }) {
    super({ type: 'rook', color, position });
    this.moveActions = ['moveRegularly'];
    this.movesWithPromotion = false;
  }

  getCompassPoints() {
    return ['N', 'E', 'S', 'W'];
  }

  getRange() {
    return { minimum: 1, maximum: 7 }
  }

  getAlgorithm(action) {
    return (action === 'attack') ? ['isEmpty', 'hasPiece'] : ['isEmpty', this.hasEnemyPieceProperty];
  }
}