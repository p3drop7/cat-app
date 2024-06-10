import "./catimage.css"

function CatImage({imageURL}) {
  return (
    <div className="catImage-container">
      <h3>Image generated using the first letter of the fact:</h3>
      
      {
        imageURL ?
          <div 
          className="catImage" 
          style={{ backgroundImage: `url(${imageURL})` }}
          >
          </div>
          : <p>...</p>
      }
      
    </div>
  )
}

export default CatImage