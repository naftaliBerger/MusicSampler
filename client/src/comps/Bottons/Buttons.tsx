import { useContext, useRef, useState } from "react";
import { Context } from "../../Context/Provider.tsx";
import "./Buttons.css";
export default function Bottons() {
  const context = useContext(Context);
  const { numColl, setNumColl, play, numRows, setCurrentCell } = context!;
  const [speed, setSpeed] = useState(500);
  const [_, setLoop] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef(false);
  const lastColRef = useRef(0);
  const speedRef = useRef<number>(500);
  const loopRef = useRef<boolean>(false);
  const [volume, setVolume] = useState(0.5);
  const volumeRef = useRef<number>(0.5);

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
    do {
      for (let col = lastColRef.current; col < numColl; col++) {
        if (!playingRef.current) break;
        setCurrentCell(col);
        if (playingRef.current) {
          lastColRef.current = col;
          for (let row = 0; row < numRows; row++) {
            if (play.current[col][row]) {
              audioRef.current = new Audio(`http://localhost:3005/A${row}.mp3`);
              audioRef.current.volume = volumeRef.current;
              audioRef.current.play();
            }
          }
          await new Promise((res) => setTimeout(res, speedRef.current));
        }
      }
      if (lastColRef.current == numColl - 1) {
        lastColRef.current = 0;
      }
    } while (loopRef.current);
    playingRef.current = false;
  }

  //RefreshButton
  function Refresh() {
    lastColRef.current = 0;
  }

  //loopButton
  function toggleLoop() {
    loopRef.current = !loopRef.current;
    setLoop(loopRef.current);
    console.log(loopRef.current);
  }
  return (
    <div className="Buttons">
      <button className="baseButton play" onClick={handlePlay}></button>
      <button className="baseButton addColl" onClick={handleAdd}></button>
      <input
        className="speed"
        type="range"
        min={100}
        max={1000}
        step={50}
        value={1000 - speed + 100} 
        onChange={(e) => {
          const newSpeed = 1000 - Number(e.target.value) + 100; 
          setSpeed(newSpeed);
          speedRef.current = newSpeed;
        }}
      />
      <button className="baseButton DeleteColl" onClick={handleDelete}></button>
      <button className="baseButton Refresh" onClick={Refresh}></button>
      <button className="baseButton loop" onClick={toggleLoop}></button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => {
            setVolume(Number(e.target.value));
            volumeRef.current = Number(e.target.value);
          }}
          className="volume"
        />
    </div>
  );
}
