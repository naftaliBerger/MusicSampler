import { useState } from "react";
import "./Cell.css";

export function Cell({ row }: { row: number }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (!active) {
      const audio = new Audio(`http://localhost:3005/CLFQD_Snare_${row}.wav`);
      audio.play();
    }
    setActive((prev) => !prev);
  };

  return (
    <div
      className={active ? "gridActive" : "gridInactive"}
      onClick={handleClick}
    />
  );
}
