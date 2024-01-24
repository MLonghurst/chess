# Chess Position

Chess Position is a object-oriented chess validator that follows clean code principles. The class `Position` can do the following:
### Create a new chess position from a Fordyce-Edwards Notation (FEN) string.
```
import { Position } from './position.js';
const position = new Position();
```
### Generate all legal moves from this position.
```
const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
position.updateFromFen(fen);
```
### Update the position after a move.
```
const moves = position.getMoves();
```

### Export a chess position in FEN string.
```
const newFen = position.getFen();
```
