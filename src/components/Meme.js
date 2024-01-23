import React from "react";


export default function Meme(){
    const [meme , setMeme] = React.useState({
        topText:"",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });
    
    const [allMemes , setallMemes] = React.useState([]);

    React.useEffect(()=>{
        console.log('use effect');
         fetch('https://api.imgflip.com/get_memes')
          .then(res  => res.json())
          .then(data => setallMemes(data.data.memes))
    },[]) 
    
    console.log(allMemes);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url;
        setMeme(prevmeme =>{
            return{
                ...prevmeme , 
                randomImage: url
            }
        })    
    }
   
    function handleChange(event) {
        const {name , value} = event.target
        setMeme(prevmeme =>({
                ...prevmeme , 
                 [name] : value
        }))
        
    }

    return(
        <main>
          <div className="form">
              <input 
                  className="input"
                  type="text"  
                  placeholder="Top text"
                  name="topText"
                  value={meme.topText}
                  onChange={handleChange}
                />
              <input 
                  className="input" 
                  type="text"  
                  placeholder="Bottom text"
                  name="bottomText"
                  value={meme.bottomText}
                  onChange={handleChange}
                />
                  
              <button onClick={getMemeImage}>Get a new meme image  🖼</button>
          </div>
          <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
         </div>
        </main>
    )
}