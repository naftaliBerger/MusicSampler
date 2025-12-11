import { useContext } from "react";
import { Context } from "./../Context/Provider.tsx";
import "./Loader.css"
export default function Loader() {
  const { numRows } = useContext(Context)!;

  return (
    <>
      {numRows === 0 && (
        <div className="loaderWrapper">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
