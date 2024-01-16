import { Piece } from '../piece.js';

export class Queen extends Piece {
  constructor({ color, position }) {
    super({ type: 'queen', color, position });
    this.moveActions = ['moveRegularly'];
    this.movesWithPromotion = false;
  }

  getCompassPoints() {
    return ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  }

  getRange() {
    return { minimum: 1, maximum: 7 }
  }

  getAlgorithm(action) {
    return (action === 'attack') ? ['isEmpty', 'hasPiece'] : ['isEmpty', this.hasEnemyPieceProperty];
  }
}