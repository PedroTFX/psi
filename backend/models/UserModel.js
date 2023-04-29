const mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true }
}))

module.exports = { User }
