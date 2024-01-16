class Coordinate extends String {
  constructor(coordinate) {
    super(coordinate);
  }

  get file() {
    return this.charAt(0);
  }

  get rank() {
    return this.charAt(1);
  }

  get fileNumber() {
    return this.file.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  }

  get rankNumber() {
    return parseInt(this.rank, 10);
  }

  isValid() {
    return /^[a-h][1-8]$/.test(this);
  }

  validate() {
    if(!this.isValid) throw new Error("Coordinate is invalid");
  }
}