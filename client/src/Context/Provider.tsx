import { createContext, useRef, useState, type ReactNode } from "react";

interface IProps {
  numColl: number;
  setNumColl: (state: number) => void;
  play: React.RefObject<boolean[][]>;
  numRows:number;
}
export const Context = createContext<IProps | undefined>(undefined);

export function Provider({ children }: { children: ReactNode }) {
  const [numColl, setNumColl] = useState(10);
  const play = useRef<boolean[][]>([]);
  const numRows = 7;
  return (
    <Context.Provider value={{ numColl, setNumColl, play,numRows }}>
      {children}
    </Context.Provider>
  );
}
