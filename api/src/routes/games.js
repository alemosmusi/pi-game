


const {
    API_KEY,
  } = process.env;


var games = [];

fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.results !== undefined){
          const game = {
            name: recurso.results[0].name,
          };
          games.push(game)
          console.log(games)
        //   setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
