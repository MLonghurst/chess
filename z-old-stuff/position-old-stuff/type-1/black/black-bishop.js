import { Bishop } from '../bishop.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class BlackBishop extends Bishop {
  constructor() {
    super('black');
  }

  getDestinationRays() {
    return new Rays({
      directions: ['NE', 'SE', 'SW', 'NW'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasWhitePiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }
}