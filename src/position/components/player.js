export class Player {
  #position;
  
  constructor({ color, position }){
    this.#position = position;
    this.color = color;
    this.isActive = color === 'white';
  }

  // updates

  updateFromFen(fen) {
    const fenActiveColorLetter = fen.split(' ')[1];
    this.isActive = this.color[0] === fenActiveColorLetter;
  }

  updateAfterMove() {
    this.isActive = !this.isActive;
  }

  // squares

  getSquaresUnderAttack() { 
    const squaresUnderAttack = this.getOtherPlayer().getPieces().map(piece => piece.getAttackedSquares()).flat();
    const uniqueSquaresUnderAttack = [...new Set(squaresUnderAttack)];
    return uniqueSquaresUnderAttack.sort((s1, s2) => s1.file - s2.file).sort((s1, s2) => s1.rank - s2.rank);
  }

  getMoves() {
    return this.getPieces().map(piece => piece.getMoves()).flat();
  }

  isInCheck() { 
    return this.getSquaresUnderAttack().some(square => square.piece?.type === 'king' && square.piece?.color === this.color);
  }

  // utilities

  getPieces() {
    return this.#position.squares.filter(square => square.piece?.color === this.color).map(square => square.piece);
  }

  getOtherPlayer() {
    return this.#position.players.find(player => player.color !== this.color);
  }
}
