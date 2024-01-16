import { Queen } from '../queen.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class WhiteQueen extends Queen {
  constructor() {
    super('white');
  }

  getDestinationRays() {
    return new Rays({
      directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }
}