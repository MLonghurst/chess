export class Ray {
  constructor({ direction, range, pathAlgorithm, prerequisites }) {
    this.direction = direction;
    this.range = range;
    this.pathAlgorithm = pathAlgorithm;
    this.prerequisites = prerequisites;
  }

  getSquares({ position, square }) {
    const squares = position.squares;
    if (this.prerequisites.areSatisifed({ position, square })) return this.getPathSquares({ squares, square });
    else return [];
  }

  getPathSquares({ squares, square }) {
    const squaresInDirectionByRange = this.getSquaresInDirectionByRange({ squares, square });
    return this.pathAlgorithm.getPathSquares(squaresInDirectionByRange);
  }

  getSquaresInDirectionByRange({ squares, square }) {
    const squaresInDirection = this.getSquaresInDirection({ squares, square });
    return this.range.getSquaresByRange(squaresInDirection);
  }

  getSquaresInDirection({ squares, square }) {
    return square.getSquaresInDirection({ squares, direction: this.direction });
  }
}