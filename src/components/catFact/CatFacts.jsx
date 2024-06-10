import './catFacts.css'

function CatFacts({refreshCatFact, catFact}) {
  
  const handleClick =()=> {
    refreshCatFact()
  }

  return (
    <div className='catFacts-container'>
      <button onClick={handleClick}>🐱 Get a random cat fact!</button>

      <section>
        <h3>Random fact:</h3>
        <p>
            {
            catFact ? catFact : "..."
            }
        </p>
      </section>
    </div>
  )
}

export default CatFacts