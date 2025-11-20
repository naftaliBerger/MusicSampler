import { useState } from "react";
import "./Cell.css";

export function Cell({ row }: { row: number }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (!active) {
      const audio = new Audio(`http://localhost:3005/A${row}.wav`);
      audio.play();
    }
    setActive((prev) => !prev);
  };
  function BoxColor() {
  if (!active) return "gridInactive";

  switch (row) {
    case 0: return "gridRow0";
    case 1: return "gridRow1";
    case 2: return "gridRow2";
    case 3: return "gridRow3";
    case 4: return "gridRow4";
    case 5: return "gridRow5";
    case 6: return "gridRow6";
  }
}
  return (
    <div
      className={`gridBase ${BoxColor()}`}
      onClick={handleClick}
    />
  );
}
