import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './sideBar.css';
import Games from "./Games";
import { connect, useDispatch, useSelector } from "react-redux";
import { obtenerGames } from "../redux/actions/gamesAction";


export function Home(){

    const allGames = useSelector((state) => state.arrayGames)
    const [isLOading, setIsLOading] = useState(true)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerGames())
                   
      
      }, [])
    
    
    
    const [pagina, setPagina] = useState(0)
    

    const filterGames = () =>{
        return allGames.slice(pagina, pagina + 15)

    }

    const nextPage = () => {
        setPagina(pagina + 15)
    }

    const prevPage = () => {
        if (pagina >= 15){
        setPagina(pagina - 15)}
    }


    return (
        
        <>
        <div id="sidebar">
            <div className="btn">
                <span>&#9776;</span>
            </div>
            <ul>
                <li>BUSCAR</li>
                <li>FILTRAR</li>
                <li>ORDENAR</li>
            </ul>
        
        </div>
        <div>
            <Games games={filterGames()}></Games>
        </div>
        <div>
            {pagina >= 15 ? <button onClick={prevPage}>ATRAS</button> : ""}
            {pagina + 15 < allGames.length ? <button onClick={nextPage}>ADELANTE</button> : ""}
        </div>
        </>
    )
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