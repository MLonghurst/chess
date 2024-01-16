export class FullMoves {
  constructor() {
    this.value = 1; 
  }

  updateFromFen(fen) {
    const fullmoveNumber = fen.split(' ')[5];
    this.value = parseInt(fullmoveNumber);
  }

  updateFromMove(move) {
    if (move.color === 'black') this.value++;
  }
}