const { Videogame, conn, Genres } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

    const videogame = {
      name: "pepe",
      description: "espsdgadfgadgaksfja", 
      released: "2022-05-04", 
      rating: 4.2, 
      platforms : ["playstation3"],
      genres:["action"],
      image: "https://i.blogs.es/c140f1/3446535-supermarioparty-review-thumbnologo/450_1000.jpeg"
    };

  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      }).timeout(5000);
      it('crea el videojuego con un nombre válido', () => {
        Videogame.create(videogame)
        .then((e)=>expect(e.dataValues.name).equal('pepe'))
      });
    });
  });

  
    });




