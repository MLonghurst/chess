import { Piece } from '../piece-1.js'; 

export class Pawn extends Piece {
  constructor(color) {
    super({ type: 'bishop', color });
  }
}