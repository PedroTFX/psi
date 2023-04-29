// Its the Mongoose model that represents a document in the heroes collection of the MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    // _id: String, // _id: is the one that is on the userSchema (both _id are the same)
    // name: is the one that is on the userSchema (both name are the same)
    image: Buffer,
    lists: [{ type: Schema.Types.ObjectId, ref: 'GameList' }],
    library: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile