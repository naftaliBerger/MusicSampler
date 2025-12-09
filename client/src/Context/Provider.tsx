import React, { createContext, useEffect, useRef, useState, type ReactNode } from "react";
import "./Provider.css"
interface IProps {
  numColl: number;
  setNumColl: (state: number) => void;
  play: React.RefObject<boolean[][]>;
  numRows:number;
  CurrentCell:number;
  setCurrentCell:(state: number) => void;
  toolsArry:string[];
  ToolSInsex:number;
  setToolSInsex:(state: number) => void;
  toolsRef:React.RefObject<number>;
  // sounds: React.RefObject<string[]>;
  audioRef:React.RefObject<HTMLAudioElement[]>
  volumeRef: React.RefObject<number>;
  lastColRef:React.RefObject<number>;
  loopRef:React.RefObject<boolean>;
  playingRef:React.RefObject<boolean>;
  speedRef:React.RefObject<number>
  img:string;
  setImg:(state: string) => void;
}
export const Context = createContext<IProps | undefined>(undefined);

export function Provider({ children }: { children: ReactNode }) {
const toolsArry = ["piano", "guitar","xylophone"]; // רשימת הכלים הזמינים
const [numColl, setNumColl] = useState(23);        // מספר העמודות במטריצה
const [numRows,setNumRows] = useState(0)           // מספר השורות במטריצה (תלוי במספר הצלילים)
const [CurrentCell,setCurrentCell] = useState(-1); // העמודה שמנוגנת כרגע (-1 = אף אחת)
const [ToolSInsex,setToolSInsex] = useState(0);    // האינדקס של הכלי הנבחר מתוך toolsArry
const [img, setImg] = useState("piano");           // שם הכלי הנוכחי להצגה/אייקון
const toolsRef = useRef<number>(0);                // אינדקס כלים שימושי ל־ref (כמו ToolSInsex אבל mutable)
const play = useRef<boolean[][]>([]);              // מטריצה של מצב פעיל/לא פעיל של כל תא (true = יש להשמיע צליל)
const audioRef = useRef<HTMLAudioElement[]>([]);   // מערך של אובייקטי Audio לכל שורה
const volumeRef = useRef<number>(0.5);             // ווליום עכשווי (0–1)
const lastColRef = useRef(0);                      // עמודת המיקום האחרונה שהושמעה בלולאת play
const loopRef = useRef<boolean>(false);            // האם הלולאה נמשכת באופן אוטומטי (loop on/off)
const playingRef = useRef(false);                  // האם המוזיקה מנוגנת כרגע
const speedRef = useRef<number>(500)               // מהירות הלולאה במילישניות (כמה זמן בין עמודות)



  
  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:3005/music/${toolsArry[toolsRef.current]}`);
      const data = await res.json();
      // const audioPromises: Promise<void>[] = []
      
      audioRef.current = data.urls.map((url: string) => {
        const audio = new Audio(url);
        audio.preload = "auto";
        console.log("audio loaded", audioRef.current);
        // audioPromises.push(waitForAudioLoad(audio));
        return audio; 
      });
      // await Promise.all(audioPromises)
      setNumRows(audioRef.current.length);
      
    }
    load();
  }, [ToolSInsex]);
  
  //   const waitForAudioLoad = async (audio: HTMLAudioElement) => {
  //   if (audio.readyState >= 4) return; 

  //   await new Promise<void>((resolve) => {
  //     audio.addEventListener("canplaythrough", () => {console.log("done"); resolve()}, { once: true });
  //   });
  // };

  return (
    <div>
    <Context.Provider value={{ numColl, setNumColl, play,numRows,CurrentCell,setCurrentCell,toolsArry,ToolSInsex,setToolSInsex,toolsRef,audioRef,volumeRef,lastColRef,loopRef,img,setImg,playingRef,speedRef }}>
      {children}
    </Context.Provider>
            {numRows === 0 && (
        <div className="loaderWrapper">
          <div className="loader"></div>
        </div>
      )}

    </div>
  );
}
