// Its the Mongoose model that represents a document in the heroes collection of the MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const heroSchema = new Schema({
  name: String,
  pet: { type: Schema.Types.ObjectId, ref: 'Pet' }
})

const Hero = mongoose.model('Hero', heroSchema)

module.exports = Hero