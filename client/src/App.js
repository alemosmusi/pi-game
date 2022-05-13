import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import {Home} from './components/home';
import GamesDetail from './components/GameDetail';

function App() {
  return (
  <div className="App"> 
    <div>
      <Route path='/'>
        <NavBar></NavBar>
      </Route>
    </div>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route exact path='/game/:id'>
        <GamesDetail></GamesDetail>
      </Route>

  </div>
    
    
  );
}

export default App;
