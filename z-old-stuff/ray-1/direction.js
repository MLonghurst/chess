export class Direction {
  #code;

  constructor(code) {
    this.#code = code;
    this.rank = this.#getRank();
    this.file = this.#getFile();
  }

  #getRank() {
    const numberOfNsInCode = this.#getNumberOfCharactersInCodeFromCharacter('N');
    const numberOfSsInCode = this.#getNumberOfCharactersInCodeFromCharacter('S');
    return numberOfNsInCode - numberOfSsInCode;
  }

  #getFile() {
    const numberOfEsInCode = this.#getNumberOfCharactersInCodeFromCharacter('E');
    const numberOfWsInCode = this.#getNumberOfCharactersInCodeFromCharacter('W');
    return numberOfEsInCode - numberOfWsInCode;
  }

  #getNumberOfCharactersInCodeFromCharacter(character) {
    return (this.#code.match(new RegExp(character, 'g')) || []).length;
  }
}