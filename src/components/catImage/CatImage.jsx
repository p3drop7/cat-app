import "./catimage.css"

function CatImage({imageURL}) {
  return (
    <div className="catImage-container">
      <p>Image generated using the first letter of the fact:</p>
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