export class Move {
  constructor({ origin, destination, promotionPiece = null }) {
    this.piece = {
      type: origin.piece.type,
      color: origin.piece.color
    };
    this.origin = {
      rank: origin.rank,
      file: origin.file
    };
    this.destination = {
      rank: destination.rank,
      file: destination.file
    };
    this.promotionPiece = promotionPiece;
    this.isEnPassantCapture = destination.isEnPassantSquare;
    this.squareUpdates = this.#getSquareUpdates();
  }

  isLegal(position) {
    const copyOfPosition = position.getCopy();
    copyOfPosition.updateFromMove(this);
    return copyOfPosition.isLegal();
  }

  // initialization

  #getSquareUpdates() {
    const updates = [this.#getOriginUpdate(), this.#getDestinationUpdate()];
    if (this.#isCastlingMove()) updates.push(this.#getCastlingRookOriginUpdate(), this.#getCastlingRookDestinationUpdate())
    if (this.isEnPassantCapture) updates.push(this.#getEnPassantCaptureUpdate());
    return updates;
  }

  #getOriginUpdate() {
    return { 
      rank: this.origin.rank, 
      file: this.origin.file,
      piece: null 
    };
  }

  #getDestinationUpdate() {
    return { 
      rank: this.destination.rank, 
      file: this.destination.file,
      piece: this.promotionPiece ?? this.piece 
    };
  }

  #getCastlingRookOriginUpdate() {
    return { 
      rank: this.origin.rank, 
      file: this.destination.file === 7 ? 8 : 1,
      piece: null 
    };
  }

  #getCastlingRookDestinationUpdate() {
    return { 
      rank: this.origin.rank, 
      file: this.destination.file === 7 ? 6 : 4,
      piece: { 
        type: 'rook', 
        color: this.piece.color 
      }  
    };
  }

  #getEnPassantCaptureUpdate() {
    return {
      rank: this.origin.rank, 
      file: this.destination.file,
      piece: null 
    };
  }

  #isCastlingMove() {
    const distanceBetweenOriginAndDestination = Math.abs(this.origin.file - this.destination.file);
    return this.piece.type === 'king' && distanceBetweenOriginAndDestination === 2;
  }
}