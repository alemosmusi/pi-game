/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: "pepe",
  description: "espsdgadfgadgaksfja", 
  released: "2022-05-04", 
  rating: 4.2, 
  platforms : ["playstation3"],
  genres:["action"],
  image: "https://i.blogs.es/c140f1/3446535-supermarioparty-review-thumbnologo/450_1000.jpeg"
};
var b = ""
describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /gamescreated', () => {
    // agent.get('/gamescreated').then((a)=> console.log(a))
    it('should get 200', () => agent.get('/gamescreated').expect(200));
    it('should get name', () => agent.get('/gamescreated')
      .then((a)=> expect(a.body[0].name).equal('pepe')));
    it('should get id', () => agent.get('/gamescreated')
      .then((a)=> expect(a.body[0].name).equal('pepe')));
  });
  describe('POST /creategame', () => {
    // agent.get('/gamescreated').then((a)=> console.log(a))
    it('should get 201', () => agent.post('/creategame').send(videogame).expect(201));
    it('post new game', () => 
      agent.post('/creategame')
        .send(videogame)
        .then((a)=> expect(a.body.name).equal('pepe'))
        );
    it('error al mandar mal', () => agent.post('/creategame').send("videogame").expect(400));
    // it('should get id', () => agent.get('/gamescreated')
    //   .then((a)=> expect(a.body[0].name).equal('pepe')));
  });
  
});
