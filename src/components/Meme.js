import memesData from "../memesData"

export default function Meme(){

  let url

    function getMemeImage(){
      const memesArray = memesData.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      url = memesArray[randomNumber].url
      console.log(url)
    }

    return(
      <main>
         <p>{url}</p>
        <div className="form">
           
            <label className="form--label">Top Text</label>
            <input
             type="text"
             placeholder="Top text"
             className="form--input"
             />
            
              <label className="form--label">Bottom Text</label>
            <input
             type="text"
             placeholder="Bottom text"
             className="form--input"
             />
            
            <button 
            className="form--button"
            onClick={getMemeImage}
            >Get a new meme image
            </button>
        </div>
      </main>
    )
}