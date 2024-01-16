import { FileNumberManager } from './file-number-manager.js';
import { RankNumberManager } from './rank-number-manager.js';
import { Piece } from './piece.js';

export class Square {
  constructor({file, rank}) {
    FileNumberManager.validateFileNumber(coordinate.fileNumber);
    RankNumberManager.validateRankNumber(coordinate.rankNumber);
    this.file = file;
    this.rank = rank;
    this.#board = board;
    this.piece = new Piece();
    this.isEmpty = true;
  }

  addPiece(piece) {
    this.piece = piece;
    this.isEmpty = false;
  }

  removePiece() {
    this.piece = new Piece();
    this.isEmpty = true;
  }



  /* get fileLetter() {
    const fileLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const fileLetter = fileLetters[this.fileNumber - 1];
    return fileLetter;
  }

  get coordinateInAlgebraicNotation() {
    const coordinateInAlgebraicNotation = this.fileLetter + this.rankNumber;
    return coordinateInAlgebraicNotation;
  } */
  
  getDirections() {
    const directions = [];
    if (this.rankNumber < 8) directions.push('N');
    if (this.fileNumber < 8) directions.push('E');
    if (this.rankNumber > 1) directions.push('S');
    if (this.fileNumber > 1) directions.push('W');
    if (this.fileNumber < 8 && this.rankNumber < 8) directions.push('NE');
    if (this.fileNumber < 8 && this.rankNumber > 1) directions.push('SE');
    if (this.fileNumber > 1 && this.rankNumber > 1) directions.push('SW');
    if (this.fileNumber > 1 && this.rankNumber < 8) directions.push('NW');
    if (this.fileNumber < 8 && this.rankNumber < 7) directions.push('NNE');
    if (this.fileNumber < 7 && this.rankNumber < 8) directions.push('NEE');
    if (this.fileNumber < 7 && this.rankNumber > 1) directions.push('SEE');
    if (this.fileNumber < 8 && this.rankNumber > 2) directions.push('SSE');
    if (this.fileNumber > 1 && this.rankNumber > 2) directions.push('SSW');
    if (this.fileNumber > 2 && this.rankNumber > 1) directions.push('SWW');
    if (this.fileNumber > 2 && this.rankNumber < 8) directions.push('NWW');
    if (this.fileNumber > 1 && this.rankNumber < 7) directions.push('NNW');
    return directions;
  }
  
  getRays() {
    const directions = this.getDirections();
    directions.forEach(direction => new Ray(this, direction));
  }

}