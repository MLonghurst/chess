export class CastlingStatus {
  #position;

  constructor({ type, color, position }) {
    this.#position = position;
    this.type = type; 
    this.color = color;
    this.isAvailable = false;
  }

  // updates

  updateFromFen(fen) {
    const fenCastlingAvailability = fen.split(' ')[2];
    this.isAvailable = fenCastlingAvailability.includes(this.fenLetter);
  }

  updateAfterMove() {
    this.isAvailable = this.isAvailable && this.#kingIsOnHomeSquare() && this.#rookIsOnHomeSquare();
  }

  // legality

  isLegal() {
    const isLegal = this.isAvailable && this.#kingIsOnHomeSquare() && this.#rookIsOnHomeSquare() &&this.#squaresAlongKingRouteAreUnchecked() && this.#squaresBetweenKingAndRookAreEmpty();
    return isLegal;
  }

  // piece placement

  #kingIsOnHomeSquare() {
    const pieceOnKingHomeSquare = this.#getKingHomeSquare().piece;
    return pieceOnKingHomeSquare?.type === 'king' && pieceOnKingHomeSquare?.color === this.color;
  }

  #rookIsOnHomeSquare() {
    const pieceOnRookHomeSquare = this.#getRookHomeSquare().piece;
    return pieceOnRookHomeSquare?.type === 'rook' && pieceOnRookHomeSquare?.color === this.color;
  }

  #squaresAlongKingRouteAreUnchecked() {
    const player = this.#position.players.find(player => player.color === this.color);
    return player.getSquaresUnderAttack().every(squareUnderAttack => !this.#getSquaresAlongKingRoute().includes(squareUnderAttack));
  }

  #squaresBetweenKingAndRookAreEmpty() {
    return this.#getSquaresBetweenKingAndRook().every(square => square.isEmpty);
  }

  // squares

  #getSquaresAlongKingRoute() {
    const files = this.type === 'kingside' ? [5, 6, 7] : [3, 4, 5];
    return files.map(file => this.#position.squares.find(square => square.rank === this.#getRank() && square.file === file));
  }

  #getSquaresBetweenKingAndRook() {
    const files = this.type === 'kingside' ? [6, 7] : [2, 3, 4];
    return files.map(file => this.#position.squares.find(square => square.rank === this.#getRank() && square.file === file));
  }

  #getKingHomeSquare() {
    return this.#position.squares.find(square => square.rank === this.#getRank() && square.file === 5);
  }

  #getRookHomeSquare() {
    const file = this.type === 'kingside' ? 8 : 1;
    return this.#position.squares.find(square => square.rank === this.#getRank() && square.file === file);
  }

  #getRank() {
    return this.color === 'white' ? 1 : 8;
  }

  // fen

  get fenLetter() {
    const typeToColorToFenLetter = {
      kingside: {
        white: 'K',
        black: 'Q'
      }, 
      queenside: {
        white: 'k',
        black: 'q'
      }
    }
    return typeToColorToFenLetter[this.type][this.color];
  }
}