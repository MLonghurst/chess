import { SquareManager } from './square-manager.js'; 

export class SquaresManager {
  /* static getPathSquares(squaresInDirection, pathAlgorithm) {
    const pathSquares = [];
    for (let square of squaresInDirection) {
      if (pathAlgorithm.squareIsContinuePathSquare(square, algorithm)) pathSquares.push(square);
      if (pathAlgorithm.squareIsEndPathSquare(square, algorithm)) break;
    }
    return pathSquares;
  } */

  /* static getSquaresInRange(squaresInDirection, range) {
    return squaresInDirection.slice(range.minimum - 1, range.maximum);
  } */

  /* static getSquaresInDirectionOfOriginSquare(squares, originSquare, direction){
    return squares
      .filter(square => SquareManager.squareIsInDirectionOfOriginSquare(originSquare, direction, square))
      .sort((square1, square2) => SquaresManager.sortSquaresByDistanceFromOriginSquare(originSquare, square1, square2));
  } */

  /* static getDistanceBetweenSquares(square1, square2) {
    const latitudinalDistanceBetweenSquares = SquaresManager.getLatitudinalDistanceBetweenSquares(square1, square2);
    const longitudinalDistanceBetweenSquares = SquaresManager.getLongitudinalDistanceBetweenSquares(square1, square2);;
    return Math.sqrt(Math.pow(latitudinalDistanceBetweenSquares, 2) + Math.pow(longitudinalDistanceBetweenSquares, 2));
  } */

  /* static sortSquaresByDistanceFromOriginSquare(originSquare, square1, square2) {
    return SquaresManager.getDistanceBetweenSquares(square1, originSquare) - SquaresManager.getDistanceBetweenSquares(square2, originSquare);
  } */
}