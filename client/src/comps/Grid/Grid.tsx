import { useContext } from "react";
import { Cell } from "../Cell/Cell.tsx";
import { Context } from "../../Context/Provider.tsx";
import "./Grid.css";

export function Grid() {
  const context = useContext(Context);
  const { numColl, play, numRows } = context!;
  const cells = [];

  //יצירת גריד ל ui
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numColl; col++) {
      cells.push(<Cell key={`${row}-${col}`} row={row} col={col} />);
    }
  }

  //יצירת המטריצה
  for (let col = 0; col < numColl; col++) {
    const tempArr = [];
    for (let row = 0; row < numRows; row++) {
      tempArr.push(false);
    }
    play.current.push(tempArr);
  }

  return (
    <div>
      <div
        className="gridContainer"
        style={{ gridTemplateColumns: `repeat(${numColl},60px)` }}
      >
        {cells}
      </div>
    </div>
  );
}
