const axios = require('axios');
const {
  API_KEY,
} = process.env;


async function traerApi(name){

    try {
        const juegosApi=[]
        const apiGame = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
        const results = apiGame.data.results;
        juegosApi.concat(results)
        const apiGame2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`);
        // console.log(apiGame2)
        const results2 = apiGame2.data.results;
        // console.log(results2)
        juegosApi.concat(results2)
        res.json(results.concat(results2));
      } catch (error) {
        res.status(400).json({error:error})
        
      }

}





module.exports = traerApi;