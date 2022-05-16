export default function(a,search){
    var encontrado = []
for(var i = 0; i<a.length ; i++){
//   console.log(a[i].genres)
  for(var j = 0; j<a[i].genres.length; j++){
    // console.log(a[i].genres[j].name)
    for(var z = 0; z<search.length; z++){
      if(a[i].genres[j].name.toLowerCase() === search[z]){
        encontrado.push(a[i])
        
        
      }
      
    }
  }
}
let hash = {};
encontrado = encontrado.filter(o => hash[o.name] ? false : hash[o.name] = true);
return encontrado
}