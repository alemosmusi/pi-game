import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createGame } from '../redux/actions/gamesAction';
import './CreateGame.css';
import { listaGeneros, listaPlataformas } from './datos';










//   {
//     "name": "agdsafgdu",
//     "description": "espsdgadfgadgaksfja", 
//     "released": "01/12/2000", 
//     "rating": 2, 
//     "platforms" : ["pc", "playstation"],
//     "genres":["adventure", "role-playing-games-rpg", "strategy", "shooter"],
//     "image": "https://i.blogs.es/c140f1/3446535-supermarioparty-review-thumbnologo/450_1000.jpeg"
// }




export  function  CreateGame() {

  const gameCreated = useSelector((state) => state.gameCreated)

  

  const dispatch = useDispatch()

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: '',
    genres: [],
    platforms: [],
    image: "",
  });
  const [errors, setErrors] = React.useState({
    name: "es necesario un nombre",
    description: "es necesario un descripcion",
    released: "es necesario fecha de lanzamiento",
    platforms: "es necesario una plataforma",
    genres: "es necesario un genero",
    image: "es necesario una imagen",
  });


  const handleInputChange = function(e) { //va modificando a medida que recibe info
    setInput({
      ...input, // me copio lo que
      [e.target.name]: e.target.value // [e.target.name] busca el nombre de donde viene el evento...
    });

    setErrors(validate({
      ...input, // me copio lo que
      [e.target.name]: e.target.value
    }))
  }

  
