import { useContext, useState } from "react";
import DeleteColButton from "./DeleteColButton/DeleteColButton.tsx";
import AddColButton from "./AddColButton/AddColButton.tsx";
import RefreshButton from "./RefreshButton/RefreshButton.tsx";
import ToggleLoopButton from "./ToggleLoopButton/ToggleLoopButton.tsx";
import ToolSelectionButton from "./ToolSelectionButton/ToolSelectionButton.tsx";
import PlayButton from "./PlayButton/PlayButton.tsx";
import { Context } from "../../Context/Provider.tsx";
import "./Buttons.css";

export default function Bottons() {

  const context = useContext(Context);
  const {numRows,volumeRef,speedRef} = context!;
  
  const [speed, setSpeed] = useState(500);
  const [volume, setVolume] = useState(0.5);


  return (
  <>
    {numRows > 0 && (
      <div className="Buttons">
        <PlayButton />
        <ToolSelectionButton />
        <AddColButton />
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
        <DeleteColButton />
        <RefreshButton />
        <ToggleLoopButton />
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
