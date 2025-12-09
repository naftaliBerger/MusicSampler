import { useContext } from "react";
import { Context } from "../../../Context/Provider.tsx";

export default function ToolSelectionButton() {
  const context = useContext(Context);
  const {toolsArry,ToolSInsex,setToolSInsex,toolsRef,img,setImg} = context!;

  const ToolSelection = () => {
    if (ToolSInsex === toolsArry.length - 1) {
      toolsRef.current = 0;
      setToolSInsex(0);
    } else {
      setToolSInsex(ToolSInsex + 1);
      toolsRef.current += 1;
    }
    setImg(toolsArry[toolsRef.current]);
  }

  return (
    <button className={`baseButton ${img}`}title="Tools Selection" onClick={ToolSelection}></button>
      
  );
}
