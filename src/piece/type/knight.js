import { Piece } from '../piece.js'; 

export class Knight extends Piece {
  constructor({ color, position }) {
    super({ type: 'knight', color, position });
    this.moveActions = ['moveRegularly'];
    this.movesWithPromotion = false;
  }

  getCompassPoints() {
    return ['NNE', 'NEE', 'SEE', 'SSE', 'SSW', 'SWW', 'NWW', 'NNW'];
  }

  getRange() {
    return { minimum: 1, maximum: 1 }
  }

  getAlgorithm(action) {
    return (action === 'attack') ? ['isEmpty', 'hasPiece'] : ['isEmpty', this.hasEnemyPieceProperty];
  }
}