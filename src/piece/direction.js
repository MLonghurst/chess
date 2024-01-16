export class Direction {
  #code;

  constructor(code) {
    this.#code = code;
    this.rank = this.#getRank();
    this.file = this.#getFile();
  }

  #getRank() {
    const numberOfNsInCode = this.#getNumberOfCharactersInCode('N');
    const numberOfSsInCode = this.#getNumberOfCharactersInCode('S');
    return numberOfNsInCode - numberOfSsInCode;
  }

  #getFile() {
    const numberOfEsInCode = this.#getNumberOfCharactersInCode('E');
    const numberOfWsInCode = this.#getNumberOfCharactersInCode('W');
    return numberOfEsInCode - numberOfWsInCode;
  }

  #getNumberOfCharactersInCode(character) {
    return (this.#code.match(new RegExp(character, 'g')) || []).length;
  }
}