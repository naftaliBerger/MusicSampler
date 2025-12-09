import { useContext } from "react";
import { Context } from "../../../Context/Provider.tsx";

export default function AddColButton() {
  const context = useContext(Context);
  const { numColl, setNumColl } = context!;

  const handleAdd = () => {
    setNumColl(numColl + 1);
  }

  return (
    <button className="baseButton addColl"title="Add column" onClick={handleAdd}></button>
      
  );
}
