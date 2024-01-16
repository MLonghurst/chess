export class Range {
  constructor(rangeInShorthandForm) {
    this.minimum = rangeInShorthandForm[0];
    this.maximum = rangeInShorthandForm[1];
  }

  getSquaresByRange(squares){
    return squares.slice(this.minimum - 1, this.maximum);
  }
}