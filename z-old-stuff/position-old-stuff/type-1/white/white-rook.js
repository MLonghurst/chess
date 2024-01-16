import { Rook } from '../rook.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class WhiteRook extends Rook {
  constructor() {
    super('white');
  }

  getDestinationRays() {
    return new Rays({
      directions: ['N', 'E', 'S', 'W'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }
}