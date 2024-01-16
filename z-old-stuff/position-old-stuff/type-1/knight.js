import { Piece } from '../piece-1.js'; 
import { Rays } from '../../ray-1/rays.js';

export class Knight extends Piece {
  constructor(color) {
    super({ type: 'bishop', color });
  }

  getAttackRays() {
    return new Rays({
      directions: ['NNE', 'NEE', 'SEE', 'SSE', 'SSW', 'SWW', 'NWW', 'NNW'],
      range: [1, 1],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece', 'hasWhitePiece']
      }
    });
  }
}