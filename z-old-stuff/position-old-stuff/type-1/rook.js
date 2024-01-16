import { Piece } from '../piece-1.js'; 
import { Rays } from '../../ray-1/rays.js';

export class Rook extends Piece {
  constructor(color) {
    super({ type: 'bishop', color });
  }

  getAttackRays() {
    return new Rays({
      directions: ['N', 'E', 'S', 'W'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece', 'hasWhitePiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }
}