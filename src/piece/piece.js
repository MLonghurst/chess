import { Direction } from './direction.js';
import { Move } from '../piece/move.js';

export class Piece {
  #position;

  constructor({ type, color, position }) {
    this.#position = position;
    this.type = type;
    this.color = color;
  }

  getAttackedSquares() {
    return this.#getSquares('attack');
  }

  getMoves(){
    const destinations = this.moveActions.map(moveAction => this.#getSquares(moveAction)).flat();
    const promotionPieces = this.movesWithPromotion ? this.getPromotionPieces() : [null];
    return destinations.map(destination => promotionPieces.map(promotionPiece => new Move({ 
      origin: this.getSquare(),
      destination,
      promotionPiece
    }))).flat();
  }

  #getSquares(action) {
    const directions = this.getCompassPoints(action).map(compassPoint => new Direction(compassPoint));
    return directions.map(direction => this.getSquare().getSquaresFromPath({ 
      direction, 
      range: this.getRange(action), 
      algorithm: this.getAlgorithm(action)
    })).flat();
  }

  // utilities

  getSquare() {
    return this.#position.squares.find(square => square.piece === this);
  }

  get hasEnemyPieceProperty() {
    return this.color === 'white' ? 'hasBlackPiece' : 'hasWhitePiece';
  }
}