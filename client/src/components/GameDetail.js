import React, { useEffect } from 'react';
import './GameDetail.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { obtenerDetalle } from '../redux/actions/gamesAction';
import Loading from './Loading';



export default function GamesDetail() {
    
    // useParams usar este...
    const params = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(obtenerDetalle(params.id))
        
      
      }, [])
      const gameDetail = useSelector((state) => state.gameDetail)
      
      var plataformas = ""
      var genres = ""
      var imagen = ""
      if(gameDetail.slug){
          imagen = gameDetail.background_image
        for (let index = 0; index < gameDetail.platforms.length; index++) {
                        plataformas = plataformas + " // " + gameDetail.platforms[index].platform.name + " //";
                    }
                    for (let index = 0; index < gameDetail.genres.length; index++) {
                        genres = genres + " // " + gameDetail.genres[index].name + " //";
                    }
          
      }
      if(gameDetail.updatedAt){
          imagen = gameDetail.image
        for (let index = 0; index < gameDetail.platforms.length; index++) {
                    plataformas = plataformas + " // " + gameDetail.platforms[index] + " //";
        }
        for (let index = 0; index < gameDetail.genres.length; index++) {
            genres = genres + " // " + gameDetail.genres[index].name + " //";
}
          
      }
      console.log(gameDetail)

      
      //destructurar gameDetail por si no existe parametro

    return(
        
        <>

        {gameDetail.name && gameDetail.name ? <h1>nombre</h1> :<Loading></Loading> }
        
        {/* <h1>nombre</h1> */}
        <div>{gameDetail.name}</div>
        <br></br>
        {/* <h1>detalle</h1> */}
        <div>{gameDetail.description}</div>
        <br></br>
        {/* <h1>rating</h1> */}
        <div>{gameDetail.rating}</div>
        <br></br>
        {/* <h1>lanzamiento</h1> */}
        <div>{gameDetail.released}</div>
        <br></br>
        {/* <h1>plataforma</h1> */}
        <div>{plataformas}</div>
        <br></br>
        {/* <h1>generos</h1> */}
        <div>{genres}</div>
        <img src={imagen} alt=''></img>
        
        
        
        
        
        
        
        
        
        
        
        </>

        

    )
}