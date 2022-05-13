import React, { useEffect } from 'react';
import './GameDetail.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { obtenerDetalle } from '../redux/actions/gamesAction';



export default function GamesDetail() {
    
    // useParams usar este...
    const params = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(obtenerDetalle())
        
      
      }, [])
      const gameDetail = useSelector((state) => state.gameDetail)

      console.log(gameDetail)
      //destructurar gameDetail por si no existe parametro

    return(
        // id: 4562,
        // name: "Pinballistik",
        // description: "The greatest multi-player pinball game ever is now completely FREE!!<br/><br/>Pinball evolves into Battle Pinball! PINBALLISTIK brings more thrills, action and effects to traditional pinball. The bumpers, kickers, flippers, targets and more are enhanced, animated and improved with amazing physics and story features. Engage your friends or the AI side-by-side on the Battle Tables.  Blast your way onto your opponent’s table for extra points. Take control of their balls, switch their color, and increase your attack. Play the authentic, classic Single Tables for an unforgettable experience.   <br/><br/>Mosey through the Wild West on the Circle the Wagons table. Visit the saloon for a game of cards or target practice. Lose your opponent in a sand storm, load up the pistol for Revolver Multiball and blast your opponent.<br/><br/>1-2 players<br/>713KB minimum save size<br/>HDTV screen resolution: 720p<br/>DUALSHOCK®3<br/>Network Features<br/><br/>  Purchase or use of this item is subject to the PlayStation®Network Terms of Service and User Agreement and this item's use restrictions. This item has been sublicensed to you by Sony Computer Entertainment America.<br/><br/>Pinballistik © 2013 Creat Studios, Inc.",
        // rating: 2.79,
        // platforms: [
        //     {
        //         platform: {
        //             id: 16,
        //             name: "PlayStation 3", },
        //     }
        // ],
        // genres: [
        //     {
        //         id: 11,
        //         name: "Arcade",
        //     }
        // ],
        <>
        <div>{gameDetail.name}</div>
        <br></br>
        <div>{gameDetail.description}</div>
        <br></br>
        <div>{gameDetail.rating}</div>
        <br></br>
        {/* {gameDetail.platforms.length > 0 ?<div>{gameDetail.platforms[0].platform.name}</div>: <div>"sin plataforma"</div>} */}
        <br></br>
        {/* <div>{gameDetail.genres[0].name}</div> */}
        
        </>

        

    )
}