import Buttons from "./comps/Buttons/Buttons.tsx";
import { Grid } from "./comps/Grid/Grid.tsx";
import {Provider} from "./Context/Provider.tsx"
import Loader from "./Utils/Loader.tsx" 
import "./App.css"
const App: React.FC = () => {
  return (
    <div id="base">
      <h1 className="logo"></h1>
      <Provider>
        <Loader />
        <Grid />
        <Buttons/>
      </Provider>
    </div>
  );
};

export default App;
