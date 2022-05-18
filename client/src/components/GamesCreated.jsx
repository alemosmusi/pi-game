import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './sideBar.css';
import './home.css';
import Games from "./Games";
import { connect, useDispatch, useSelector } from "react-redux";
import { obtenerGames, obtenerGamesCreated, eli } from "../redux/actions/gamesAction";
import Loading from "./Loading";
import { listaGeneros, listaPlataformas } from './datos';
import filtrarG from "./funciones/filtrarG";


export function GamesCreated(){

    const allGames = useSelector((state) => state.aGamesCreated)
    const eli = useSelector((state) => state.eli)
    const [allG, setallG] = useState(allGames)
    const [pagina, setPagina] = useState(0)
    const [search, setSearch] = useState("")
    const [AZ, setAZ] = useState("A-Z")
    const [RATINGAS, setRATINGAS] = useState("RATING-↧")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerGamesCreated())      
      
      }, [])

      useEffect(() => {
        dispatch(obtenerGamesCreated())      
      
      }, [eli])
    
    const filterGames = () =>{
        
        var filtered = allGames
        

        if (search.length > 0){
         filtered = filtered.filter(game => game.name.toLowerCase().includes(search))}
         if(envG.length > 0){ filtered = filtrarG(filtered,envG)}
         
        return filtered.slice(pagina, pagina + 15)
        
       
    }
    useEffect(() => {
      
    //   setallG(allGames)
    filterGames()
      
    }, [allGames,allG,search])

      
    

    const nextPage = () => {
        setPagina(pagina + 15)
    }

    const prevPage = () => {
        if (pagina >= 15){
        setPagina(pagina - 15)}
    }

    
    const onSearchChange = ({target}) => {
        if(allG.length === 0){
            setallG(allGames)
        }
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
    
      
    
    
    //   useEffect(() => {
    //     filterGames()
    // }, [ordenarAZ])
    







    const XX = () =>{
        
        var X = "X"
        

        
        return X
        
       
    }




    if(allGames === "vacia"){
        return (
            <img className="gameover" src="https://static3.thegamerimages.com/wordpress/wp-content/uploads/2020/09/Super-Mario-3D-World-Game-Over.jpg" alt="" />
        )
    }else{
         
    return (
        
        <div className="home">
            <div id="sidebar">
            {/* <div className="btn">
                <span>&#9776;</span>
            </div> */}
                <ul>
                    <li>BUSCAR</li>
                    <input 
                    placeholder="Buscar Juego"
                    value={search}
                    onChange={onSearchChange}
                    name= "buscar"
                    />
                    <li>FILTRAR</li>
                    <input placeholder="generos" value={searchg} onChange={onSearchGenre}/>
                    {genero.map((c) => (<ul className="lcheck" key={c+"a"}><li className="ccheck" key={c+"b"}>{c}</li><input type="checkbox" key={c} name={c} value={c} onChange={handleInputCheckG} defaultChecked={palomita(c)}></input></ul>) )}
                    <li>ORDENAR</li>
                    <button className="btns" onClick={ordenarAZ}>{AZ}</button>
                    <button className="btns" onClick={ordenarRATING}>{RATINGAS}</button>
                </ul>
        
            </div>
            
            <div className="contenedor">
                <div>
                    {
                    allGames && allGames.length>=1 || allG.length>=1? <Games games={filterGames()} created={XX()}></Games>:
                    <Loading></Loading> 
                    }
                </div>
                <div>
                    {pagina >= 15 ? <button onClick={prevPage} className="btnsp">&lt;</button> : ""}
                    {14 < filterGames().length ? <button onClick={nextPage} className="btnsp">&gt;</button> : ""}
                </div>
            </div>

            
        
        </div>
    )


    }





  

    
  
}


