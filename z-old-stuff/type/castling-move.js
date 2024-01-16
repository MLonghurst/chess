import { Piece } from '../../piece/piece-1.js';
import { Move } from '../move-1.js';

export class CastlingMove extends Move {
  #squares;

  constructor({ squares, move: { originSquare, destinationSquare, promotedPiece }}) {
    this.#squares = squares;
    super({ originSquare, destinationSquare, promotedPiece });
  }

  getSquareUpdates() {
    return [
      { square: this.originSquare, piece: null },
      { square: this.destinationSquare, piece: this.originSquare.piece },
      { square: this.getRookOriginSquare(), piece: null },
      { square: this.getRookDestinationSquare(), piece: this.getRook() },
    ];
  }

  getRook() {
    return Piece.create({ type: 'rook', color: this.originSquare.piece.color });
  }

  getRookOriginSquare() {
    return this.#squares.getSquare({ rank: this.getRookRank(), file: this.getRookOriginSquareFile()});
  }

  getRookDestinationSquare() {
    return this.#squares.getSquare({ rank: this.getRookRank(), file: this.getRookDestinationSquareFile()});
  }

  getRookRank() {
    return this.originSquare.piece.color === 'white' ? 1 : 8;
  }

  getRookOriginSquareFile() {
    return this.getCastlingType() === 'queenside' ? 1 : 8. 
  }

  getRookDestinationSquareFile() {
    return this.getCastlingType() === 'queenside' ? 4 : 6. 
  }

  getCastlingType() {
    return this.destinationSquare.file === 3 ? 'queenside' : 'kingside';
  }
}