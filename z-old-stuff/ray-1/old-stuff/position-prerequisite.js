export class PositionPrerequisite {
  constructor(condition) {
    this.condition = condition;
  }

  isFulfilled({ position }) {
    return position[this.condition];
  }
}