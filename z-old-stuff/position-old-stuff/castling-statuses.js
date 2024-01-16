import { EnhancedArray } from '/projects/utilities/enhanced-array/enhanced-array.js';
import { CastlingStatus } from "../castling-status.js";

export class CastlingStatuses extends EnhancedArray {
  constructor(position) {
    super(); 
    this.push(...this.#getCastlingStatuses(position));
  } 

  /* updateAfterFenImport({ fenCastlingAvailability, squares }) {
    this.forEach(castlingStatus => castlingStatus.updateFromFen(fen));
  }

  updateAfterMove(squares) {
    this.forEach(castlingStatus => castlingStatus.updateAfterMove());
  } */

  // initialization

  #getCastlingStatuses(position) {
    const colors = ['white', 'black'];
    const types = ['kingside', 'queenside'];
    return types.map(type => colors.map(color => new CastlingStatus({ type, color, position }))).flat();
  }

  // utilities 

  getCastlingStatus({ type, color }) {
    return this.find(castlingStatus => castlingStatus.type === type && castlingStatus.color === color);
  }
}