import { Range } from '../ray/range.js';

export class RaysManager {
  static getRaysFromRoute({ 
    directions = [], 
    range = new Range(1,7), 
    penetration = {
      continue: ['isEmpty', 'hasBlackPiece', 'hasWhitePiece'],
      end: ['hasBlackPiece', 'hasWhitePiece']
    },
    originSquareRanks = [],
    boardConditions = []
  } = {}){
    return directions.map(direction => { direction, range, penetration, originSquareRanks, boardConditions });
  }
}