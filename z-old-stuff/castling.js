class Castling {
  constructor({ type, color }) {
    this.color = color;
    this.type = type; 
    this.isAvailable = true;
    this.isLegal = true;
  }

  updateBecauseOfMove(squares) {
    this.updateIsAvailable(squares);
    this.updateIsLegal(squares); 
  }

  // Is Available

  updateIsAvailable(squares) {
    if (this.isAvailable) this.isAvailable = this.kingIsOnKingSquare(squares) && this.rookIsOnRookSquare(squares);
  }

  kingIsOnKingSquare(squares) {
    return this.getKingSquare(squares).piece?.type === 'king';
  }

  getKingSquare(squares) {
    return squares.getSquare({ rank: this.getKingSquareRank(), file: 5 });
  }

  getKingSquareRank() {
    return this.color === 'white' ? 1 : 8;
  }

  updateIsLegal(squares) {
    return this.isAvailable && this.castlingSquaresAreUnchecked(squares);
  }

  castlingSquaresAreUnchecked(squares) {
    
  }
}