export class SquareData {
  constructor({ rank, file, pieceData = null, isEnpassantSquare = false }) {
    this.rank = rank;
    this.file = file;
    this.pieceData = pieceData;
    this.isEnpassantSquare = isEnpassantSquare;
  }

  static createFromCharacterAndSquareIndex(character, squareIndex) {
    return new Square({ 
      rank: SquareData.#getRankFromSquareIndex(squareIndex), 
      file: SquareData.#getFileFromSquareIndex(squareIndex), 
      pieceData: SquareData.#getPieceDataFromCharacter(character)
    });
  }

  static #getRankFromSquareIndex(squareIndex) {
    return 8 - Math.floor(squareIndex / 8);
  }

  static #getFileFromSquareIndex(squareIndex) {
    return (squareIndex % 8) + 1;
  }

  static #getPieceDataFromCharacter(character) {
    const characterToPieceData = {
      K: { type: 'king', color: 'white' },
      Q: { type: 'queen', color: 'white' },
      R: { type: 'rook', color: 'white' },
      B: { type: 'bishop', color: 'white' },
      N: { type: 'knight', color: 'white' },
      P: { type: 'pawn', color: 'white' },
      k: { type: 'king', color: 'black' },
      q: { type: 'queen', color: 'black' },
      r: { type: 'rook', color: 'black' },
      b: { type: 'bishop', color: 'black' },
      n: { type: 'knight', color: 'black' },
      p: { type: 'rook', color: 'black' },
      1: null
    }
    return SquareData.characterToPieceData[character]
  }
}






