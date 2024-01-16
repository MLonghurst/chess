export class AttackDirections extends Array {
  constructor({ type, color }) {
    this.#initialize({ type, color });
  }

  #initialize({ type, color }) {
    if(this.piece.type === 'king' || this.piece.type === 'queen') return this.mainWinds;
    if(this.piece.type === 'rook') return this.cardinals;
    if(this.piece.type === 'bishop') return this.cardinals;

  }

  #getPawnAttackDirections() {
    switch (this.piece.color) {
      case 'white':
        return this.northern
    }

  }



} 