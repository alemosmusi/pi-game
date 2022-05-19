import React, { useEffect } from 'react';

import './contenedor.css'



export default function Estrella({det}) {
  var lugar = "http://localhost:3000/estrella.png"
  var ico = "ico"
  if(det){
    lugar = "http://localhost:3000/estrella.png"
    ico = "ico2"
  }


  return (
    <img className={ico} src={lugar} alt="" /> 
  );
}