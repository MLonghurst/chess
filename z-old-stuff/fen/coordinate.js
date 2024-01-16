export class Coordinate {
  constructor({ rank, file }) {
    this.rank = rank;
    this.file = file;
  }

  static createFromAlgebraicNotation(coordinateInAlgebraicNotation) {
    const fileLetter = coordinateInAlgebraicNotation[0];
    const file = Coordinate.#getFileFromFileLetter(fileLetter);
    const rankString = coordinateInAlgebraicNotation[1];
    const rank = parseInt(rankString);
    return new Coordinate({ rank, file });
  }
  
  static #getFileFromFileLetter(fileLetter) {
    const fileLetterToFile = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8
    };
    return fileLetterToFile[fileLetter];
  }
}