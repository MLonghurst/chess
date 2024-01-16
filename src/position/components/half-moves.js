export class HalfMoves {
  constructor() {
    this.value = 0; 
  }

  updateFromFen(fen) {
    const halfmoveClock = fen.split(' ')[4];
    this.value = parseInt(halfmoveClock);
  }

  updateFromMove(move) {
    move.piece.type === 'pawn' ? this.value = 0 : this.value++;
  }
}