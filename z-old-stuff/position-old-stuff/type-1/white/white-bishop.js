import { Bishop } from '../bishop.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class WhiteBishop extends Bishop {
  constructor() {
    super('white');
  }

  getDestinationRays() {
    return new Rays({
      directions: ['NE', 'SE', 'SW', 'NW'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }
}