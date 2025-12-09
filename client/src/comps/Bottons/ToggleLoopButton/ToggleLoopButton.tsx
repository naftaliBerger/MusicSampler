import { useContext } from "react";
import { Context } from "../../../Context/Provider.tsx";

export default function ToggleLoopButton() {
  const context = useContext(Context);
  const {loopRef} = context!;

  const toggleLoop = () => {
    loopRef.current = !loopRef.current;
  }

  return (
      <button className="baseButton loop" title="toggle Loop" onClick={toggleLoop}></button>
      
  );
}
