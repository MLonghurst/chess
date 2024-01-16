import { Knight } from '../knight.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class WhiteKnight extends Knight {
  constructor() {
    super('white');
  }

  getDestinationRays() {
    return new Rays({
      directions: ['NNE', 'NEE', 'SEE', 'SSE', 'SSW', 'SWW', 'NWW', 'NNW'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }
}