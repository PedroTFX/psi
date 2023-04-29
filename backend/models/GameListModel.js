const mongoose = require('mongoose')

const GameList = mongoose.model('GameList', new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	name: { type: String, required: true },
	games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }]
}));

module.exports = { GameList }
