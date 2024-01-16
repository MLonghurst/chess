import { FenPiece } from './fen-piece.js';

export class FenSquare {
  constructor({ character, rank, file }) {
    this.rank = rank;
    this.file = file;
    this.fenPiece = this.#getFenPieceFromCharacter(character);
  }

  #getFenPieceFromCharacter(character) {
    if (character === '0') return null;
    else return new FenPiece(character);
  }
}