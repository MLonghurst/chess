export class SquareManager {
  static squareIsInDirectionOfOriginSquare(originSquare, direction, square) {
    return SquareManager.squareSharesGradientWithOriginSquare(originSquare, direction, square)
      && SquareManager.squareIsInLatitudinalDirectionOfOriginSquare(originSquare, direction, square)
      && SquareManager.squareIsInLongitudinalDirectionOfOriginSquare(originSquare, direction, square)
  }

  static squareSharesGradientWithOriginSquare(originSquare, direction, square) {
    return (square.file - originSquare.file) * direction.rank === (square.rank - originSquare.rank) * direction.file;
  };

  static squareIsInLatitudinalDirectionOfOriginSquare(originSquare, direction, square) {
    return Math.sign(square.file - originSquare.file) === Math.sign(direction.file);
  }

  static squareIsInLongitudinalDirectionOfOriginSquare (originSquare, direction, square) {
    return Math.sign(square.rank - originSquare.rank) === Math.sign(direction.rank);
  }
}