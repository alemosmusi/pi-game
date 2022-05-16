import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './sideBar.css';
import Games from "./Games";
import { connect, useDispatch, useSelector } from "react-redux";
import { obtenerGames } from "../redux/actions/gamesAction";
import Loading from "./Loading";
import { listaGeneros, listaPlataformas } from './datos';
import filtrarG from "./funciones/filtrarG";


export function Home(){

    var allGames = useSelector((state) => state.arrayGames)

    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerGames())      
      
      }, [])
    
    
      
    useEffect(() => {
        return filterGames()
    }, [SortAZ])
    
    
    
    const [pagina, setPagina] = useState(0)
    const [search, setSearch] = useState("")
    const [AZ, setAZ] = useState("A-Z")
    const [RATINGAS, setRATINGAS] = useState("RATING-↧")
   
    const filterGames = () =>{
        if(envG.length > 0){ allGames = filtrarG(allGames,envG)} 
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
    
    const ordenarAZ = () => {
        if(AZ === "A-Z"){
            setAZ("Z-A")
            allGames.sort(SortAZ);
        }else{
            setAZ("A-Z")
            allGames.sort(SortZA);
        }
    }

    const ordenarRATING = () => {
        if(RATINGAS === "RATING-↧"){
            setRATINGAS("RATING-↥")
            allGames.sort(SortRATINGA);
        }else{
            setRATINGAS("RATING-↧")
            allGames.sort(SortRATINGB);
        }
    }
    

    function SortAZ(x, y){
        if (x.name.toLowerCase() < y.name.toLowerCase()) {return -1;}
        if (x.name.toLowerCase() > y.name.toLowerCase()) {return 1;}
        return 0;
    }
    function SortZA(x, y){
        if (x.name.toLowerCase() < y.name.toLowerCase()) {return 1;}
        if (x.name.toLowerCase() > y.name.toLowerCase()) {return -1;}
        return 0;
    }

    function SortRATINGA(x, y){
        if (x.rating < y.rating) {return -1;}
        if (x.rating > y.rating) {return 1;}
        return 0;
    }
    function SortRATINGB(x, y){
        if (x.rating < y.rating) {return 1;}
        if (x.rating > y.rating) {return -1;}
        return 0;
    }







    const [searchg, setsearchg] = useState("")
const [genero, setGenero] = useState([])

const filtergenress = () =>{ //filtra lo que voy buscando
  
  if (searchg.length > 0){
    
      const filteredg = listaGeneros.filter(g => g.toLowerCase().includes(searchg))
      return filteredg
  }else{
      return []
  }
}
useEffect(() => {
  setGenero(filtergenress())
  
}, [searchg])


const onSearchGenre = ({target}) => { //busca los generos
    setsearchg( target.value );

    
}

const palomita = (c) => { //para ver si tiene o no palomita cuando mapea
  if(def[c]){
    return true
  }else{
    return ""
  }
  
}


const [envG, setenvG] = useState([])
const [def, setdef] = useState([])
  const handleInputCheckG = function(e){
      setdef({
          
          ...def, [e.target.name]: e.target.checked
          
      })
         
  }

useEffect(() => {
  senG()
}, [def])

 
  const senG = ()=>{ //filtra los que tienen palomita true
    var a = Object.keys(def).map((dd) => def[dd]? dd: null).filter(a => a !== null)
    setenvG(a)
  }

  


  useEffect(() => {
    filterGames()
}, [ordenarAZ])






 















    
   
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
                <input placeholder="generos" value={searchg} onChange={onSearchGenre}/>
                {genero.map((c) => (<ul key={c+"a"}><li key={c+"b"}>{c}</li><input type="checkbox" key={c} name={c} value={c} onChange={handleInputCheckG} defaultChecked={palomita(c)}></input></ul>) )}
                <li>ORDENAR</li>
                <button onClick={ordenarAZ}>{AZ}</button>
                <button onClick={ordenarRATING}>{RATINGAS}</button>
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