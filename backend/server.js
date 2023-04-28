/**
 * Arquivo: server.js
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { asyncScheduler } = require('rxjs');
const app = express();
const port = 3000;
const Profile = require("./ProfileModel.js");
const User = require("./UserModel.js");
const Game = require("./GameModel.js");
const GameList = require("./GameListModel.js");
const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');


const usersDB = "users";
const profilesDB = "profiles";
const gamesDB = "games";
const gameListsDB = "gameLists";
const uri = "mongodb+srv://admin:admin@app.yi0znic.mongodb.net/test";

// Conexão com o MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect();

// Configuração do MongoDB 
const db = client.db("APP");

// Middlewares
app.use(bodyParser.json());
app.use(cors());

//////////////////////////////////////////Rotas///////////////////////////////////////////////////////////
app.get('/init', async function (req, res) {
  // Lógica para inicializar as coleções de heróis e pets com alguns valores
  let collectionUsers = db.collection(usersDB);
  let collectionProfiles = db.collection(profilesDB);
  let collectionGames = db.collection(gamesDB);
  let collectionGameLists = db.collection(gameListsDB);
  // delete collections
  await collectionUsers.drop();
  await collectionProfiles.drop();
  await collectionGames.drop();
  await collectionGameLists.drop();
  // create new collections
  await db.createCollection(usersDB);
  await db.createCollection(profilesDB);
  await db.createCollection(gamesDB);
  await db.createCollection(gameListsDB);
  // acess new collections
  collectionUsers = db.collection(usersDB);
  collectionProfiles = db.collection(profilesDB);
  collectionGames = db.collection(gamesDB);
  collectionGameLists = db.collection(gameListsDB);
  ////////////////fill collections
  //////Users
  let user1 = new User({ name: 'Lucas', passWord: "Lucas1234" });
  await collectionUsers.insertOne(user1);
  let user2 = new User({ name: 'Diogo', passWord: "Diogo4321" });
  await collectionUsers.insertOne(user2);
  let user3 = new User({ name: 'Luis', passWord: "_white" });
  await collectionUsers.insertOne(user3);
  let user4 = new User({ name: 'Pedro', passWord: "alone_daguel" });
  await collectionUsers.insertOne(user4);
  let user5 = new User({ name: 'João', passWord: "João1234" });
  await collectionUsers.insertOne(user5);

  //////Profiles
  let profile1 = new Profile({_id : user1._id, image:null, lists:[], library:[]});
  await collectionProfiles.insertOne(profile1);
  let profile2 = new Profile({_id : user2._id, image:null, lists:[], library:[]});
  await collectionProfiles.insertOne(profile2);
  let profile3 = new Profile({_id : user3._id, image:null, lists:[], library:[]});
  await collectionProfiles.insertOne(profile3);
  let profile4 = new Profile({_id : user4._id, image:null, lists:[], library:[]});
  await collectionProfiles.insertOne(profile4);
  let profile5 = new Profile({_id : user5._id, image:null, lists:[], library:[]});
  await collectionProfiles.insertOne(profile5);

  //////Games
  let game1 = new Game({name: "The Witcher 3: Wild Hunt", description: "The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by Polish developer CD Projekt Red and is based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third main installment in the The Witcher's video game series, played in an open world with a third-person perspective. Players control protagonist Geralt of Rivia, a monster slayer (known as a Witcher) who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her and use her powers.", image: null, genre: "RPG", platform: "PC", releaseDate: "2015-05-19"});
  await db.collection(gamesDB).insertOne(game1);
  let game2 = new Game({name: "The Witcher 2: Assassins of Kings", description: "The Witcher 2: Assassins of Kings is a 2011 action role-playing hack and slash video game developed by CD Projekt Red, based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the 2007 game The Witcher and the second main installment in The Witcher's video game series. Like its predecessor, the game has an open-world setting. The player controls Geralt of Rivia, a monster slayer for hire known as a Witcher, who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her and use her powers.", image: null, genre: "RPG", platform: "PC", releaseDate: "2011-05-17"});
  await db.collection(gamesDB).insertOne(game2);
  let game3 = new Game({name: "The Witcher", description: "The Witcher is a 2007 action role-playing game developed by CD Projekt Red and published by Atari on Microsoft Windows and CD Projekt on OS X, based on the novel series of The Witcher by Polish author Andrzej Sapkowski, taking place after the events of the main saga. The story takes place in a medieval fantasy world and follows Geralt of Rivia, one of a few traveling monster hunters who have supernatural powers, known as Witchers. The game's system of moral choices as part of the storyline was noted for its time-delayed consequences and lack of black-and-white morality.", image: null, genre: "RPG", platform: "PC", releaseDate: "2007-10-26"});
  await db.collection(gamesDB).insertOne(game3);

  //////GameLists
  let gameList1 = new GameList({name: "RPGs", description: "RPGs that I like", games: [game1._id, game2._id, game3._id]});
  await db.collection(gameListsDB).insertOne(gameList1);
   
  console.log('Get \init');
  res.send().status(200);
});

///////////////////////////////User Related
app.get('/api/users/:id', async function(req, res) {
  // Lógica para obter um user específico da base de dados pelo ID
  let collection = await db.collection(usersDB);
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);
    console.log('Get /api/user/:id');
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

app.get('/api/users', async function(req, res) {
// Lógica para obter todos os users da base de dados
let collection = await db.collection(usersDB);
  let result = await collection.find({})
    .limit(50)
    .toArray();
  console.log('Get /api/users');
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

///////////////////////////////Profile Related
app.get('/api/profiles/:id', async function(req, res) {
  // Lógica para obter um profile específico da base de dados pelo ID
  let collection = await db.collection(profilesDB);
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);
    console.log('Get /api/profile/:id');
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

app.get('/api/profiles', async function(req, res) {
// Lógica para obter todos os users da base de dados
let collection = await db.collection(profilesDB);
  let result = await collection.find({})
    .limit(50)
    .toArray();
  console.log('Get /api/profiles');
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});
app.get('/api/profile/:user', async function(req, res) {
  // Lógica para obter um profile específico da base de dados pelo ID de user
  let collection = await db.collection(profilesDB);
    let query = {user: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);
    console.log('Get /api/profile/:user');
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});
///////////////////////////////Game Related
app.get('/api/games/:id', async function(req, res) {
  // Lógica para obter um game específico da base de dados pelo ID
  let collection = await db.collection(gamesDB);
  let query = {_id: new ObjectId(req.params.id)};
  let result = collection.findOne(query);
  if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

app.get('/api/games', async function(req, res) {
// Lógica para obter todos os games da base de dados
let collection = await db.collection(gamesDB);
  let result = await collection.find({})
    .limit(50)  
    .toArray();
  console.log('Get /api/games');
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});
///////////////////////////////GameList Related
app.get('/api/gamelists/:id', async function(req, res) {
  // Lógica para obter um gamelist específico da base de dados pelo ID
  let collection = await db.collection(gameListsDB);
  let query = {_id: new ObjectId(req.params.id)};
  let result = collection.findOne(query);
  console.log('Get /api/gamelists/:id');
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

app.get('/api/gamelists', async function(req, res) {
  // Lógica para obter todos os gamelists da base de dados
  let collection = await db.collection(gameListsDB);
  let result = await collection.find({})
    .limit(50)
    .toArray();
  console.log('Get /api/gamelists');
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});




// Iniciar o servidor
app.listen(port, function () {
  console.log(`Servidor rodando na porta ${port}.`);
});
