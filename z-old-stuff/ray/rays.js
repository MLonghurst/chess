import { EnhancedArray } from '/projects/utilities/enhanced-array/enhanced-array.js';
import { Ray } from './ray.js'

export class Rays extends EnhancedArray {
  #position;

  constructor({ position, square, directions, range, pathAlgorithm, prerequisites }) {
    super();
    this.#position = position;
    this.square = square;
    this.directions = directions;
    this.range = range;
    this.pathAlgorithm = pathAlgorithm;
    this.prerequisites = prerequisites;
    this.push(...this.#getRays());
  }

  #getRays() {
    return this.directions.map(direction => new Ray({ 
      position: this.#position,
      square: this.square,
      direction, 
      range: this.range, 
      pathAlgorithm: this.pathAlgorithm,
      prerequisites: this.prerequisites
    }));
  }

  getSquares({ position, squares, square }) {
    return this.map(ray => ray.getSquares({ position, squares, square })).flat();
  }
}