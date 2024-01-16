import { Square } from './components/square.js';
import { Player } from './components/player.js';
import { EnPassant } from './components/en-passant.js';
import { CastlingStatus } from './components/castling-status.js';
import { HalfMoves } from './components/half-moves.js';
import { FullMoves } from './components/full-moves.js';
import { Fen } from './components/fen.js';

export class Position {
  constructor() {
    this.squares = this.#getSquares();
    this.players = this.#getPlayers(); 
    this.castlingStatuses = this.#getCastlingStatuses();
    this.enPassant = new EnPassant(this);
    this.halfMoves = new HalfMoves();
    this.fullMoves = new FullMoves();
  }

  updateFromFen(fen) {
    this.squares.forEach(square => square.updateFromFen(fen));
    this.players.forEach(player => player.updateFromFen(fen));
    this.enPassant.updateFromFen(fen);
    this.castlingStatuses.forEach(castlingStatus => castlingStatus.updateFromFen(fen));
    this.halfMoves.updateFromFen(fen);
    this.fullMoves.updateFromFen(fen);
  }

  updateFromMove(move) {
    this.squares.forEach(square => square.updateFromMove(move));
    this.players.forEach(player => player.updateAfterMove());
    this.enPassant.updateFromMove(move);
    this.castlingStatuses.forEach(castlingStatus => castlingStatus.updateAfterMove());
    this.halfMoves.updateFromMove(move);
    this.fullMoves.updateFromMove(move);
  }

  getMoves() {
    const activePlayer = this.players.find(player => player.isActive);
    return activePlayer.getMoves();
  }

  getFen() {
    const fen = new Fen(this);
    return fen.value;
  }

  // initialization

  #getSquares() {
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
    const files = [1, 2, 3, 4, 5, 6, 7, 8];
    return ranks.map(rank => files.map(file => new Square({ rank, file, position: this }))).flat();
  }

  #getPlayers() {
    const colors = ['white', 'black'];
    return colors.map(color => new Player({ color, position: this }));
  }

  #getCastlingStatuses() {
    const types = ['kingside', 'queenside'];
    const colors = ['white', 'black'];
    return types.map(type => colors.map(color => new CastlingStatus({ type, color, position: this }))).flat();
  }

  // utilities

  getCopy() {
    const currentFen = this.getFen();
    const positionCopy = new Position();
    positionCopy.updateFromFen(currentFen);
    return positionCopy;
  }

  isLegal() {
    const inactivePlayer = this.players.find(player => !player.isActive);
    return !inactivePlayer.isInCheck();
  }
}