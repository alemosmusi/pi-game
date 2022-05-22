import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import {Home} from './components/home';
import GamesDetail from './components/GameDetail';
import { CreateGame } from './components/CreateGame';
import { GamesCreated } from './components/GamesCreated';
import Landing from './components/landing';

function App() {
  return (
  <div className="App"> 
    <div>
      <Route path='/home'>
        <NavBar></NavBar>
      </Route>
    </div >
      <Route exact path='/home'>
        <Home ></Home>
      </Route>
      <Route exact path='/home/game/:id'>
        <GamesDetail></GamesDetail>
      </Route>
      <Route exact path='/home/creategame'>
        <CreateGame></CreateGame>
      </Route>
      <Route exact path='/home/gamescreated'>
        <GamesCreated></GamesCreated>
      </Route>
      <Route exact path='/'>
        <Landing></Landing>
      </Route>
      

  </div>
    
    
  );
}

export default App;
