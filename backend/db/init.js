const fs = require('fs').promises
const { User } = require('../models/User')
const { Purchase } = require('../models/Purchase')
const { Profile } = require('../models/Profile')
const { Item } = require('../models/Item')
const { ItemList } = require('../models/ItemList')
const { Review } = require('../models/Review')
const { ReviewComment } = require('../models/ReviewComment')

const init = async (req, res) => {
	// Delete DB
	await User.deleteMany();
	await Profile.deleteMany();
	await Item.deleteMany();
	await ItemList.deleteMany();
	await Purchase.deleteMany();
	await ReviewComment.deleteMany();
	await Review.deleteMany();
	// Seed DB
	const newUsers = await User.insertMany([
		{ username: 'Lucas', password: "Passw0rd" },
		{ username: 'Diogo', password: "Passw0rd" },
		{ username: 'João', password: "Passw0rd" },
		{ username: 'António', password: "Passw0rd" },
		{ username: 'Tiago', password: "Passw0rd" },
		{ username: 'Miguel', password: "Passw0rd" }
	], { lean: true })

	const newReviewComments = await ReviewComment.insertMany([
		{ userId: newUsers[0]._id, comment: 'Concordo!' },
		{ userId: newUsers[1]._id, comment: 'Estás lá!' },
		{ userId: newUsers[2]._id, comment: 'Não concordo!' },
	])

	const newReviews = await Review.insertMany([
		{ userId: newUsers[0]._id, score: 5, comment: 'Alto jogo!', comments: [newReviewComments[1]._id] },
		{ userId: newUsers[1]._id, score: 4, comment: 'Alto jogo man!', comments: [newReviewComments[0]._id] },
		{ userId: newUsers[2]._id, score: 3, comment: 'Mais ou menos...', comments: [newReviewComments[0]._id] },
		{ userId: newUsers[3]._id, score: 5, comment: 'Muito bom!', comments: [] }
	])

	const newItems = await Item.insertMany([
		{
			type: 'GAME',
			name: 'League of Legends',
			image1: await fs.readFile('./backend/db/items/lol.jpeg', { encoding: 'base64' }),
			image2: '',
			image3: '',
			videoURL: 'https://youtu.be/dQw4w9WgXcQ',
			description: 'Mostre suas habilidades na melhor arena de batalha 5v5, que combina estratégias em equipa com mestria solo.',
			platform: ['Windows', 'macOS'],
			languages: ['Português', 'Inglês'],
			price: 0,
			reviews: [newReviews[0]._id]
		},
		{
			type: 'GAME',
			name: 'CS:GO',
			image1: await fs.readFile('./backend/db/items/cs_go.jpeg', { encoding: 'base64' }),
			image2: '',
			image3: '',
			videoURL: 'https://youtu.be/dQw4w9WgXcQ',
			description: 'Mostre suas habilidades na melhor arena de batalha 5v5.',
			platform: ['Windows'],
			languages: ['Português', 'Inglês'],
			price: 23,
			reviews: [newReviews[1]._id]
		},
		{
			type: 'GAME',
			name: 'CS 1.6',
			image1: await fs.readFile('./backend/db/items/cs_1.6.jpg', { encoding: 'base64' }),
			image2: '',
			image3: '',
			videoURL: 'https://youtu.be/dQw4w9WgXcQ',
			description: 'Mostre suas habilidades na melhor arena de batalha 5v5, que combina estratégias em equipa com mestria solo.',
			platform: ['Windows'],
			languages: ['Português', 'Inglês'],
			price: 0,
			reviews: [newReviews[3]._id]
		},
		{
			type: 'SUBSCRIPTION',
			name: 'World of Warcraft',
			image1: await fs.readFile('./backend/db/items/wow.jpeg', { encoding: 'base64' }),
			image2: '',
			image3: '',
			videoURL: 'https://youtu.be/dQw4w9WgXcQ',
			description: 'Mostre suas habilidades na melhor arena de batalha 5v5, que combina estratégias em equipa com mestria solo.',
			platform: ['Windows', 'macOS', 'Linux'],
			languages: ['Português', 'Inglês'],
			price: 8,
			reviews: []
		},
		{
			type: 'DLC',
			name: 'World of Warcraft: The Warlords of Draenor',
			image1: await fs.readFile('./backend/db/items/wow_twd.jpg', { encoding: 'base64' }),
			image2: '',
			image3: '',
			videoURL: 'https://youtu.be/dQw4w9WgXcQ',
			description: 'Mostre suas habilidades na melhor arena de batalha 5v5, que combina estratégias em equipa com mestria solo.',
			platform: ['Windows', 'macOS', 'Linux'],
			languages: ['Português', 'Inglês'],
			price: 20,
			reviews: []
		},
	], { lean: true })

	const newItemLists = await ItemList.insertMany([
		{ name: 'Jogos Completos', items: [newItems[0]._id] },
		{ name: 'Jogos RPG', items: [newItems[1]._id, newItems[2]._id] },
		{ name: 'MMORPG', items: [newItems[3]._id] },
	])

	const newPurchases = await Purchase.insertMany([
		{ userId: newUsers[0]._id, item: newItems[0]._id, date: new Date(new Date().setDate(new Date().getDate() - 1)) },
		{ userId: newUsers[0]._id, item: newItems[1]._id, date: new Date(new Date().setDate(new Date().getDate() - 2)) },
	])


	// Create profiles
	const newProfiles = await Profile.insertMany([
		{
			userId: newUsers[0]._id, // Lucas
			username: newUsers[0].username,
			image: await fs.readFile('./backend/db/users/user1.jpeg', { encoding: 'base64' }),
			library: [newPurchases[0]._id, newPurchases[1]._id], // LOL e CS:GO
			lists: [newItemLists[0]._id],
			followers: [],
			following: [],
			wishlist: [newItems[2]._id]
		},
		{
			userId: newUsers[1]._id, // Diogo
			username: newUsers[1].username,
			image: await fs.readFile('./backend/db/users/user2.jpeg', { encoding: 'base64' }),
			library: [], // CS 1.6 e WOW
			lists: [],
			followers: [],
			following: [],
			wishlist: []
		}
	])





	const lucasId = newProfiles[0]._id
	const diogoId = newProfiles[1]._id

	await Profile.findByIdAndUpdate(lucasId, { following: [diogoId] }) // Lucas follows Diogo
	await Profile.findByIdAndUpdate(diogoId, { followers: [lucasId] }) // Diogo has Lucas as its follower

	await Profile.findByIdAndUpdate(diogoId, { following: [lucasId] }) // Diogo follows Lucas
	await Profile.findByIdAndUpdate(lucasId, { followers: [diogoId] }) // Lucas has Diogo as its follower

	res.send("Database seeded");
}


module.exports = init
