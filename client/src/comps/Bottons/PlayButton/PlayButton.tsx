import { useContext } from "react";
import { Context } from "../../../Context/Provider.tsx";

export default function ToolSelectionButton() {
  const context = useContext(Context);
  const {numColl,play,numRows,setCurrentCell,audioRef,volumeRef,lastColRef,loopRef,playingRef,speedRef} = context!;

   const handlePlay = async () =>{
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
    <button className="baseButton play" title="toggle play" onClick={handlePlay}></button>
  
  );
}
