import { EnhancedArray } from '/projects/utilities/enhanced-array/enhanced-array.js';
import { Prerequisite } from './prerequisite.js';

export class Prerequisites extends EnhancedArray {
  constructor(prerequisitesInShorthandForm) {
    super();
    this.push(...this.#getPrerequisites(prerequisitesInShorthandForm));
  }

  #getPrerequisites(prerequisitesInShorthandForm) {
    return prerequisitesInShorthandForm.map(prerequisiteInShorthandForm => new Prerequisite(prerequisiteInShorthandForm));
  }

  areSatisifed({ position, square }) {
    return this.every(prerequisite => prerequisite.isSatisified({ position, square }));
  }
}