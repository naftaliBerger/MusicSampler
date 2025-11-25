import { useContext, useRef, useState } from "react";
import { Context } from "../../Context/Provider.tsx";
import "./Buttons.css";
export default function Bottons() {
  const context = useContext(Context);
  const { numColl, setNumColl, play, numRows, setCurrentCell } = context!;
  const [speed, setSpeed] = useState(500);
  // const [loop, setLoop] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef(true);
  const lastColRef = useRef(0);
  const speedRef = useRef<number>(500);
  // const loopRef = useRef<boolean>(false);
  
  
  //deleteCollButton
  function handleDelete() {
    if (numColl !== 1) {
      setNumColl(numColl - 1);
    }
  }

  //addCollButton
  function handleAdd() {
    setNumColl(numColl + 1);
  }

  //playButton
  async function handlePlay() {
    playingRef.current = !playingRef.current;
    // while (loopRef.current) {
      for (let col = lastColRef.current; col < numColl; col++) {
        setCurrentCell(col);
        if (playingRef.current) {
          lastColRef.current = col;
          for (let row = 0; row < numRows; row++) {
            if (play.current[col][row]) {
              audioRef.current = new Audio(`http://localhost:3005/A${row}.wav`);
              audioRef.current.play();
            }
          }
          await new Promise((res) => setTimeout(res, speedRef.current));
        }
      }
    // }
    if (lastColRef.current == numColl - 1) {
      lastColRef.current = 0;
    }
    playingRef.current = false;
  }

  //RefreshButton
  function Refresh() {
    lastColRef.current = 0;
  }
  // function toggleLoop() {
  //   loopRef.current = !loopRef.current;
  // }
  return (
    <div className="Buttons">
      <button className="baseButton Refresh" onClick={Refresh}></button>
      <button className="baseButton play" onClick={handlePlay}></button>
      <input
        className="speed"
        type="range"
        value={speed}
        min={100}
        max={1000}
        step={50}
        onChange={(e) => {
          setSpeed(Number(e.target.value)),
            (speedRef.current = Number(e.target.value));
        }}
      />
      <button className="baseButton addColl" onClick={handleAdd}></button>
      <button className="baseButton DeleteColl" onClick={handleDelete}></button>
      {/* <button onClick={toggleLoop}>sss</button> */}
    </div>
  );
}
