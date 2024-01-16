import { EnhancedArray } from "../../../utilities/enhanced-array/enhanced-array";
import { Player } from "./player";

export class Players extends EnhancedArray {
  constructor(squares) {
    super();
    this.push(...this.#getPlayers(squares));
  }

  updateAfterMove() {
    this.forEach(player => player.updateAfterMove());
  }

  updateAfterFenImport(fenActiveColor) {
    this.forEach(player => player.updateAfterFenImport(fenActiveColor));
  }

  getPlayer(type) {
    return this.find(player => player.type === type);
  }

  #getPlayers(squares) {
    return ['white', 'black'].map(color => new Player({ color, squares })); 
  }
}

