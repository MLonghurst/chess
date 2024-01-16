import { Pawn } from '../pawn.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class BlackPawn extends Pawn {
  constructor() {
    super('black');
  }

  getAttackRays() {
    return new Rays ({
      directions: ['SE', 'SW'],
      range: [1, 1],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece', 'hasWhitePiece']
      }
    });
  }

  /* getDestinationRoutes() {
    return [{
      directions: ['NE', 'SE', 'SW', 'NW'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    }];
  } */
}