const validate= function(envi) {
  let errors = {};
  if (!envi.name) {errors.name = 'es necesario un nombre';} 
  if (!envi.image.includes(".jpg") || !envi.image.includes("http") || !envi.image.includes(".com")) {
    errors.image = 'es necesario una foto de una web ej: https://tinypng.com/images/social/website.jpg';
  }
  if (envi.description.length<20){
    errors.description = 'es necesario mas de 20 carateres'
  }

  return errors;
};








  const habilitar = function (envi,error){ //verifica y habilita boton
    if(!error.name && !error.image && !error.description && envi.genres.length !== 0 && envi.platforms.length !== 0 && envi.rating !== "" && envi.released !== ""){
        
      return true
    }else{
      return false
    }
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







  const [searchp, setsearchp] = useState("")
  const [plataforma, setPlataforma] = useState([])
  
  const filterplatforms = () =>{ //filtra lo que voy buscando
    
    if (searchp.length > 0){
      
        const filteredp = listaPlataformas.filter(g => g.toLowerCase().includes(searchp))
        return filteredp
    }else{
        return []
    }
  }
  useEffect(() => {
    setPlataforma(filterplatforms())
    
  }, [searchp])
  
  
  const onSearchPlat = ({target}) => { //busca los generos
      setsearchp( target.value );
  
      
  }
  
  const palomita2 = (c) => { //para ver si tiene o no palomita cuando mapea
    if(def2[c]){
      return true
    }else{
      return ""
    }
    
  }
  const [envP, setenvP] = useState([])
  const [def2, setdef2] = useState([])
    const handleInputCheckP = function(e){
        setdef2({
            
            ...def2, [e.target.name]: e.target.checked
            
        })
           
    }
  
  useEffect(() => {
    senP()
  }, [def2])
  
   
    const senP = ()=>{ //filtra los que tienen palomita true
      var a = Object.keys(def2).map((dd) => def2[dd]? dd: null).filter(a => a !== null)
      setenvP(a)
    }















const handleSubmit = (e)=>{
  e.preventDefault()
  dispatch(createGame(envi))

}






const envi = {
  name: input.name,
  genres: envG,
  platforms: envP,
  rating: input.rating,
  released: input.released,
  image: input.image,
  description: input.description
}

//   {
//     "name": "agdsafgdu",
//     "description": "espsdgadfgadgaksfja", 
//     "released": "01/12/2000", 
//     "rating": 2, 
//     "platforms" : ["pc", "playstation"],
//     "genres":["adventure", "role-playing-games-rpg", "strategy", "shooter"],
//     "image": "https://i.blogs.es/c140f1/3446535-supermarioparty-review-thumbnologo/450_1000.jpeg"
// }





const asdf = input.rating

  const rotacion = ()=>{
    const rati = document.querySelector(".rati");
      const eee = envi.rating/5
      const aaa = envi.rating/2.5
      rati.style.setProperty("--thumb-scale", `${1+aaa}`);
      rati.style.setProperty("--thumb-rotate", `${eee * 720}deg`);
      
  }
  
  
    useEffect(() => {
      rotacion()
    
    }, [asdf])

const alnuevo = ()=>{
  gameCreated.id = null
}





// if(gameCreated.id){
  if(false){
  return(
    
      <Link to={`/home/game/${gameCreated.id}`} >
            <button className="botoncreado">se creo el juego {gameCreated.name} anda a verlo</button>
    </Link>
    
    
    



  )
}else{






  
    
     // tiene que dar uno
    // rati.style.setProperty("--thumb-rotate", `${eee * 720}deg`);
    // label.innerHTML = Math.round(value * 50);
    // console.log(rati)
 


  // const barra = document.querySelector("input");
  // const labelb = document.querySelector("label");
  // console.log(barra.addEventListener)
  // input.addEventListener("input", event => {
    // const eee = envi.rating/5;
    // input.style.setProperty("--thumb-rotate", `${eee * 720}deg`);
  //   label.innerHTML = Math.round(value * 50);
  // });









  return (
    // pasar e.preventDefault()
    <div className="content">

      <h1 className="cree">CREE SU JUEGO</h1>

      <div className="contact-form">

       <form onSubmit={handleSubmit}>
             <div>
               <label>Name:</label>
               <input className={errors.name && 'danger'} type="text" name="name" placeholder='Name' onChange={handleInputChange} value={input.name} autoComplete="off"/>
               {errors.name && (
               <p className="danger">{errors.name}</p>
             )}
             </div>

             <div>
               
               <label>Genres:</label>
               <input placeholder="Genres" value={searchg} onChange={onSearchGenre}/>
               
               {genero.map((c) => (<ul className="lcheck" key={c+"a"}><li  key={c+"b"}>{c}</li><input type="checkbox" key={c} name={c} value={c} onChange={handleInputCheckG} defaultChecked={palomita(c)}></input></ul>) )}
               {envi.genres.length === 0 && (
               <p className="danger">es necesario un genero</p>
             )}
             </div>


             <div>
              
                <label>Platforms:</label>
                <input placeholder="Platforms" value={searchp} onChange={onSearchPlat}/>
                
               {plataforma.map((c) => (<ul className="lcheck" key={c+"a"}><li key={c+"b"}>{c}</li><input type="checkbox" key={c} name={c} value={c} onChange={handleInputCheckP} defaultChecked={palomita2(c)}></input></ul>) )}
               {envi.platforms.length === 0 && (
               <p className="danger">es necesario una plataforma</p>
             )}
             </div>

             <div>
               <label>Rating:</label>
               <input type="range" name='rating' min="0" max="5" onChange={handleInputChange} className="rati" step="0.01" defaultValue="0"></input>
               {envi.rating === "" && (
               <p className="danger">es necesario un rating</p>
             )}
             </div>

             <div>
               <label>Released:</label>
               <input type="date" name = "released" onChange={handleInputChange} className="released"></input>
               {envi.released === "" && (
               <p className="danger">es necesario una fecha de lanzamiento</p>
             )}
             </div>

             <div>
               <label>Image:</label>
               <input type="text" name="image" id="image" placeholder='image' onChange={handleInputChange} value={input.image}></input>
               {errors.image && (
               <p className="danger">{errors.image}</p>
             )}
             </div>


             <div className='block'>
               <label>Descripcion:</label>
               <textarea type="text" name="description" id="description" placeholder='description' onChange={handleInputChange} value={input.description}></textarea>
               {errors.description && (
               <p className="danger">{errors.description}</p>
             )}
             </div>





             {habilitar(envi,errors)?<input  type="submit" name ="submit" disabled = {!habilitar(envi,errors) } className="bbto"/>:""}
         </form>
      </div>


    {gameCreated.id?<Link to={`/home/game/${gameCreated.id}`} onClick={alnuevo}>
            <button className="botoncreado">se creo el juego {gameCreated.name} anda a verlo</button>
    </Link>:""}
      








    </div>
    
  )




















// <form onSubmit={handleSubmit}>
//       <div className='celdas'>
//         <h3>name:</h3>
//         <input className={errors.name && 'danger'} type="text" name="name" placeholder='name' onChange={handleInputChange} value={input.name} autoComplete="off"/>
//         {errors.name && (
//         <p className="danger">{errors.name}</p>
//       )}
//       </div>
      
//       <div className='celdas'>
//         <ul>
//           <h3>GENERO</h3>
//                 <input placeholder="generos" value={searchg} onChange={onSearchGenre}/>
//           </ul>
//         {genero.map((c) => (<ul key={c+"a"}><li key={c+"b"}>{c}</li><input type="checkbox" key={c} name={c} value={c} onChange={handleInputCheckG} defaultChecked={palomita(c)}></input></ul>) )}
//         {envi.genres.length === 0 && (
//         <p className="danger">es necesario un genero</p>
//       )}
//       </div>
      

//       <div className='celdas'>
//         <ul>
//           <h3>PLATAFORMAS</h3>
//                 <input placeholder="plataformas" value={searchp} onChange={onSearchPlat}/>
//           </ul>
//         {plataforma.map((c) => (<ul key={c+"a"}><li key={c+"b"}>{c}</li><input type="checkbox" key={c} name={c} value={c} onChange={handleInputCheckP} defaultChecked={palomita2(c)}></input></ul>) )}
//         {envi.platforms.length === 0 && (
//         <p className="danger">es necesario una plataforma</p>
//       )}
//       </div>
      
//       <div className='celdas'>
//         <h3>RATING</h3>
//         <input type="range" name='rating' min="0" max="5" onChange={handleInputChange}></input>
//         {envi.rating === "" && (
//         <p className="danger">es necesario un rating</p>
//       )}
//       </div>

//       <div className='celdas'>
//         <h3>FECHA DE LANZAMIENTO</h3>
//         <input type="date" name = "released" onChange={handleInputChange}></input>
//         {envi.released === "" && (
//         <p className="danger">es necesario una fecha de lanzamiento</p>
//       )}
//       </div>

//       <div className='celdas'>
//         <h3>IMAGEN</h3>
//         <input type="text" name="image" id="image" placeholder='image' onChange={handleInputChange} value={input.image}></input>
//         {errors.image && (
//         <p className="danger">{errors.image}</p>
//       )}
//       </div>


//       <div className='celdas'>
//         <h3>DESCRIPCION</h3>
//         <textarea type="text" name="description" id="description" placeholder='description' onChange={handleInputChange} value={input.description}></textarea>
//         {errors.description && (
//         <p className="danger">{errors.description}</p>
//       )}
//       </div>
          


        
      
//       <input type="submit" name ="submit" disabled = {!habilitar(envi,errors) }/>
//   </form>
//   )












}
  
}


