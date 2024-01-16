import { King } from '../king.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class WhiteKing extends King {
  constructor() {
    super('white');
  }

  getDestinationRays() {
    return [...this.getMainDestinationRays(), ...this.getCastlingKingsideDestinationRays(), ...this.getCastlingQueensideDestinationRays()];
  }

  getMainDestinationRays() {
    return new Rays({
      directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
      range: [1, 7],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece'], 
        end: ['hasBlackPiece', 'hasWhitePiece'] 
      }
    });
  }

  getCastlingKingsideDestinationRays() {
    return new Rays({
      directions: ['E'],
      range: [2, 2],
      prerequisites: [{ position: 'whiteCanCastleKingside' }]
    });
  }

  getCastlingQueensideDestinationRays() {
    return new Rays({
      directions: ['W'],
      range: [2, 2],
      prerequisites: [{ position: 'whiteCanCastleQueenside' }]
    });
  }
}