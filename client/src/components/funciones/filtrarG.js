const filtrarG = function(a,search){
  //     var encontrado = []
  // for(var i = 0; i<a.length ; i++){
  // //   console.log(a[i].genres)
  //   for(var j = 0; j<a[i].genres.length; j++){
  //     // console.log(a[i].genres[j].name)
  //     for(var z = 0; z<search.length; z++){
  //       if(a[i].genres[j].name.toLowerCase() === search[z]){
  //         encontrado.push(a[i])
          
          
  //       }
        
  //     }
  //   }
  // }
  // let hash = {};
  // encontrado = encontrado.filter(o => hash[o.name] ? false : hash[o.name] = true);
  // return encontrado
  
  
  var listf = a
  
    if(search.length === 1){
      var listf2 = []
      for (let i = 0; i < listf.length; i++) {
        for (let j = 0; j < listf[i].genres.length; j++) {
          // console.log(listf[i].genres[j])
         if(listf[i].genres[j].name.toLowerCase() === search[0]){
           listf2.push(listf[i])

           console.log(listf2)
         }    
        
        }
      
      }
      return listf2
     }
    if(search.length > 1){
      var listf2 = []
      for (let i = 0; i < listf.length; i++) {
       for (let j = 0; j < listf[i].genres.length; j++) {
         if(listf[i].genres[j].name.toLowerCase() === search[0]){
           listf2.push(listf[i])
         }    
        
        }
        
      }
      var gens = search.slice(1)
      return filtrarG(listf2, gens)
    }
    return listf
  
  
  
  
  
  
  
  
  
  }

export default filtrarG