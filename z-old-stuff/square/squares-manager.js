import { Ranges } from '../route/ranges.js';

export class Ray {
  constructor(board, originalSquare, direction, lengths, penetrationProperties, cessationProperties) {

  }

  getLengths() {
    // returns an array of lengths based on coordinates.
  }

  getPotentialSquares() {
    // returns an array of squares, regardless of what pieces are on them.
  }

  getSquares() {
    const potentialSquares = this.getPotentialSquares();
    const squares = [];
    for (const square of potentialSquares) {
      if(penetrationProperties.some(property => square))
      if (!vector.isValid()) break;

    }
    return squares;
  }
}

export class Vector {
  constructor(board, originSquare, direction, length){
    this.board = board;
    this.originSquare = originSquare;
    this.direction = direction;
    this.length = length;
  }

  isValid() {

  }

  getSquare() {

  }
}

/* static getSquaresFromBoardAndSquareAndRay(board, originSquare, { 
    direction,
    potentialLengths = [],
    penetrationProperties = ['isEmpty', 'hasBlackPiece', 'hasWhitePiece'],
    cessationProperties = ['hasBlackPiece', 'hasWhitePiece']
  } = {}) {
    const squares = [];
    for (const range of ranges) {
      const ray = new Ray(board, originSquare, direction, range, penetrationProperties, cessationProperties);
      
    }
    return squares;
  }
  
  
  addCoordinates(coordinate1, coordinate2) {
    if (coordinate1.length !== 2 || coordinate2.length !== 2) throw new Error('Arrays must be of the same length');
    return [coordinate1[0] + coordinate2[0], coordinate1[1] + coordinate2[1]];
  } */
