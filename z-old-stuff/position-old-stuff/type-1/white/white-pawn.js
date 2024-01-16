import { Pawn } from '../pawn.js'; 
import { Rays } from '../../../ray-1/rays.js';

export class WhitePawn extends Pawn {
  constructor() {
    super('white');
  }

  getAttackRays() {
    return new Rays ({
      directions: ['NE', 'NW'],
      range: [1, 1],
      pathAlgorithm: { 
        continue: ['isEmpty', 'hasBlackPiece', 'hasWhitePiece']
      }
    });
  }

  getDestinationRays() {
    return [
      this.getMainDestinationRays(),
      this.getStartingRankDestinationRays(),
      this.getMainCaptureDestinationRays()
    ];
  }

  getMainDestinationRays() {
    return new Rays ({
      directions: ['N'],
      range: [1, 1],
      pathAlgorithm: { 
        continue: ['isEmpty']
      },
      prerequisites: [{ originSquareRanks: [3, 4, 5, 6, 7] }]
    });
  }

  getStartingRankDestinationRays() {
    return new Rays ({
      directions: ['N'],
      range: [1, 2],
      pathAlgorithm: { 
        continue: ['isEmpty']
      },
      prerequisites: [{ originSquareRanks: [2] }]
    });
  }

  getMainCaptureDestinationRays() {
    return new Rays ({
      directions: ['NE', 'SE'],
      range: [1, 1],
      pathAlgorithm: { 
        continue: ['hasBlackPiece']
      }
    });
  }

  getEnPassantCaptureDestinationRays() {
    return new Rays ({
      directions: ['NE', 'SE'],
      range: [1, 1],
      pathAlgorithm: { 
        continue: ['isEnPassantSquare']
      },
      prerequisites: [{ activeColor: 'white' }]
    });
  }
}