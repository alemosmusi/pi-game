import React from 'react';
import './Game.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default function Game ({id, name, image, rating, platforms, genres}) {
    return (
      <div className="game">

        <div className="game-body">
          <Link to={`/game/${id}`} >
            <h5 className="card-title">{name}</h5>
          </Link>
          
          <div className="row">
            <div className="rating">
              <p>RATING</p>
              <p>{rating}</p>
            </div>
            <div className="imagegame">
              <img className="image" src={image} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

