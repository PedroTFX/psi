const mongoose = require('mongoose')

const ReviewComment = mongoose.model('ReviewComment', new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	comment: { type: String, maxLength: 5000 },
}))

module.exports = { ReviewComment }
