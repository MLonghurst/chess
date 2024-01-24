# Chess Position

Chess Position is a object-oriented chess validator that follows clean code principles. 

The class `Position` can do the following:
### Create a new chess position from a Fordyce-Edwards Notation (FEN) string
```
import { Position } from './position.js';
const position = new Position();
const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
position.updateFromFen(fen);
```

### Generate all legal moves from this position
```
const moves = position.getMoves();
```

### Update the position after a move
```
const move = moves[0];
position.move(move);
```

### Export a chess position in FEN string
```
const newFen = position.getFen();
```

Chess Position allows for castling, capturing en passant and promotion. 

Chess Position is still being refined and has some severe limitations. It cannot yet detect if a player is in checkmate or if a stalemate has been reached by repetition of moves, insufficient material, the 50-move rule, etc. Its functionality is presently limited to the above. 
