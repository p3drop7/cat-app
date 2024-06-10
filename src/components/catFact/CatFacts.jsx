import './catFacts.css'

function CatFacts({handleFact, catFact}) {
  
  const handleClick =()=> {
    handleFact()
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