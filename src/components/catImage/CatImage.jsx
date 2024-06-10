import "./catimage.css"

function CatImage({catImageURL}) {
  return (
    <div className="catImage-container">
      <h3>Image generated using the first letter of the fact:</h3>
      
      {
        catImageURL ?
          <div 
          className="catImage" 
          style={{ backgroundImage: `url(${catImageURL})` }}
          >
          </div>
          : <p>...</p>
      }
      
    </div>
  )
}

export default CatImage