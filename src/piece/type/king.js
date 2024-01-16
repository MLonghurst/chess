import { Piece } from '../piece.js'; 

export class King extends Piece {
  #castlingStatuses;

  constructor({ color, position }) {
    super({ type: 'king', color, position });
    this.#castlingStatuses = position.castlingStatuses;
    this.movesWithPromotion = false;
  }

  get moveActions() {
    const moveActions = ['moveRegularly'];
    if (this.#canCastle('kingside')) moveActions.push('castleKingside');
    if (this.#canCastle('queenside')) moveActions.push('castleQueenside');
    return moveActions;
  }

  getCompassPoints(action) {
    if (action === 'castleKingside') return ['E'];
    if (action === 'castleQueenside') return ['W'];
    return ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  }

  getRange(action) {
    if (action === 'castleKingside' || action === 'castleQueenside') return { minimum: 2, maximum: 2 };
    return { minimum: 1, maximum: 1 };
  }

  getAlgorithm(action) {
    if (action === 'attack') return ['isEmpty', 'hasPiece'];
    if (action === 'castleKingside' || action === 'castleQueenside') return ['isEmpty'];
    return ['isEmpty', this.hasEnemyPieceProperty];
  }

  // initialization

  #canCastle(castlingType) {
    const castlingStatus = this.#castlingStatuses.find(({ type, color}) => type === castlingType && color === this.color)
    return castlingStatus.isLegal();
  }
}