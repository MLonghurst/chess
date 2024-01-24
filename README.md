# Chess Position

Chess Position is a object-oriented chess validator that follows clean code principles. The class `Position` can do the following:
* Create a new chess position from a Fordyce-Edwards Notation (FEN) string.
* Generate all legal moves from this position.
* Update the position after a move.
* Export a chess position in FEN string.

```
import { Position } from './position.js';
const position = new Position();

// Create the opening position 
const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
position.updateFromFen(fen);

// List all positible moves in this position
const moves = position.getMoves();

// Make the move
const move = position.getMoves()[0];
position.move(move);

// Export the new position
const newFen = position.getFen();
```
