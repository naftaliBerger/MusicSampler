import Bottons from "./comps/Bottons/Buttons.tsx";
import { Grid } from "./comps/Grid/Grid.tsx";
import {Provider} from "./Context/Provider.tsx"
import "./App.css"
const App: React.FC = () => {
  return (
    <div id="base">
      <h1 className="logo"></h1>
      <Provider>
        <Grid />
        <Bottons/>
      </Provider>
    </div>
  );
};

export default App;
