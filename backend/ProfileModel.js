// Its the Mongoose model that represents a document in the heroes collection of the MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    age: Number,
    gender:String,
    numberOfGames:Number,
    historyOfGames: [String]
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile