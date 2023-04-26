
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
const { ObjectId } = require('mongodb')

const uri = "mongodb+srv://admin:admin@app.yi0znic.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect();

// Configuração do MongoDB 
const db = client.db("APP");

// Middlewares
app.use(bodyParser.json());
app.use(cors());

//Rotas//
app.get('/init', async function (req, res) {
  // Lógica para inicializar as coleções de heróis e pets com alguns valores
  let collectionUsers = db.collection("users");
  let collectionProfiles = db.collection("profiles");
  // delete collections
  await collectionUsers.drop();
  await collectionProfiles.drop();
  // create new collections
  await db.createCollection("users");
  await db.createCollection("profiles");
  // acess new collections
  collectionUsers = db.collection("users");
  collectionProfiles = db.collection("profiles");
  //fill collections
  let user1 = new User({ name: 'Lucas', passWord: "Lucas1234" });
  await collectionUsers.insertOne(user1);
  let user2 = new User({ name: 'Diogo', passWord: "Diogo4321" });
  await collectionUsers.insertOne(user2);
  let profile1 = new Profile({user: user1,age: 16, gender: 'M' , numberOfGames :0, historyOfGames: []});
  await collectionProfiles.insertOne(profile1);
  let profile2 = new Profile({user: user2,age: 21, gender: 'M' , numberOfGames :0, historyOfGames: []});
  await collectionProfiles.insertOne(profile2);
  console.log('Get \init');
  res.send().status(200);
});




// Iniciar o servidor
app.listen(port, function () {
  console.log(`Servidor rodando na porta ${port}.`);
});