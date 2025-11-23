import { useContext } from "react";
import {Context} from "../../Context/Provider.tsx"
import "./Footer.css"
export default function Footer() {
  const context = useContext(Context);
  const {numColl ,setNumColl} = context!;

  function handleDelete() {
    if (numColl !== 1) {
      setNumColl(numColl - 1);
    }
  }

  function handleAdd() {
    setNumColl(numColl + 1);
  }

  return (
    <div>
      <button onClick={handleAdd}>Add coll</button>
      <button onClick={handleDelete}>Delete coll</button>
    </div>
  );
}
