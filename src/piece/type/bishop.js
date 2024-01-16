import { Piece } from '../piece.js'; 

export class Bishop extends Piece {
  constructor({ color, position }) {
    super({ type: 'bishop', color, position });
    this.moveActions = ['moveRegularly'];
    this.movesWithPromotion = false;
  }

  getCompassPoints() {
    return ['NE', 'SE', 'SW', 'NW'];
  }

  getRange() {
    return { minimum: 1, maximum: 7 }
  }

  getAlgorithm(action) {
    return (action === 'attack') ? ['isEmpty', 'hasPiece'] : ['isEmpty', this.hasEnemyPieceProperty];
  }
}