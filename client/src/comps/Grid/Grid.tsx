import { useContext } from "react";
import { Cell } from "../Cell/Cell.tsx";
import { Context } from "../../Context/Provider.tsx";
import "./Grid.css";

export function Grid({}) {
  const context = useContext(Context);
  const { numColl, play} = context!;
  const numRows = 7;
  const cells = [];

  for (let row = 0; row < numRows; row++) {
    const tempArr = [];
    for (let col = 0; col < numColl; col++) {
      tempArr.push(false);
      cells.push(<Cell key={`${row}-${col}`} row={row} col={col} />);
    }
    play.current.push(tempArr);
  }



  const handlePlay = async () => {
    // const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColl; col++) {
        if (play.current[row][col]) {
          const audio = new Audio(`http://localhost:3005/A${row}.wav`);
          audio.play();
        }
      }
      // await delay(500);
    }
  };
  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <div
        className="gridContainer"
        style={{ gridTemplateColumns: `repeat(${numColl},60px)` }}
      >
        {cells}
      </div>
    </div>
  );
}
