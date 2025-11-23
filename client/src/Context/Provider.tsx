import { createContext, useRef, useState, type ReactNode } from "react";

interface IProps{
    numColl : number;
    setNumColl: (state: number) => void;
    play:React.RefObject<boolean[][]>;
    // setPlay:React.Dispatch<React.SetStateAction<boolean[][]>>
}
export const Context = createContext<IProps | undefined>(undefined);

export function Provider({ children }: { children: ReactNode }) {
  const [numColl, setNumColl] = useState(10);
//   const [play,setPlay] = useState<boolean[][]>([])
const play = useRef<boolean[][]>([])
  return (
    <Context.Provider value={{ numColl, setNumColl,play }}>
      {children}
    </Context.Provider>
  );
}

