import { Cell } from "../Cell/Cell.tsx";
import "./Grid.css";

export function Grid() {
  const numRows = 7;
  const numCols = 10;

  const cells = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      cells.push(<Cell key={`${row}-${col}`} row={row} />);
    }
  }

  return (
    <div
      className="gridContainer"
      style={{ gridTemplateColumns: `repeat(${numCols},60px)` }}
    >
      {cells}
    </div>
  );
}
