import { SquaresManager } from './squares-manager.js';

export class PenetrationSquares extends Array {
  #squares;
  #originSquare;
  #direction;
  #range;
  #penetration;
  
  constructor({ squares, originSquare, direction, range, penetration }) {
    super();
    this.#squares = squares;
    this.#originSquare = originSquare;
    this.#direction = direction;
    this.#range = range;
    this.#penetration = penetration;
    this.initialize();
  }

  initialize() {
    const squaresInDirectionOfOriginSquare = SquaresManager.getSquaresInDirectionOfOriginSquare(this.#squares, this.#originSquare, this.#direction);
    const squaresInDirectionOfOriginSquareAndInRange = SquaresManager.getSquaresInRange(squaresInDirectionOfOriginSquare, this.#range);
    const penetrationSquares = SquaresManager.getPenetrationSquares(squaresInDirectionOfOriginSquareAndInRange, this.#penetration);
    this.push(...penetrationSquares);
  }
}