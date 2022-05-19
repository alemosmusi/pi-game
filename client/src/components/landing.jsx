import { Link } from "react-router-dom";
import './landing.css';



export default function Landing(){
    return (

        
        <div>
            
                <Link to='/home' className="entrada">Mira los mejores JUEGOS</Link>
            
            <video autoPlay="true" loop muted>
                <source src="controles.mp4"></source>
                </video>
        </div>
    )
}