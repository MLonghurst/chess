import { Squares } from './squares.js';
import { CastlingStatuses } from '../position/castling-statuses.js';
import { Players } from './players.js';
import { FenPosition } from '../fen/fen-position.js';
import { FenManager } from '../fen/fen-manager.js';

export class Position {
  constructor({ fen, move }) {
    this.squares = new Squares({ fen, move });
    this.players = new Players();
    this.castlingStatuses = new CastlingStatuses();
  }

  // 

  isLegal() {
    return !this.players.getPlayer('inactive').isInCheck();
  }




  updateFromMove(move) {
    this.squares.updateFromMove(move);
    this.players.updateAfterMove();
    this.castlingStatuses.updateAfterMove(this.squares);
  }

  getCopy() {
    const positionCopy = new Position();
    positionCopy.update(this.getFen());
    return positionCopy;
  }

  

  getAttackedSquares() {
    return this.squares.getAttackedSquares(this);
  }

  updateFromFen(fen) {
    const fenPosition = new FenPosition(fen);
    this.squares.updateFromFenPosition(fenPosition);
  }

  getFen() {
    return FenManager.getPiecePlacementFromSquares(this.squares);
  }
}

/* getCheckRays() {
    this.getAttackRays().filter(ray => ray.attackedPiece === this.activePlayer.king);
  }

  getAttackRaysOfAttackerDeliveringCheck() {
    return this.getAttackRays().filter(ray => ray.includes(this.checkedSquare()))
  }

  getNumberOfAttackersDeliveringCheck() {
    return this.getAttackRaysOfAttackerDeliveringCheck().length();
  }

  getSquareThatHasKingOfActivePlayer() {
    return this.squares.find(square => square.piece?.type === 'king' && square.piece?.color === this.activePlayer.color)
  } */



/* getMoves() {
    const numberOfCheckers = this.getCheckRays().length();
    switch (numberOfCheckers) {
      case 2:
        return this.getMovesThatEscapeCheck();
      case 1: 
        return [...this.getMovesThatCaptureChecker(), ...this.getMovesThatBlockCheck(), ...this.getMovesThatEscapeCheck()];
      case 0: 
        return this.getPotentialMoves();
    };
  } */

  /* getMovesThatEscapeCheck() {
    if(this.activePlayer.king.isInCheck) return this.activePlayer.king.getMoves();
    return [];
  }

  getMovesThatCaptureChecker() {
    return this.potentialMovess().

    if(this.activePlayer.king.isInCheck) return this.activePlayer.king.getMoves();
    return [];
  } */