import { Piece } from "../piece/piece";

export class FenToSquaresConverter {
  static getSquaresFromFen(fen) {
    const piecePlacement = FenToSquaresConverter.#getPiecePlacementFromFen(fen);
    return piecePlacement
      .replace(FenToSquaresConverter.#numbersRegex, FenToSquaresConverter.#replaceNumbersWithSeriesOfOnes)
      .replace(/\//g, '')
      .split('')
      .map(FenToSquaresConverter.#getSquareFromCharacterAndSquareIndex)
      .sort(FenToSquaresConverter.#sortByFile)
      .sort(FenToSquaresConverter.#sortByRank);
  }

  static #getPiecePlacementFromFen(fen) {
    return fen.split('')[0];  
  }

  static #numbersRegex = /[1-8]/g;

  static #replaceNumbersWithSeriesOfOnes(match) {
    return '1'.repeat(match);
  }

  static #getSquareFromCharacterAndSquareIndex(character, squareIndex) {
    return ({ 
      rank: FenToSquaresConverter.#getRankFromSquareIndex(squareIndex), 
      file: FenToSquaresConverter.#getFileFromSquareIndex(squareIndex), 
      piece: FenToSquaresConverter.#getPieceFromCharacter(character)
    });
  }

  static #getRankFromSquareIndex(squareIndex) {
    return 8 - Math.floor(squareIndex / 8);
  }

  static #getFileFromSquareIndex(squareIndex) {
    return (squareIndex % 8) + 1;
  }

  static #getPieceFromCharacter(character) {
    return character === 1 ? null : Piece.create(this.#characterToPieceData[character]);
  }

  static #characterToPieceData = {
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
    p: { type: 'rook', color: 'black' }
  }

  static #sortByFile(square1, square2) {
    return square1.file - square2.file;
  }

  static #sortByRank(square1, square2) {
    return square1.rank - square2.rank;
  }




  /* static getPiecePlacementFromSquares(squares) {
    let fen = '';
    for (let rank = 8; rank >= 1; rank--) {
      let emptyCount = 0;
      for (let file = 1; file <= 8; file++) {
        const square = squares.find(s => s.rank === rank && s.file === file);
        if (square.piece) {
          if (emptyCount > 0) {
            fen += emptyCount;
            emptyCount = 0;
          }
          const pieceLetter = FenManager.getPieceLetterFromPiece(square.piece);
          fen += pieceLetter;
        } else {
          emptyCount++;
        }
      }
      if (emptyCount > 0) {
        fen += emptyCount;
      }
      if (rank > 1) {
        fen += '/';
      }
    }
    return fen;
  }

  static getPieceLetterFromPiece(piece) {
    const pieceType = piece.type.charAt(0).toLowerCase();
    return piece.color === 'white' ? pieceType.toUpperCase() : pieceType;
  } */
} 