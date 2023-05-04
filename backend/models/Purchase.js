const mongoose = require('mongoose')

const Purchase = mongoose.model('Purchase', new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
	date: { type: Date, required: true }
}))

module.exports = { Purchase }
