import { OriginSquarePrerequisite } from "./origin-square-prerequisite.js.js";
import { PositionPrerequisite } from "./position-prerequisite.js";

export class PrerequisiteFactory {
  static createPrerequisite(prerequisiteInShortHand) {
    const keyToClass = new Map([
      ['position', PositionPrerequisite],
      ['originSquareRanks', OriginSquarePrerequisite]
    ]);
    const key = prerequisiteInShortHand.keys[0];
    const Class = keyToClass.get(key);
    const argument = prerequisiteInShortHand.value[0];
    return new Class(argument);
  }

  static getConditionFromPrerequisiteInShortHand(prerequisiteInShortHand) {
    return 
  }
}