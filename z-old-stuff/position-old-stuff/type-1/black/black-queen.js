import { Queen } from '../queen.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class BlackQueen extends Queen {
  constructor() {
    super('black');
  }

  getDestinationRays() {
    return new Rays({
      directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasWhitePiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }
}