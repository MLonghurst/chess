import { Piece } from '../piece-1.js'; 
import { Rays } from '../../ray-1/rays.js';

export class Queen extends Piece {
  constructor(color) {
    super({ type: 'bishop', color });
  }

  getAttackRays() {
    return new Rays({
      directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece', 'hasWhitePiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }
}