/**
 * @fileoverview Model for the GameList collection in the database.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameListSchema = new Schema({
  // _id: String,
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
  name: String,
  description: String,
  games: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
})

const GameList = mongoose.model('GameList', gameListSchema);

module.exports = GameList