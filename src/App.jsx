import { useEffect, useState } from 'react';
import { getRandomCatFact } from './services/fact';
import CatImage from './components/catImage/CatImage';
import CatFacts from './components/catFact/CatFacts';
import './App.css';

function App() {

  const [catFact, setCatFact] = useState()
  const [catImage, setCatImage] = useState()

  const handleFact =()=> {
    getRandomCatFact().then(res => {
      setCatFact( res )
    })
  }

  useEffect(()=> {
    if(!catFact) return
    const firstWord = catFact.split(" ")[0]
    setCatImage("https://cataas.com/cat/says/" + firstWord + "?fontSize=100&fontColor=red")
  }, [catFact])
  
  return (
    <div className="App">
      <h1>😻 Random cat facts and image generator! 😻</h1>
      <CatFacts handleFact={handleFact} catFact={catFact} />
      <CatImage imageURL={catImage} />
    </div>
  );
}

export default App;
