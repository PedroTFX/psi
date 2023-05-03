const mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({
	username: { type: String, required: true, unique: true, minLength: 3 },
	password: { type: String, required: true, minLength: 8 }
}))

module.exports = { User }
