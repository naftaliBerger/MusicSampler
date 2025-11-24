import Bottons from "./comps/Bottons/Bottons.tsx";
import { Grid } from "./comps/Grid/Grid.tsx";
import {Provider} from "./Context/Provider.tsx"
import "./App.css"
const App: React.FC = () => {
  return (
    <div id="base">
      <h1>🎹Music Sampler🎸</h1>
      <Provider>
        <Grid />
        <Bottons/>
      </Provider>
    </div>
  );
};

export default App;
