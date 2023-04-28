
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  // _id: String,
  name: String,
  description: String,
  image: Buffer,
  genre: String,
  releaseDate: Date,
  platform: String
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game