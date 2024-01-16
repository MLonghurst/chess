export class Ray extends Array  {
  constructor(square, direction, range, penetration) {
    super();
    this.originalSquare = square;
    this.direction = direction;
    this.range = range;
    this.penetration = penetration;
    this.initialize();
  }

  initialize() {
    const squares = this.getSquares();
    this.push(...squares);
  }

  getSquares() {
    // const isInRatio = (a, b, x, y) => (a * y) === (b * x);
    const squareSharesGradientWithOriginSquare = square => {
      const fileNumberDifference = square.fileNumber - this.originSquare.fileNumber;
      const rankNumberDifference = square.rankNumber - this.originSquare.rankNumber;
      return fileNumberDifference * this.direction.rankIncrement === rankNumberDifference * this.direction.fileIncrement;
    };
    const squareIsInLongitudinalDirectionOfOriginalSquare = square => {
      const fileNumberDifference = square.fileNumber - this.originSquare.fileNumber;
      return Math.sign(fileNumberDifference) === Math.sign(this.direction.fileIncrement);
    }
    const squareIsInLatitudinalDirectionOfOriginalSquare = square => {
      const rankNumberDifference = square.rankNumber - this.originSquare.rankNumber;
      return Math.sign(rankNumberDifference) === Math.sign(this.direction.rankIncrement);
    }
    

    function filterSquares(squares, startSquare, vector) {
      let currentFileNumber = startSquare.fileNumber;
      let currentRankNumber = startSquare.rankNumber;
  
      return squares.filter(square => {
          currentFileNumber += vector.fileNumberIncrement;
          currentRankNumber += vector.rankNumberIncrement;
  
          return square.fileNumber === currentFileNumber && square.rankNumber === currentRankNumber;
      });
  }
  }

  getNumberOfSquares() {
    switch(this.direction) {
      case 'N':
        return this.getNumberOfSquaresToTheNorth();
      case 'E':
        return this.getNumberOfSquaresToTheEast();
      case 'S':
        return this.getNumberOfSquaresToTheSouth();
      case 'W':
        return this.getNumberOfSquaresToTheWest();
      case 'NE':
        return Math.min(this.getNumberOfSquaresToTheNorth(), this.getNumberOfSquaresToTheEast());
      case 'SE':
        return Math.min(this.getNumberOfSquaresToTheSouth(), this.getNumberOfSquaresToTheEast());
      case 'SW':
        return Math.min(this.getNumberOfSquaresToTheSouth(), this.getNumberOfSquaresToTheWest());
      case 'NW':
        return Math.min(this.getNumberOfSquaresToTheNorth(), this.getNumberOfSquaresToTheWest());
      case 'NNE':
        return (this.getNumberOfSquaresToTheNorth() >= 2 && this.getNumberOfSquaresToTheEast() >= 1) ? 1 : 0;
      case 'NEE':
        return (this.getNumberOfSquaresToTheNorth() >= 1 && this.getNumberOfSquaresToTheEast() >= 2) ? 1 : 0;
      case 'SEE': 
        return (this.getNumberOfSquaresToTheSouth() >= 1 && this.getNumberOfSquaresToTheEast() >= 2) ? 1 : 0;
      case 'SSE': 
        return (this.getNumberOfSquaresToTheSouth() >= 2 && this.getNumberOfSquaresToTheEast() >= 1) ? 1 : 0;
      case 'SSW':
        return (this.getNumberOfSquaresToTheSouth() >= 2 && this.getNumberOfSquaresToTheWest() >= 1) ? 1 : 0;
      case 'SWW':
        return (this.getNumberOfSquaresToTheSouth() >= 1 && this.getNumberOfSquaresToTheWest() >= 2) ? 1 : 0;
      case 'NWW':
        return (this.getNumberOfSquaresToTheNorth() >= 1 && this.getNumberOfSquaresToTheWest() >= 2) ? 1 : 0;
      case 'NNW':
        return (this.getNumberOfSquaresToTheNorth() >= 2 && this.getNumberOfSquaresToTheWest() >= 1) ? 1 : 0;
    }
  }

  getNumberOfSquaresToTheNorth() {
    return 8 - this.square.rankNumber;
  }

  getNumberOfSquaresToTheEast() {
    return 8 - this.square.fileNumber;
  }

  getNumberOfSquaresToTheSouth() {
    return this.square.rankNumber - 1;
  }

  getNumberOfSquaresToTheWest() {
    return this.square.fileNumber - 1;
  }
}

/* 
    if(this.direction === 'N')    
    if(this.direction === 'E')    return this.getNumberOfSquaresToTheEast();
    if(this.direction === 'S')    return this.getNumberOfSquaresToTheSouth()
    if(this.direction === 'W')    return this.getNumberOfSquaresToTheWest();
    if(this.direction === 'NE')   return Math.min(this.getNumberOfSquaresToTheNorth(), this.getNumberOfSquaresToTheEast());
    if(this.direction === 'SE')   return Math.min(this.getNumberOfSquaresToTheSouth(), this.getNumberOfSquaresToTheEast());
    if(this.direction === 'SW')   return Math.min(this.getNumberOfSquaresToTheSouth(), this.getNumberOfSquaresToTheWest());
    if(this.direction === 'NW')   return Math.min(this.getNumberOfSquaresToTheNorth(), this.getNumberOfSquaresToTheWest());
    if(this.direction === 'NNE')  return (this.getNumberOfSquaresToTheNorth() >= 2 && this.getNumberOfSquaresToTheEast() >= 1) ? 1 : 0;
    if(this.direction === 'NEE')  return (this.getNumberOfSquaresToTheNorth() >= 1 && this.getNumberOfSquaresToTheEast() >= 2) ? 1 : 0;
    if(this.direction === 'SEE')  return (this.getNumberOfSquaresToTheSouth() >= 1 && this.getNumberOfSquaresToTheEast() >= 2) ? 1 : 0;
    if(this.direction === 'SSE')  return (this.getNumberOfSquaresToTheSouth() >= 2 && this.getNumberOfSquaresToTheEast() >= 1) ? 1 : 0;
    if(this.direction === 'SSW')  return (this.getNumberOfSquaresToTheSouth() >= 2 && this.getNumberOfSquaresToTheWest() >= 1) ? 1 : 0;
    if(this.direction === 'SWW')  return (this.getNumberOfSquaresToTheSouth() >= 1 && this.getNumberOfSquaresToTheWest() >= 2) ? 1 : 0;
    if(this.direction === 'NWW')  return (this.getNumberOfSquaresToTheNorth() >= 1 && this.getNumberOfSquaresToTheWest() >= 2) ? 1 : 0;
    if(this.direction === 'NNW')  return (this.getNumberOfSquaresToTheNorth() >= 2 && this.getNumberOfSquaresToTheWest() >= 1) ? 1 : 0;
    */