import { EnhancedArray } from '../../../utilities/enhanced-array/enhanced-array.js';
import { Ray } from './ray.js'
import { Directions } from './directions.js';
import { Range } from './range.js';
import { PathAlgorithm } from './path-algorithm.js';
import { Prerequisites } from './prerequisites.js';

export class Rays extends EnhancedArray {
  #directions;
  #range;
  #pathAlgorithm;
  #prerequisites;

  constructor({ 
    directions: directionCodes = [], 
    range: rangeInShorthandForm = [0, 0], 
    pathAlgorithm: pathAlgorithmInShorthandForm = { continue: [], end: [] }, 
    prerequisites: prerequisitesInShorthandForm = []
  } = {}) {
    super();
    this.#directions = new Directions(directionCodes);
    this.#range = new Range(rangeInShorthandForm);
    this.#pathAlgorithm = new PathAlgorithm(pathAlgorithmInShorthandForm);
    this.#prerequisites = new Prerequisites(prerequisitesInShorthandForm);
    this.push(...this.#getRays());
  }

  #getRays() {
    return this.#directions.map(direction => new Ray({ 
      direction, 
      range: this.#range, 
      pathAlgorithm: this.#pathAlgorithm,
      prerequisites: this.#prerequisites
    }));
  }

  getSquares({ position, squares, square }) {
    return this.map(ray => ray.getSquares({ position, squares, square })).flat();
  }
}