import { position } from './position-instance.js';

export class Player {
  #squares;
  
  constructor({ color, squares }){
    this.color = color;
    this.type = null;
    this.#squares = squares
  }

  updateAfterMove() {
    this.isActive = !this.isActive;
  }

  updateAfterFenImport(fenActiveColor) {
    return this.isActive = fenActiveColor.includes(this.#getFenColorLetter())
  }

  isInCheck() {
    return this.#getSquareWithKing().isChecked;
  }

  #getSquareWithKing() {
    return position.squares.find(square => square.piece?.type === 'king' && square.piece?.color === this.color);
  }

  #getFenColorLetter() {
    return this.color[0];
  }
}
