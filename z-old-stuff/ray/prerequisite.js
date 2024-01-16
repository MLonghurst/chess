export class Prerequisite {
  #key;
  #value;

  constructor(prerequisiteInCompressedFrom) {
    this.#key = prerequisiteInCompressedFrom.keys[0];
    this.#value = prerequisiteInCompressedFrom[key];
  }

  isSatisfied({ position, originSquare }) {
    if(this.#key === 'position') this.#regardingPositionisSatisfied(position);
    if(this.#key === 'activeColor') this.#regardingActiveColorisSatisfied(position);
    if(this.#key === 'originSquareRanks') this.#regardingOriginSquareIsSatisfied(originSquare);
  };

  #regardingPositionisSatisfied(position) {
    const property = this.#value;
    return position[property];
  }

  #regardingActiveColorisSatisfied(position) {
    const color = this.#value;
    return position.activeColor === color;
  }

  #regardingOriginSquareIsSatisfied(originSquare) {
    const ranks = this.#value;
    return ranks.includes(originSquare.rank);
  }
}