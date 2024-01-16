export class PathAlgorithm {
  constructor({ continue: continuePathSquareProperties = [], end: endPathSquareProperties = [] }) {
    this.continuePathSquareProperties = continuePathSquareProperties;
    this.endPathSquareProperties = endPathSquareProperties;
  }

  getPathSquares(squares){
    const pathSquares = [];
    for (const square of squares) {
      if (this.#squareIsContinuePathSquare(square)) pathSquares.push(square);
      if (this.#squareIsEndPathSquare(square)) break;
    }
    return pathSquares;
  }

  #squareIsContinuePathSquare(square) {
    return this.continuePathSquareProperties.some(property => square[property]);
  }

  #squareIsEndPathSquare(square) {
    return this.endPathSquareProperties.some(property => square[property]);
  }
}