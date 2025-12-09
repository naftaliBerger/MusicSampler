import { useContext, useState } from "react";
import "./Cell.css";
import { Context } from "../../Context/Provider";

export function Cell({row,col,CurrentCell,}: {row: number;col: number;CurrentCell: boolean;}) {
  const [active, setActive] = useState(false);
  const context = useContext(Context);
  const { play, audioRef,volumeRef } = context!;

  const handleClick = () => {
    play.current[col][row] = !play.current[col][row];

    if (!active) {
      const audio = audioRef.current[row];
      if (audio) {
        audio.currentTime = 0;
        audio.volume = volumeRef.current;
        audio.play();
      }
    }
    setActive((prev) => !prev);
  };

  function BoxColor() {
    if (!active) return "gridInactive";

    switch (row) {
      case 0:
        return "gridRow0";
      case 1:
        return "gridRow1";
      case 2:
        return "gridRow2";
      case 3:
        return "gridRow3";
      case 4:
        return "gridRow4";
      case 5:
        return "gridRow5";
      case 6:
        return "gridRow6";
    }
  }
  return (
    <div
      className={`gridBase ${BoxColor()} ${CurrentCell ? "playingCol" : ""}`}
      onClick={handleClick}
    />
  );
}
