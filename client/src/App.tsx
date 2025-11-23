import Footer from "./comps/Footer/Footer.tsx";
import { Grid } from "./comps/Grid/Grid.tsx";
import {Provider} from "./Context/Provider.tsx"
const App: React.FC = () => {
  return (
    <div>
      <h1>🎹Music Sampler🎸</h1>
      <Provider>
        <Grid />
        <Footer/>
      </Provider>
    </div>
  );
};

export default App;
