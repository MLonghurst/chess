# Chess Position

Chess Position is a object-oriented chess validator that follows clean code principles. The class `Position` can do the following:
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

Position allows for castling capturing en passant. 

Position is still being refined and currently has some severe limitations. For example, it cannot yet detect if a player is in checkmate or if a stalemate has been reached. Its functionality is limited to the above. 
