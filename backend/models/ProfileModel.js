const mongoose = require('mongoose')

const Profile = mongoose.model('Profile', new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	username: { type: String, required: true, unique: true},
	image: String,
	library: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
	lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GameList' }],
	following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
	followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }]
}))

module.exports = { Profile }
