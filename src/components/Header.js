import React from "react"
import trollFace from "../images/Troll Face.png"
export default function Header(){
    return(
       <header>
            <nav className="nav">
              <div className="imagecontent">
                <img src={trollFace} alt="trollface" className="header-image"/>
                <h2 className="header-title">Meme Generator</h2>
              </div>
              <div className="right-header">React Course - Project 3</div>
            </nav>
       </header>
    )
}