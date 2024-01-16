import { Rook } from '../rook.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class BlackRook extends Rook {
  constructor() {
    super('black');
  }

  getDestinationRays() {
    return new Rays({
      directions: ['N', 'E', 'S', 'W'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasWhitePiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }
}