import { Piece } from '../piece/piece.js';
import { Move } from '../move/move.js';


export class Mover {
  static move({ squares, move }) {
    if(move.isPiecePromotionMove()) Mover.moveWithPiecePromotion(move);
    else Mover.moveRegularly(move);
    if(move.isCastlingMove()) Move.moveCastledRook();
    if(move.isEnPassantMove()) Move.removePawnsCapturedEnPassant();
    /* if (pieceColor === 'white' && move.isCastleKingside) Mover.moveByCastlingKingsideForWhite({ squares, move });
    if (pieceColor === 'black' && move.isCastleKingside) Mover.moveByCastlingKingsideForBlack({ squares, move });
    if (pieceColor === 'white' && move.isCastleQueenside) Mover.moveByCastlingQueensideForWhite({ squares, move });
    if (pieceColor === 'black' && move.isCastleQueenside) Mover.moveByCastlingQueensideForBlack({ squares, move });
    if (pieceColor === 'white' && move.isCaptureEnPassant) Mover.moveByCapturingEnPassantForWhite({ squares, move });
    if (pieceColor === 'black' && move.isCaptureEnPassant) Mover.moveByCapturingEnPassantForBlack({ squares, move }); */
  }

static moveWithPiecePromotion(move) {
  move.destinationSquare.piece = move.promotionPiece;
  move.originSquare.piece = null;
}

static moveRegularly(move) {
  move.destinationSquare.piece = move.originSquare.piece;
  move.originSquare.piece = null;
}

static moveCastledRook({ squares, move }) {
  const rook = Piece.create({ type: 'rook', color: move.piece.color });
}

  static moveByCastlingKingsideForWhite(squares) {
    const castlingRookOriginSquare = squares.getSquare({ rank: 1, file: 8 });
    const castlingRookDestinationSquare = squares.getSquare({ rank: 1, file: 8 });
    Mover.moveRegularly(move);

    squares.getSquare({ rank: 1, file: 5 }).updatePiece(null);

    squares.getSquareFromRankAndFile({ rank: 1, file: 5 }).updatePiece(new Piece({ type: ''}));
    squares.getSquareFromRankAndFile({ rank: 1, file: 5 }).updatePiece(null);
    squares.getSquareFromRankAndFile({ rank: 1, file: 5 }).updatePiece(null);
    squares.getSquareFromAlgebraicNotation('a6').updatePiece('R');
    squares.getSquareFromAlgebraicNotation('a7').updatePiece('K');
    squares.getSquareFromAlgebraicNotation('a8').updatePiece(null);
  }

  static moveByCastlingKingsideForBlack(squares) {
    squares.getSquareFromAlgebraicNotation('h5').updatePiece(null);
    squares.getSquareFromAlgebraicNotation('h6').updatePiece('r');
    squares.getSquareFromAlgebraicNotation('h7').updatePiece('k');
    squares.getSquareFromAlgebraicNotation('h8').updatePiece(null);
  }

  static moveByCastlingKingsideForWhite(squares) {
    squares.getSquareFromAlgebraicNotation('a5').updatePiece(null);
    squares.getSquareFromAlgebraicNotation('a6').updatePiece('R');
    squares.getSquareFromAlgebraicNotation('a7').updatePiece('K');
    squares.getSquareFromAlgebraicNotation('a8').updatePiece(null);
  }

  static moveByCastlingKingsideForBlack(squares) {
    squares.getSquareFromAlgebraicNotation('h5').updatePiece(null);
    squares.getSquareFromAlgebraicNotation('h6').updatePiece('r');
    squares.getSquareFromAlgebraicNotation('h7').updatePiece('k');
    squares.getSquareFromAlgebraicNotation('h8').updatePiece(null);
  }


  static updatePieceOnSquare(squares, squareInAlgebraicNotataion, pieceLetter) {
    const square = squares.getSquareFromSquareInAlgebraicNotation(squareInAlgebraicNotataion);
    const piece = PieceFactory.getPiece(pieceLetter);
    square.updatePiece(piece);
  };


  

  static moveByCastlingKingsideForBlack({ squares, move }) {
    /* Castling logic goes here. */
  }

  static moveByCastlingQueensideForWhite({ squares, move }) {
    /* Castling logic goes here. */
  }

  static moveByCastlingQueensideForBlack({ squares, move }) {
    /* Castling logic goes here. */
  }

  static moveByCastlingQueensideForBlack({ squares, move }) {
    /* Castling logic goes here. */
  }

  static moveByCapturingEnPassantForWhite({ squares, move }) {
    /* Castling logic goes here. */
  }

  static moveByCapturingEnPassantForBlack({ squares, move }) {
    /* Castling logic goes here. */
  }

  
}