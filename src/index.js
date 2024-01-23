import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Meme from './components/Meme';


function Reactpractice(){
       return(
          <div>
             <Header /> 
             <Meme />
             
          </div>
    )
}

ReactDOM.render(
    <Reactpractice/> , document.getElementById('root')
);


