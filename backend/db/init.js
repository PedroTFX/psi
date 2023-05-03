const fs = require('fs').promises

export const init = async (req, res) => {
	// Delete DB
	await User.deleteMany();
	await Profile.deleteMany();
	await Game.deleteMany();
	await GameList.deleteMany();

	// Seed DB
	const newUsers = await User.insertMany([
		{ username: 'Lucas', password: "Passw0rd" },
		{ username: 'Diogo', password: "Passw0rd" },
		{ username: 'João', password: "Passw0rd" },
		{ username: 'António', password: "Passw0rd" },
		{ username: 'Tiago', password: "Passw0rd" },
		{ username: 'Miguel', password: "Passw0rd" }
	], { lean: true })

	const newReviewComments = await ReviewComments.insertMany([
		{ userId: newUsers[0]._id, comment: 'Concordo!' },
		{ userId: newUsers[1]._id, comment: 'Estás lá!' },
		{ userId: newUsers[2]._id, comment: 'Não concordo!' },
	])

	const newReviews = await Review.insertMane([
		{ userId: newUsers[0]._id, score: 5, comment: 'Alto jogo!', comments: [newReviewComments[0]._id] },
		{ userId: newUsers[1]._id, score: 4, comment: 'Alto jogo man!', comments: [newReviewComments[0]._id] },
		{ userId: newUsers[2]._id, score: 3, comment: 'Mais ou menos...', comments: [newReviewComments[0]._id] },
		{ userId: newUsers[3]._id, score: 5, comment: 'Muito bom!', comments: [] }
	])

	const newItems = await Item.insertMany([
		{
			type: 'GAME',
			name: 'League of Legends',
			image1: await fs.readFile('/items/lol.jpeg', { encoding: 'base64' }),
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
			image1: await fs.readFile('/items/cs_go.jpeg', { encoding: 'base64' }),
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
			image1: await fs.readFile('/items/cs_1.6.jpg', { encoding: 'base64' }),
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
			image1: await fs.readFile('/items/wow.jpeg', { encoding: 'base64' }),
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
			image1: await fs.readFile('/items/wow_twd.jpg', { encoding: 'base64' }),
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
		{ userId: newUsers[0]._id, name: 'Jogos Completos', items: [newItems[0]._id]},
		{ userId: newUsers[1]._id, name: 'Jogos RPG', items: [newItems[1]._id, newItems[2]._id]},
		{ userId: newUsers[2]._id, name: 'MMORPG', items: [newItems[3]._id]},
		{ userId: newUsers[3]._id, name: '', items: []},
	])

	/**
	 *	Criei o modelo de dados (quase) completo e uma função que popula a base de dados com (quase) tudo o que precisamos.
	 Só não criei o Gift (para presentiar outro utilizador com um item (jogo, DLC, subscrição)) e o Purchase (para o processo de compra).

	 Agora que isto está feito, torna-se mais fácil criar os endpoints na API e as views no Angular.
	 *
	 */

	// Create profiles
	const newProfiles = await Propfile.insertMany([
		{
			userId: newUsers[0]._id,
			username: newUsers[0].username,
			image: await fs.readFile('/db/users/user1.jpeg', { encoding: 'base64' }), ,
			library: [newItems[0]._id, newItems[1]._id],
			lists: [lucasLists[0]._id, lucasLists[1]._id],
			followers: [],
			following: []
		}
	])
	const lucasProfile = new Profile()
	const createdLucasProfile = await lucasProfile.save()
	const diogoProfile = new Profile({
		userId: newUsers[1]._id,
		username: newUsers[1].username,
		image: '',
		library: [newGames[2]._id, newGames[3]._id],
		lists: [diogoLists[0]._id, diogoLists[1]._id],
		followers: [],
		following: []
	})
	const createdDiogoProfile = await diogoProfile.save()

	// Add Diogo as Lucas's follower
	await Profile.findByIdAndUpdate(createdLucasProfile._id, {
		followers: [createdDiogoProfile._id]
	})
	await Profile.findByIdAndUpdate(createdDiogoProfile._id, {
		following: [createdLucasProfile._id]
	})

	// Add Lucas as Diogo's follower
	await Profile.findByIdAndUpdate(createdDiogoProfile._id, {
		followers: [createdLucasProfile._id]
	})
	await Profile.findByIdAndUpdate(createdLucasProfile._id, {
		following: [createdDiogoProfile._id]
	})

	res.send("Database seeded");
}
