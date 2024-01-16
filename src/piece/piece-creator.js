import { King } from './type/king.js';
import { Queen } from './type/queen.js';
import { Rook } from './type/rook.js';
import { Bishop } from './type/bishop.js';
import { Knight } from './type/knight.js';
import { Pawn } from './type/pawn.js';

export class PieceCreator {
  static createPiece({ piece, position }) {
    if (piece === null) return null;
    const typeToClass = {
      king: King,
      queen: Queen,
      rook: Rook,
      bishop: Bishop,
      knight: Knight,
      pawn: Pawn
    };
    const Class = typeToClass[piece.type];
    return new Class({ type: piece.type, color: piece.color, position }); 
  }

  static createPieceFromCharacter({ character, position }) {
    if(character === '1') return null; 
    const lowerCaseCharacterToType = {
      k: 'king',
      q: 'queen',
      r: 'rook',
      b: 'bishop',
      n: 'knight',
      p: 'pawn'
    };
    const type = lowerCaseCharacterToType[character.toLowerCase()];
    const color = character.toUpperCase() === character ? 'white' : 'black';
    const piece = { type, color };
    return PieceCreator.createPiece({ piece, position }); 
  }
}