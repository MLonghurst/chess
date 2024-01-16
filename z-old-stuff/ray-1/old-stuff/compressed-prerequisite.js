import { OriginSquarePrerequisite } from "./origin-square-prerequisite.js.js";
import { PositionPrerequisite } from "./position-prerequisite.js";

export class CompressedPrerequisite {
  constructor({ key: value }) {
    this.key  = key;
    this.value = value;
  }

  extract() {
    const Class = this.getClass();
    const argument = this.getArgument();
    return new Class(argument);
  }

  getClass() {
    return this.keyToClass.get(this.key)
  }

  getArgument() {
    return this.value;
  }

  keyToClass = new Map([
    ['position', PositionPrerequisite],
    ['originSquareRanks', OriginSquarePrerequisite]
  ]);
}