import { Knight } from '../knight.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class BlackKnight extends Knight {
  constructor() {
    super('black');
  }

  getDestinationRays() {
    return new Rays({
      directions: ['NNE', 'NEE', 'SEE', 'SSE', 'SSW', 'SWW', 'NWW', 'NNW'],
      range: [1, 1],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasWhitePiece']
      }
    });
  }
}