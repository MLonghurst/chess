import { EnhancedArray } from '/projects/utilities/enhanced-array/enhanced-array.js';
import { Player } from '../player.js';

export class Players extends EnhancedArray {
  #position;

  constructor(position) {
    super();
    this.push(...this.#getPlayers(position));
  }

  #getPlayers(position) {
    return ['white', 'black'].map(color => new Player({ color, position })); 
  }
}

/* updateFromFen(fen) {
  this.forEach(player => player.updateFromFen(fen));
}

updateAfterMove() {
  this.forEach(player => player.updateAfterMove());
} */

