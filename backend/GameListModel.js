/**
 * @fileoverview Model for the GameList collection in the database.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameListSchema = new Schema({
  // _id: String,
  name: String,
  games: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
})

const GameList = mongoose.model('GameList', gameListSchema);

module.exports = GameList