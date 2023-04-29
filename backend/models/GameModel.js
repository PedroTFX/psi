const mongoose = require('mongoose')

const Game = mongoose.model('Game', new mongoose.Schema({
	name: { type: String, required: true }
}))

module.exports = { Game }
