import { SquareData } from './square';
import { EnhancedArray } from '/projects/utilities/enhanced-array/enhanced-array.js';

export class SquaresData extends EnhancedArray {
  #piecePlacement;

  constructor(piecePlacement) {
    super();
    this.#piecePlacement = piecePlacement;
    this.push(...this.#getSquaresData());
  }

  #getSquaresData() {
    return this.#piecePlacement.replace(this.#numbersRegex, this.#replaceNumbersWithSeriesOfOnes).replace(/\//g, '').split('')
      .map((character, squareIndex) => SquareData.createFromCharacterAndSquareIndex(character, squareIndex))
      .sort(this.#sortByFile).sort(this.#sortByRank);
  }

  #numbersRegex = /[1-8]/g;

  #replaceNumbersWithSeriesOfOnes(match) {
    return '1'.repeat(match);
  }

  #sortByFile(square1, square2) {
    return square1.file - square2.file;
  }

  #sortByRank(square1, square2) {
    return square1.rank - square2.rank;
  }
}









// EnPassantSquare 

  /* #getFenSquares() { // This could be simpler. See #getSquares in squares.js
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
    const files = [1, 2, 3, 4, 5, 6, 7, 8];
    const matrixOfCharacters = this.#getMatrixOfCharacters();
    const squares = ranks.map(rank => {
      const rankOfCharacters = matrixOfCharacters[rank - 1];
      return files.map(file => {
        const character = rankOfCharacters[file - 1];
        const fenSquare = new FenSquare({ character, rank, file });
        return fenSquare;
      })
    }).flat();
    return squares;
  }

  return 

  #getSquares() {
    

  } 

  #getMatrixOfCharacters() {
    return this.#getPiecePlacementWithHyphens()
      .split('/')
      .reverse()
      .map((rowOfCharacters, rankIndex) => this.getSquarseFromRowOfCharacters({ rowOfCharacters, rank: rankIndex + 1 }));
      
      rowOfCharacters.split('').map((character, fileIndex) => ({ rank: rankIndex + 1, file: fileIndex + 1, piece: this.#getPieceFromCharacter(character)})))
  }

  #getPiecePlacementWithHyphens() {
    this.#piecePlacement.replace(this.#numberRegex, match => '1'.repeat(match))
    let string = '';
    for (const character of this.#piecePlacement) {
      if (character >= '1' && character <= '8') string += '-'.repeat(parseInt(character));
      else string += character;
    }
    return string;
  }

  #mapRowOfCharactersToSquares(rowOfCharacters, rankIndex) {
    const characters = rowOfCharacters.split('');
    const pieces = characters.map(character => #getPieceFromCharacter(character))
    return characters.map((character, fileIndex) => ({ rank: rankIndex + 1, file: fileIndex + 1, character})));
  } */