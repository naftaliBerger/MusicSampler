import { createContext, useRef, useState, type ReactNode } from "react";

interface IProps {
  numColl: number;
  setNumColl: (state: number) => void;
  play: React.RefObject<boolean[][]>;
  numRows:number;
  CurrentCell:number;
  setCurrentCell:(state: number) => void;
}
export const Context = createContext<IProps | undefined>(undefined);

export function Provider({ children }: { children: ReactNode }) {
  const [numColl, setNumColl] = useState(23);
  const [CurrentCell,setCurrentCell] = useState(0);
  const play = useRef<boolean[][]>([]);
  const numRows = 7;

  return (
    <Context.Provider value={{ numColl, setNumColl, play,numRows,CurrentCell,setCurrentCell }}>
      {children}
    </Context.Provider>
  );
}
