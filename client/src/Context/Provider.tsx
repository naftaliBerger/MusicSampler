import React, { createContext, useEffect, useRef, useState, type ReactNode } from "react";

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
  audioRef:React.RefObject<HTMLAudioElement[]>
  volumeRef: React.RefObject<number>;
  lastColRef:React.RefObject<number>;
  loopRef:React.RefObject<boolean>;
  speedRef:React.RefObject<number>

}
export const Context = createContext<IProps | undefined>(undefined);

export function Provider({ children }: { children: ReactNode }) {
const toolsArry = ["piano", "guitar","xylophone"]; 
const [numColl, setNumColl] = useState(23);        
const [numRows,setNumRows] = useState(0)           
const [CurrentCell,setCurrentCell] = useState(-1); 
const [ToolSInsex,setToolSInsex] = useState(0);    

const toolsRef = useRef<number>(0);                
const play = useRef<boolean[][]>([]);              
const audioRef = useRef<HTMLAudioElement[]>([]);   
const volumeRef = useRef<number>(0.5);             
const lastColRef = useRef(0);                      
const loopRef = useRef<boolean>(false);            
const speedRef = useRef<number>(500)               



  
  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:3005/music/${toolsArry[toolsRef.current]}`);
      const data = await res.json();
      
      audioRef.current = data.urls.map((url: string) => {
        const audio = new Audio(url);
        audio.preload = "auto";
        console.log("audio loaded", audioRef.current);
        return audio; 
      });
      setNumRows(audioRef.current.length);
      
    }
    load();
  }, [ToolSInsex]);
  
  
  return (
    <div>
    <Context.Provider value={{ numColl, setNumColl, play,numRows,CurrentCell,setCurrentCell,toolsArry,ToolSInsex,setToolSInsex,toolsRef,audioRef,volumeRef,lastColRef,loopRef,speedRef }}>
      {children}
    </Context.Provider>
            

    </div>
  );
}
