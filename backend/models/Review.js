const mongoose = require('mongoose')

const Review = mongoose.model('Review', new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	score: { type: Number, min: 1, max: 5, required: true},
	comment: { type: String, maxLength: 5000 },
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ReviewComment' },]
}))

module.exports = { Review }
