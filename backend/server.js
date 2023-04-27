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
const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');


const usersDB = "users";
const profilesDB = "profiles";
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
  // delete collections
  await collectionUsers.drop();
  await collectionProfiles.drop();
  // create new collections
  await db.createCollection(usersDB);
  await db.createCollection(profilesDB);
  // acess new collections
  collectionUsers = db.collection(usersDB);
  collectionProfiles = db.collection(profilesDB);
  //fill collections
  let user1 = new User({ name: 'Lucas', passWord: "Lucas1234" });
  await collectionUsers.insertOne(user1);
  let user2 = new User({ name: 'Diogo', passWord: "Diogo4321" });
  await collectionUsers.insertOne(user2);
  let profile1 = new Profile({_id: user1._id,age: 16, gender: 'M' , numberOfGames :0, historyOfGames: []});
  await collectionProfiles.insertOne(profile1);
  let profile2 = new Profile({_id: user2._id,age: 21, gender: 'M' , numberOfGames :0, historyOfGames: []});
  await collectionProfiles.insertOne(profile2);
  console.log('Get \init');
  res.send().status(200);
});

///////////////////////////////User Related
app.get('/api/user/:id', async function(req, res) {
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
app.get('/api/profile/:id', async function(req, res) {
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


// Iniciar o servidor
app.listen(port, function () {
  console.log(`Servidor rodando na porta ${port}.`);
});
