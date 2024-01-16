import { DirectionsManager } from './piece-movement/directions-manager.js';

export class Bishop extends Piece {
  constructor(){
    super();
    this.type = "bishop";
  }

  getAttackRays() {
    const directions = DirectionsManager.getOrdinals();
    const range = 7;
    const continueFor = ['empty'];
    const endAt = ['enemy', 'ally'];
    const endBefore = [];
    const attackRays = directions.map(direction => ({direction, range, continueFor, endAt, endBefore }));
    return attackRays;
  }

  getMoveRays() {
    const directions = DirectionsManager.getOrdinals();
    const range = 7;
    const continueFor = ['empty'];
    const endAt = ['enemy'];
    const endBefore = ['ally'];
    const attackRays = directions.map(direction => ({direction, range, continueFor, endAt, endBefore }));
    return attackRays;
  }
}