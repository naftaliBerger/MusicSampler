import { useContext } from "react";
import { Context } from "../../../Context/Provider.tsx";

export default function RefreshButton() {
  const context = useContext(Context);
  const {lastColRef,setCurrentCell } = context!;

  const Refresh = () => {
    lastColRef.current = 0;
    setCurrentCell(-1);
  }

  return (
      <button className="baseButton Refresh" title="Refresh" onClick={Refresh}></button>
      
  );
}
