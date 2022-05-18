import React, { Component } from 'react';
import './Game.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Estrella from './estrella';

export default function Game ({id, name, image, rating, platforms, genres}) {
  var estrellas = []
  var rat = rating + ""
  for (let i = 0; i < rat[0]; i++) {

    estrellas.push(i+1);
    
  }
  const estrell = function(){
    console.log("pasaaaa")
    if(rat.slice(2) > 38 && rat.slice(2) < 63 ){
      return "estrella12.png"
    }else if(rat.slice(2) < 38){
      console.log("pasaaaa")
      return "estrella14.png"
    }else{
      return "estrella34.png"
    }
  }
 

  

  // if(rating)
  // {rating}✩★
  // const aa = function(){
  //   for (let i = 0; i < 3; i++) {
  //     const eleme = eleme + '<img className="ico" src="estrella34.png" alt="" />'
  //     return eleme
      
  //   }
  // }
  

    return (
      <Link className="game" to={`/game/${id}`}>
        {/* <div className="imagegame"> */}
              <img className="image" src={image} alt="" />
            {/* </div> */}

          {/* <Link to={`/game/${id}`} >
            <h5 className="card-title">{name}</h5>
          </Link> */}
          <p  className="card-title">
            {name}
          </p>
          <p className="rating">{estrellas.map(c => <Estrella key={c}/> )}{rat.slice(2) > 38 && rat.slice(2) < 63? <img className="ico" src="estrella12.png" alt="" />: rat.slice(2) < 38?<img className="ico" src="estrella14.png" alt="" />: <img className="ico" src="estrella34.png" alt="" />}</p>
{/*           
          <div className="row">
            
            
            <div className="rating">
              <p>{rating}</p>
            </div>
          </div>
        </div> */}

        {/* <div className="game-body">
          <Link to={`/game/${id}`} >
            <h5 className="card-title">{name}</h5>
          </Link>
          
          <div className="row">
            
            
            <div className="rating">
              <p>{rating}</p>
            </div>
          </div>
        </div> */}
      </Link>
    );
};

