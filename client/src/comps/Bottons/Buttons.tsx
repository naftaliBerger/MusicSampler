import { useContext, useRef, useState } from "react";
import { Context } from "../../Context/Provider.tsx";
import "./Buttons.css";

export default function Bottons() {
  const context = useContext(Context);
  const {numColl,setNumColl,play,numRows,setCurrentCell,toolsArry,ToolSInsex,setToolSInsex,toolsRef,audioRef} = context!;

  const [speed, setSpeed] = useState(500);
  const [volume, setVolume] = useState(0.5);
  const [img, setImg] = useState("piano");

  const playingRef = useRef(false);
  const lastColRef = useRef(0);
  const speedRef = useRef<number>(500);
  const loopRef = useRef<boolean>(false);
  const volumeRef = useRef<number>(0.5);

  //DeleteColButton
  function handleDelete() {
    if (numColl !== 1) setNumColl(numColl - 1);
  }

  //AddColButton
  function handleAdd() {
    setNumColl(numColl + 1);
  }

  //Refresh
  function Refresh() {
    lastColRef.current = 0;
    setCurrentCell(-1);
  }

  //LoopButton
  function toggleLoop() {
    loopRef.current = !loopRef.current;
  }

  //ToolsButton
  function ToolSelection() {
    if (ToolSInsex === toolsArry.length - 1) {
      toolsRef.current = 0;
      setToolSInsex(0);
    } else {
      setToolSInsex(ToolSInsex + 1);
      toolsRef.current += 1;
    }
    setImg(toolsArry[toolsRef.current]);
  }

  //playButton
  async function handlePlay() {
    playingRef.current = !playingRef.current;

    do {
      for (let col = lastColRef.current; col < numColl; col++) {
        if (!playingRef.current) break;

        setCurrentCell(col);
        lastColRef.current = col;

        for (let row = 0; row < numRows; row++) {
          if (play.current[col][row]) {
            const audio = audioRef.current[row];
            if (audio) {
              audio.currentTime = 0; 
              audio.volume = volumeRef.current;
              audio.play();
            }
          }
        }

        await new Promise((res) => setTimeout(res, speedRef.current));
      }

      if (lastColRef.current === numColl - 1) {
        lastColRef.current = 0;
        setCurrentCell(-1);
      }
    } while (loopRef.current);

    playingRef.current = false;
  }

  return (
  <>
    {numRows > 0 && (
      <div className="Buttons">
        <button className="baseButton play" title="toggle play" onClick={handlePlay}></button>
        <button className={`baseButton ${img}`}title="Tools Selection" onClick={ToolSelection}></button>
        <button className="baseButton addColl"title="Add column" onClick={handleAdd}></button>
        <div>
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
        <span>{1000 - speed + 100}</span>
        </div>
        <button className="baseButton DeleteColl"title="Delete column"  onClick={handleDelete}></button>
        <button className="baseButton Refresh" title="Refresh" onClick={Refresh}></button>
        <button className="baseButton loop" title="toggle Loop" onClick={toggleLoop}></button>
        <div>
          <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => {
            const newVolume = Number(e.target.value);
            setVolume(newVolume);
            volumeRef.current = newVolume;
          }}
          className="volume"
        />
        <span>{volume}</span>
        </div>
        
      </div>
    )}
  </>
);

}
