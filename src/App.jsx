import { useEffect, useState } from 'react';
import './App.css';
import { getRandomCatFact } from './services/fact';
import CatImage from './components/catImage/CatImage';

function App() {

  const [catFact, setCatFact] = useState()
  const [catImage, setCatImage] = useState()

  const handleClick =()=> {
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
      <h1>Random cat facts and image generator!</h1>
      <button onClick={handleClick}>Get a random fact!</button>
      <p>Random fact: {
          catFact ? catFact : "..."
        }
      </p>
      <CatImage imageURL={catImage} />
    </div>
  );
}

export default App;
