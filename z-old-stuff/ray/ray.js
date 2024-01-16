export class Ray {
  #position;

  constructor({ position, square, direction, range, pathAlgorithm, prerequisites }) {
    this.#position = position;
    this.square = square    
    this.direction = direction;
    this.range = range;
    this.pathAlgorithm = pathAlgorithm;
    this.prerequisites = prerequisites;
  }

  get squares() {
    return this.prerequisites.areSatisifed ? this.pathSquares : [];
  }

  get pathSquares() {
    const squaresInDirectionByRange = this.square.getSquaresInDirectionByRange({ direction, range });
    return this.pathAlgorithm.getPathSquares(squaresInDirectionByRange);
  }
}