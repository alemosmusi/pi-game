import { Link } from "react-router-dom";
import './Nav.css';



export default function NavBar(){
    return (
        <div className="navv">
            <div className="azul"><Link to='/'>HOME</Link></div>
            <div className="rojo"><Link to='/creategame'>CREAR JUEGO</Link></div>
            <div className="amarillo"><Link to='/gamescreated'>JUEGOS CREADOS</Link></div>
        </div>
    )
}