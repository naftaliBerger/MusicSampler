import { useContext } from "react";
import { Context } from "../../../Context/Provider.tsx";

export default function DeleteColButton() {
  const context = useContext(Context);
  const { numColl, setNumColl } = context!;

  const handleDelete = () => {
    if (numColl > 1) setNumColl(numColl - 1);
  };

  return (
    <button className="baseButton DeleteColl" title="Delete column" onClick={handleDelete}></button>
      
  );
}
