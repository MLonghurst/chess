import { Squares } from '.squares.js';

export class board {
  constructor() {
    this.squares = new Squares(this);
  }

  importFen(fen) {

  }
}