export class FenPiece {
  #letter;

  constructor(letter) {
    this.#letter = letter;
    this.color = this.#getColor();
    this.type = this.#getType();
  }

  #getColor() {
    const letterIsLowercase = (this.#letter === this.#letter.toLowerCase());
    if (letterIsLowercase) return 'black';
    return 'white';
  }

  #getType() {
    const lowerCaseLetter = this.#letter.toLowerCase();
    switch(lowerCaseLetter) {
      case 'k':
        return 'king';
      case 'q': 
        return 'queen';
      case 'r':
        return 'rook';
      case 'b':
        return 'bishop';
      case 'n':
        return 'knight';
      case 'p':
        return 'pawn';
      default:
        return null; // Perhaps throw an error here.
    }
  }
}