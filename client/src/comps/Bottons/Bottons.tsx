import { useContext, useRef} from "react";
import { Context } from "../../Context/Provider.tsx";
import "./Bottons.css";
export default function Footer() {
  const context = useContext(Context);
  const { numColl, setNumColl, play, numRows } = context!;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef(false);
  const lastColRef = useRef(0);

  function handleDelete() {
    if (numColl !== 1) {
      setNumColl(numColl - 1);
    }
  }

  function handleAdd() {
    setNumColl(numColl + 1);
  }

  async function handlePlay() {
    playingRef.current = !playingRef.current;
    for (let col = lastColRef.current; col < numColl; col++) {
      console.log(col);
      console.log(playingRef.current,lastColRef);
      if (playingRef.current) {
        lastColRef.current = col;
        console.log(playingRef.current);
        for (let row = 0; row < numRows; row++) {
          if (play.current[col][row]) {
            audioRef.current = new Audio(`http://localhost:3005/A${row}.wav`);
            audioRef.current.play();
          }
        }
        await new Promise((res) => setTimeout(res, 500));
      }
      //  else {
      //   audioRef.current?.pause();
      // }
    }
    if(lastColRef.current == numColl - 1){
      lastColRef.current = 0;
    }
    playingRef.current = false;
  }
  return (
    <div className="footer">
      <button className="addColl" onClick={handleAdd}></button>
      <button className="play" onClick={handlePlay}></button>
      <button className="DeleteColl" onClick={handleDelete}></button>
    </div>
  );
}
