import { WhiteKing } from './type-1/white/white-king.js'
import { WhiteQueen } from './type-1/white/white-queen.js'
import { WhiteRook } from './type-1/white/white-rook.js'
import { WhiteBishop } from './type-1/white/white-bishop.js'
import { WhiteKnight } from './type-1/white/white-knight.js'
import { WhitePawn } from './type-1/white/white-pawn.js'
import { BlackKing } from './type-1/black/black-king.js'
import { BlackQueen } from './type-1/black/black-queen.js'
import { BlackRook } from './type-1/black/black-rook.js'
import { BlackBishop } from './type-1/black/black-bishop.js'
import { BlackKnight } from './type-1/black/black-knight.js'
import { BlackPawn } from './type-1/black/black-pawn.js'

export class Piece {
  #position;
  #square;

  constructor({ type, color, position, square }) {
    this.#position = position;
    this.#square = square;
    this.type = type;
    this.color = color;
  }

  get attackedSquares() {
    const rays = this.getAttackRays();
    const squares = rays.map(ray => ray.getSquares({ position, square })).flat();
    return squares;
  }

  static create(pieceData) {
    if (!pieceData) return null;
    const colorToTypeToClass = {
      white: {
        king: WhiteKing,
        queen: WhiteQueen,
        rook: WhiteRook,
        bishop: WhiteBishop,
        knight: WhiteKnight,
        pawn: WhitePawn
      },
      black: {
        king: BlackKing,
        queen: BlackQueen,
        rook: BlackRook,
        bishop: BlackBishop,
        knight: BlackKnight,
        pawn: BlackPawn
      }
    }
    const Class = colorToTypeToClass[pieceData.color][pieceData.type];
    return new Class();
  }

  static createFromFenCharacter(fenCharacter) {
    const fenCharacterToPieceData = {
      K: { type: 'king', color: 'white' },
      Q: { type: 'queen', color: 'white' },
      R: { type: 'rook', color: 'white' },
      B: { type: 'bishop', color: 'white' },
      N: { type: 'knight', color: 'white' },
      P: { type: 'pawn', color: 'white' },
      k: { type: 'king', color: 'black' },
      q: { type: 'queen', color: 'black' },
      r: { type: 'rook', color: 'black' },
      b: { type: 'bishop', color: 'black' },
      n: { type: 'knight', color: 'black' },
      p: { type: 'rook', color: 'black' },
      1: null
    }
    const pieceData = fenCharacterToPieceData[fenCharacter];
    return Piece.create(pieceData);
  }
}