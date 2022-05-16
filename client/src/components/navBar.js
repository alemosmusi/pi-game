import { Link } from "react-router-dom";
import './Nav.css';



export default function NavBar(){
    return (

        // <div class="container">
        // <div class="navbar">
        //     <img src="./riama-logo.png" class="logo" alt="Main Logo">
        

        // <ul>
        //     <li><a href="#">Services</a></li>
        //     <li><a href="#">Pricing</a></li>
        //     <li><a href="#">Our Staff</a></li>
        //     <li><a href="#">Contact</a></li>
        // </ul>

        // </div>

    // </div>
        <div className="container">
            <div className="navbar">
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li className="der"><Link to='/creategame'>CREAR JUEGO</Link></li>
                    <li className="der"><Link to='/gamescreated'>JUEGOS CREADOS</Link></li>
                </ul>
            </div>
            {/* <button className="botonh homeb"><Link to='/'>HOME</Link></button>
            <button className="botonh homec"><Link to='/creategame'>CREAR JUEGO</Link></button>
            <button className="botonh homed"><Link to='/gamescreated'>JUEGOS CREADOS</Link></button> */}
        </div>
    )
}