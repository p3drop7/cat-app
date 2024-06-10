import "./App.css";
import CatImage from "./components/catImage/CatImage";
import CatFacts from "./components/catFact/CatFacts";
import useCatImage from "./hooks/useCatImage";
import useCatFact from "./hooks/useCatFact";

function App() {
  const { catFact, refreshCatFact } = useCatFact();
  const { catImageURL } = useCatImage({ catFact });

  return (
    <div className="App">
      <h1>😻 Random cat facts and image generator! 😻</h1>
      <CatFacts refreshCatFact={refreshCatFact} catFact={catFact} />
      <CatImage catImageURL={catImageURL} />
    </div>
  );
}

export default App;
