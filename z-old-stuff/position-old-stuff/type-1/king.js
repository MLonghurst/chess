import { Piece } from '../piece-1.js'; 
import { Rays } from '../../ray-1/rays.js';

console.log(Piece);

export class King extends Piece {
  constructor(color) {
    super({ type: 'bishop', color });
  }

  getAttackRays() {
    return new Rays({
      directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
      range: [1, 1],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece', 'hasWhitePiece']
      }
    });
  }

  get isInCheck() {
    return position.getAttackedPieces().some(piece => piece === this);
  }
}