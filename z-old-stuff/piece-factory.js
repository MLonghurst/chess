import { WhiteKing } from '../piece/type/white/white-king.js'
import { WhiteQueen } from '../piece/type/white/white-queen.js'
import { WhiteRook } from '../piece/type/white/white-rook.js'
import { WhiteBishop } from '../piece/type/white/white-bishop.js'
import { WhiteKnight } from '../piece/type/white/white-knight.js'
import { WhitePawn } from '../piece/type/white/white-pawn.js'
import { BlackKing } from '../piece/type/black/black-king.js'
import { BlackQueen } from '../piece/type/black/black-queen.js'
import { BlackRook } from '../piece/type/black/black-rook.js'
import { BlackBishop } from '../piece/type/black/black-bishop.js'
import { BlackKnight } from '../piece/type/black/black-knight.js'
import { BlackPawn } from '../piece/type/black/black-pawn.js'

export class PieceFactory {
  static createPiece({ type, color }) {
    const PieceClass = PieceFactory.getPieceClass({ type, color });
    return new PieceClass();
  }

  static getPieceClass({ type, color }) {
    return PieceFactory.pieceClassesByColorAndType[color][type];
  }

  static colorToTypeToClassName = {
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
}

  /* static typeToColorToClass = new Map([
    ['king',    PieceFactory.colorToKingClass],
    ['queen',   PieceFactory.colorToQueenClass],
    ['rook',    PieceFactory.colorToRookClass],
    ['bishop',  PieceFactory.colorToBishopClass],
    ['knight',  PieceFactory.colorToKnightClass],
    ['pawn',    PieceFactory.colorToPawnClass]
  ]);
  
  static colorToKingClass = new Map([
    ['white', WhiteKing],
    ['black', BlackKing]
  ]);

  static colorToQueenClass = new Map([
    ['white', WhiteQueen],
    ['black', BlackQueen]
  ]);

  static colorToRookClass = new Map([
    ['white', WhiteRook],
    ['black', BlackRook]
  ]);

  static colorToBishopClass = new Map([
    ['white', WhiteBishop],
    ['black', BlackBishop]
  ]);

  static colorToKnightClass = new Map([
    ['white', WhiteKnight],
    ['black', BlackKnight]
  ]);

  static colorToPawnClass = new Map([
    ['white', WhitePawn],
    ['black', BlackPawn]
  ]); */