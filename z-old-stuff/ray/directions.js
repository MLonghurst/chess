import { EnhancedArray } from '/projects/utilities/enhanced-array/enhanced-array.js';
import { Direction } from './direction.js';

export class Directions extends EnhancedArray {
  constructor(codes) {
    super();
    this.push(...codes.map(code => new Direction(code)));
  }
}