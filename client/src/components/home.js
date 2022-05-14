import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './sideBar.css';
import Games from "./Games";
import { connect, useDispatch, useSelector } from "react-redux";
import { obtenerGames } from "../redux/actions/gamesAction";
import Loading from "./Loading";


export function Home(){

    const allGames = useSelector((state) => state.arrayGames)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerGames())      
      
      }, [])
    
    
      
    
    
    
    const [pagina, setPagina] = useState(0)
    const [search, setSearch] = useState("")
    const [cant, setCant] = useState(0)
  
    const filterGames = () =>{
        if (search.length === 0){
            return allGames.slice(pagina, pagina + 15)
        }else{
            const filtered = allGames.filter(game => game.name.toLowerCase().includes(search))
            return filtered.slice(pagina, pagina + 15)

        }
        

    }


    const nextPage = () => {
        setPagina(pagina + 15)
    }

    const prevPage = () => {
        if (pagina >= 15){
        setPagina(pagina - 15)}
    }
    
    const onSearchChange = ({target}) => {
        setPagina(0);
        setSearch( target.value );
    }
   
    return (
        
        <>
        <div id="sidebar">
            <div className="btn">
                <span>&#9776;</span>
            </div>
            <ul>
                <li>BUSCAR</li>
                <input 
                placeholder="Buscar Juego"
                value={search}
                onChange={onSearchChange}
                />
                <li>FILTRAR</li>
                <li>ORDENAR</li>
            </ul>
        
        </div>
        
        <div>

            {allGames && allGames.length>1? <Games games={filterGames()}></Games>:<Loading></Loading> }
            {/* <Games games={filterGames()}></Games> */}
        </div>
        <div>
            {pagina >= 15 ? <button onClick={prevPage}>ATRAS</button> : ""}
            {14 < filterGames().length ? <button onClick={nextPage}>ADELANTE</button> : ""}
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