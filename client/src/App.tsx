import PlayButton from "./comps/PlayButton.tsx";
import {Grid} from "./comps/Grid/Grid.tsx";

const App: React.FC = () => {
  return (
    <div>
      <h1>Music Sampler</h1>
      <PlayButton />
      <Grid />
    </div>
  );
};

export default App;
