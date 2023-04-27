
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  // _id: String,
  name: String
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game