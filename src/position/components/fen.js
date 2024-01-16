export class Fen {
  #position;

  constructor(position) {
    this.#position = position;
  }

  get value() {
    return [
      this.getPiecePlacement(), 
      this.getActiveColor(), 
      this.getCastlingAvailability(), 
      this.getEnPassantTargetSquare(), 
      this.getHalfmoveClock(), 
      this.getFullmoveNumber()
    ].join(' ');
  }

  getPiecePlacement() {
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
    const ranksOfCharacters = ranks.map(rank => this.#position.squares.filter(square => square.rank === rank).map(square => square.character).join(''));
    const piecePlacementWithOnes = ranksOfCharacters.reverse().join('/');
    const piecePlacement = piecePlacementWithOnes.replace(/1+/g, match => match.length);
    return piecePlacement;
  }

  getActiveColor() {
    const activePlayer = this.#position.players.find(player => player.isActive);
    return activePlayer.color[0];
  }

  getCastlingAvailability() {
    const fenLetters = this.#position.castlingStatuses.filter(castlingStatus => castlingStatus.isAvailable).map(castlingStatus => castlingStatus.fenLetter).join('');
    return fenLetters === '' ? '-' : fenLetters;
  }

  getEnPassantTargetSquare() {
    const enPassantSquare = this.#position.enPassant.square;
    return enPassantSquare ? this.#position.squares.find(({rank, file}) => enPassantSquare.rank === rank && enPassantSquare.file === file).algebraicCoordinate : '-';
  }

  getHalfmoveClock() {
    return this.#position.halfMoves.value;
  }

  getFullmoveNumber() {
    return this.#position.fullMoves.value;
  }
}