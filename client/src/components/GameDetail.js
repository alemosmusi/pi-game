import React, { useEffect } from 'react';
import './GameDetail.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { obtenerDetalle } from '../redux/actions/gamesAction';
import Loading from './Loading';
import Estrella from './estrella';



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
      var pla = []
      if(gameDetail.slug){
          imagen = gameDetail.background_image
        for (let index = 0; index < gameDetail.platforms.length; index++) {
                        plataformas = plataformas + " // " + gameDetail.platforms[index].platform.name + " //";
                        pla.push(gameDetail.platforms[index].platform.name)
                    }
                    for (let index = 0; index < gameDetail.genres.length; index++) {
                        genres = genres + " // " + gameDetail.genres[index].name + " //";
                    }
          
      }
      if(gameDetail.updatedAt){
          imagen = gameDetail.image


        //   const hero = document.querySelector(".hero");
        //   hero.style.setProperty("background", `url(${imagen})`);



        for (let index = 0; index < gameDetail.platforms.length; index++) {
                    plataformas = plataformas + " // " + gameDetail.platforms[index] + " //";
                    pla.push(gameDetail.platforms[index])
        }
        for (let index = 0; index < gameDetail.genres.length; index++) {
            genres = genres + " // " + gameDetail.genres[index].name + " //";
}
          
      }
      
      
      var estrellas = []
  var rat = gameDetail.rating + ""
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

  console.log(genres);
      
      //destructurar gameDetail por si no existe parametro https://codepen.io/drehimself/pen/azBmdK?editors=1100


  if(!gameDetail.name){

    return (
      <Loading></Loading>
    )

  }else{
    return(
        
      <div className='gamedetail'>
          <div className="container" >
              <div className="hero">
               <img src={imagen} alt="cover" className='imaa'/>
               <div className="details">
                  <div className="title1">{gameDetail.name}</div>
                  <div className="title2">{genres}</div>
                  <p className="ratingg">{estrellas.map(c => <Estrella key={c} det={c}/> )}{rat.slice(2) > 38 && rat.slice(2) < 63? <img className="ico2" src="http://localhost:3000/estrella12.png" alt="" />: rat.slice(2) < 38?<img className="ico2" src="http://localhost:3000/estrella14.png" alt="" />: <img className="ico2" src="http://localhost:3000/estrella34.png" alt="" />}</p>


               </div>
              </div>
              <div className="descrip">
                <ul className="plaa">
                  {pla.map(c => <li key={c} className="tagg">{c}</li> )}
                </ul>
                <div className="dess">
                  <p>{gameDetail.description}</p>
                </div>
                


              </div>
              
          
 
          </div>
      </div>

      // {gameDetail.name && gameDetail.name ? <h1>nombre</h1> :<Loading></Loading> }
      
      // {/* <h1>nombre</h1> */}
      // <div>{gameDetail.name}</div>
      // <br></br>
      // {/* <h1>detalle</h1> */}
      // <div>{gameDetail.description}</div>
      // <br></br>
      // {/* <h1>rating</h1> */}
      // <div>{gameDetail.rating}</div>
      // <br></br>
      // {/* <h1>lanzamiento</h1> */}
      // <div>{gameDetail.released}</div>
      // <br></br>
      // {/* <h1>plataforma</h1> */}
      // <div>{plataformas}</div>
      // <br></br>
      // {/* <h1>generos</h1> */}
      // <div>{genres}</div>
      // <img src={imagen} alt=''></img>
      
      
      
      
      
      
      
      
      
  )

  }


    
}