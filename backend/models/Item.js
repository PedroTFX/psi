const mongoose = require('mongoose')

const Item = mongoose.model('Item', new mongoose.Schema({
	type: { type: String, enum: ['GAME', 'DLC', 'SUBSCRIPTION'], default: 'GAME'},
	name: { type: String, required: true },
	image1: { type: String, required: true },
	image2: String,
	image3: String,
	videoURL: String,
	description: { type: String, required: true, maxLength: 1000 },
	platform: [{ type: String, enum: ['Windows', 'macOS', 'Linux', 'Playstation', 'XBox', 'Nintendo Switch', 'iOS', 'Android', 'Windows Phone'], default: 'Windows' }],
	languages: [{ type: String, enum: ['Português', 'Inglês', 'Espanhol', 'Mandarim'], default: 'Português' }],
	price: { type: Number, min: 0 },
	reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}))

module.exports = { Item }
