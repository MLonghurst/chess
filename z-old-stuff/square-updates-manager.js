/* export class SquareUpdates extends Array {
  #move;
  #enPassantSquare;

  constructor({ move, enPassantSquare }) {
    super();
    this.#move = move;
    this.#enPassantSquare = enPassantSquare;
    this.push(this.#getOriginUpdate(), this.#getDestinationUpdate());
  }

  static getSquareUpdates() {
    this.push(this.#getOriginUpdate(), this.#getDestinationUpdate(), this.push(...this.#getFlagUpdates()));
  }

  #getOriginUpdate() {
    return { 
      square: this.move.origin, 
      piece: null
    };
  }

  #getDestinationUpdate() {
    return { 
      square: move.destination, 
      piece: this.promotionPiece ?? this.piece
    };
  }

  #getFlagUpdate() {
    if (this.move.flag === 'castlingKingside') return [this.#getCastlingKingsideRookOriginUpdate(), this.#getCastlingKingsideRookDestinationUpdate()];
  }


    if (this.#moveIsCastlingKingsideMove(this.#move)) this.push(this.getCastlingUpdates());
    if (this.#moveIsCapturingEnPassantMove(this.#move)) this.
    const squareUpdates = [
      this.#getOriginUpdate(), 
      this.#getDestinationUpdate(),
    ];
    if(this.#moveIsCastlingKingsideMove(move)) squareUpdates.push(this.#getCastlingKingsideRookOriginUpdate(), this.#getCastlingKingsideRookDestinationUpdate());
    if(this.#moveIsCastlingQueensideMove(move)) squareUpdates.push(this.#getCastlingQueensideRookOriginUpdate(), this.#getCastlingQueensideDestinationUpdate());
    if(SquareUpdatesManager.#moveIsCastlingQueensideMove(move)) squareUpdates.push(SquareUpdatesManager.#getCastlingQueensideRookOriginUpdate(move), SquareUpdatesManager.#getCastlingQueensideDestinationUpdate(move));
    if(SquareUpdatesManager.#moveIsCapturingEnPassantMove(move)) squareUpdates.push(SquareUpdatesManager.#getCapturingEnPassantUpdate(move));
    return squareUpdates;
  }

  getSpecialMoveType() {
    return 
  }

  specialMoveTypeToUpdates = {
    castlingKingside: this.#getCastlingKingsideUpdates(),
    castlingQueenside: this.#getCastlingQueensideUpdates(),
    capturingEnPassant: this.getCapturingEnPassantUpdates()
  }

  static 

  #getCastlingKingsideRookOriginUpdate() {
    return { 
      square: {
        rank: move.origin.rank, 
        file: 8
      },
      piece: null
    }
  }

  #getCastlingRookUpdates() {
    const castlingType = this.#getCastlingType();
    if (!castlingType) return [];
    return [{ 
      square: { 
        rank: this.#move.origin.rank, 
        file: castlingType === 'kingside' ? 8 : 1,
      }, 
      piece: null 
    }, { 
      square: { 
        rank: this.#move.origin.rank, 
        file: castlingType === 'kingside' ? 5 : 3,
      }, 
      piece: { 
        type: 'rook', 
        color: this.#move.piece.color 
      } 
    }];
  }

  static #getCastlingQueensideRookOriginUpdate(move) {
    return { 
      square: {
        rank: move.origin.rank, 
        file: 1
      },
      piece: null
    }
  }

  static #getCastlingQueensideRookDestinationUpdate(move) {
    return { 
      square: {
        rank: move.origin.rank, 
        file: 4
      },
      piece: {
        type: 'rook',
        color: move.piece.color
      }
    }
  }

  static #getCapturingEnPassantUpdate(move) {
    return { 
      square: { 
        rank: move.origin.rank, 
        file: move.destination.file 
      }, 
      piece: null 
    };
  }





  static #getOriginUpdate(move) {
    return { 
      square: move.origin, 
      piece: null 
    };
  }

  static #getDestinationUpdate(move) {
    return { 
      square: move.destination, 
      piece: this.promotionPiece ?? this.piece
    };
  }

  static #getCastlingKingsideRookOriginUpdate(move) {
    return { 
      square: {
        rank: move.origin.rank, 
        file: 8
      },
      piece: null
    }
  }

  static #getCastlingKingsideRookDestinationUpdate(move) {
    return { 
      square: {
        rank: move.origin.rank, 
        file: 5
      },
      piece: {
        type: 'rook',
        color: move.piece.color
      }
    }
  }

  static #getCastlingQueensideRookOriginUpdate(move) {
    return { 
      square: {
        rank: move.origin.rank, 
        file: 1
      },
      piece: null
    }
  }

  static #getCastlingQueensideRookDestinationUpdate(move) {
    return { 
      square: {
        rank: move.origin.rank, 
        file: 4
      },
      piece: {
        type: 'rook',
        color: move.piece.color
      }
    }
  }

  static #getCapturingEnPassantUpdate(move) {
    return { 
      square: { 
        rank: move.origin.rank, 
        file: move.destination.file 
      }, 
      piece: null 
    };
  }

  static #moveIsCastlingKingsideMove(move) {
    return move.piece.type === 'king' && move.origin.file === 5 && move.destination.file === 7;
  }

  static #moveIsCastlingQueensideMove(move) {
    return move.piece.type === 'king' && move.origin.file === 5 && move.destination.file === 3;
  }

  static #moveIsCapturingEnPassantMove(move, enPassantSquare) {
    return move.piece.type === 'pawn' && move.destination.rank === enPassantSquare.rank && move.destination.file === enPassantSquare.file;
  }
} */