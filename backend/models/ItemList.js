const mongoose = require('mongoose')

const ItemList = mongoose.model('ItemList', new mongoose.Schema({
	name: { type: String, required: true },
	items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
}))

module.exports = { ItemList }
