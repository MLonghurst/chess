export class DirectionsManager {
  static getMainWinds() { 
    return [
      {vertical:  1, horizontal:  0},
      {vertical:  1, horizontal:  1},
      {vertical:  0, horizontal:  1},
      {vertical: -1, horizontal:  1},
      {vertical: -1, horizontal:  0},
      {vertical: -1, horizontal: -1},
      {vertical:  0, horizontal: -1},
      {vertical:  1, horizontal: -1},
    ];
  }

  static getHalfWinds() {
    return [
      {vertical:  2, horizontal:  1},
      {vertical:  1, horizontal:  2},
      {vertical: -1, horizontal:  2},
      {vertical: -2, horizontal:  1},
      {vertical: -2, horizontal: -1},
      {vertical: -1, horizontal: -2},
      {vertical:  1, horizontal: -2},
      {vertical:  2, horizontal: -1},   
    ];
  }
  
  static getCardinals() {
    return [
      {vertical:  1, horizontal:  0},
      {vertical:  0, horizontal:  1},
      {vertical: -1, horizontal:  0},
      {vertical:  0, horizontal: -1},
    ];
  }

  static getOrdinals() {
    return [
      {vertical:  1, horizontal:  1},
      {vertical: -1, horizontal:  1},  
      {vertical: -1, horizontal: -1},
      {vertical:  1, horizontal: -1},
    ];
  }

  static getNorthernCardinals() {
    return [{vertical:  1, horizontal:  0}];
  }

  static getEasternCardinals() {
    return [{vertical:  0, horizontal:  1}];
  }

  static getSoutherCardinals() {
    return [{vertical: -1, horizontal:  0}];
  }

  static getWesternCardinals() {
    return [{vertical:  0, horizontal: -1}];
  }

  static getNorthernOrdinals() {
    return [
      {vertical:  1, horizontal:  1},
      {vertical:  1, horizontal: -1},       
    ];
  }

  static getSouthernOrdinals() {
    return [
      {vertical:  -1, horizontal:  1},
      {vertical:  -1, horizontal: -1},       
    ];
  }
}