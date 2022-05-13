import React, { useEffect } from 'react';
import './Games.css';
import Game from './Game';
import { connect } from "react-redux";
import { obtenerGames } from '../redux/actions/gamesAction';



export default function Games({games}) {

    // useEffect(() => {
    //   obtenerGames()
    
    // }, [])
    
    
  return (
    <div className='cards'>
      {games.map(c => <Game
          key={c.id}
          id={c.id}
          name={c.name}
          image={c.image}
          rating={c.rating}
          platforms={c.platforms}
          genres={c.genres}

        /> )}
    </div>
  );
}




// function mapStateToProps(state) { // recibe el estado global de redux
//     return { // objeto que transforma estado global en props para el componente
//       games: state.arrayGames // array con todas las peliculas
//     };
//   }
//   function mapDispatchToProps(dispacth){
//     return {
//       obtenerGames: dispacth(obtenerGames())
//     }
//   }
  
  
//   export default connect(mapStateToProps, mapDispatchToProps)(Games);