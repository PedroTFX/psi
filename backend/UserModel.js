// Its the Mongoose model that represents a document in the heroes collection of the MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  passWord: String
})

const User = mongoose.model('User', userSchema)

module.exports = User