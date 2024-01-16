export class EnPassant {
  #position;

  constructor(position) {
    this.#position = position;
    this.square = null;
  }

  updateFromFen(fen) {
    const enPassantTargetSquare = fen.split(' ')[3];
    if (enPassantTargetSquare === '-') this.square = null;
    else this.square = this.#position.squares.find(square => square.algebraicCoordinate === enPassantTargetSquare);
  }

  updateFromMove({ origin, destination, piece }) {
    if (piece.type === 'pawn' && origin.rank === 2 && destination.rank === 4) this.square = { rank: 3, file: destination.file };
    else if (piece.type === 'pawn' && origin.rank === 7 && destination.rank === 5) this.square = { rank: 6, file: destination.file };
    else this.square = null;
  }
}