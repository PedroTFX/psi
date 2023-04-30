/**
 * @file server.js
 * @description Server file for the backend.
 *
  * This file is responsible for the backend of the application.
  * It contains the routes and the database connection.
  *
 */
const express = require('express')
const mongoose = require('mongoose')
const { User } = require('./models/UserModel')
const { Profile } = require('./models/ProfileModel')
const { Game } = require('./models/GameModel')
const { GameList } = require('./models/GameListModel')
const { Image } = require('./models/ImageModel')
var cookieSession = require('cookie-session')
const app = express()
const port = 3055

var cors = require('cors')
app.use(cors())


/* var cors = require('cors')
app.use(cors({
	//credentials: true,
	//origin: 'http://localhost:4200'
})) */

// Coloca JSON no req.body
app.use(express.json())
app.use(cookieSession({
	name: 'session',
	keys: ['password'],
/* 	sameSite: 'none',
	secure: true, */
	maxAge: 30 * 24 * 60 * 60 * 1000 // 1 month
}))
const connectDatabase = async () => {
	await mongoose.connect('mongodb://psi005:psi005@localhost:27017/psi005?retryWrites=true&authSource=psi005')

	app.listen(port, () => {
		console.log(`Example app listening on port ${port}..`)
	})
}
connectDatabase()

app.get('/api/init', async (req, res) => {
	// Delete DB
	await User.deleteMany();
	await Profile.deleteMany();
	await Game.deleteMany();
	await GameList.deleteMany();

	// Seed DB
	const newUsers = await User.insertMany([
		{ username: 'Lucas', password: "Lucas1234" },
		{ username: 'Diogo', password: "Diogo4321" }
	], { lean: true })

	const newGames = await Game.insertMany([
		{ name: "League of Legends" },
		{ name: "CS:GO" },
		{ name: "CS 1.6" },
		{ name: "Super Tux" },
	], { lean: true })

	const lucasLists = await GameList.insertMany([
		{ userId: newUsers[0]._id, name: "Completed", games: [newGames[0]._id, newGames[1]._id] },
		{ userId: newUsers[0]._id, name: "FPS", games: [newGames[1]._id, newGames[2]._id] }
	])
	const diogoLists = await GameList.insertMany([
		{ userId: newUsers[0]._id, name: "Completed", games: [newGames[0]._id, newGames[1]._id] },
		{ userId: newUsers[0]._id, name: "FPS", games: [newGames[1]._id, newGames[2]._id] }
	])

	// Create profiles
	const lucasProfile = new Profile({
		userId: newUsers[0]._id,
		username: newUsers[0].username,
		image: '',
		library: [newGames[0]._id, newGames[1]._id],
		lists: [lucasLists[0]._id, lucasLists[1]._id],
		followers: [],
		following: []
	})
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
});

app.get('/api', async (req, res) => {
	res.send('Hello World!')
})

app.post('/api/create-account', async (req, res) => {
	const { username, password } = req.body

	// Check if username has more than 3 characters
	if (username.length < 3) {
		return res.send({
			usernameError: 'Username needs to have more than 3 characters.'
		})
	}

	// Check if username only has numbers and letters
	const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(username)
	if (!isAlphanumeric(username)) {
		return res.send({
			usernameError: 'Username can only have numbers and letters.'
		})
	}

	// Check if username is unique
	const userExists = await User.findOne({ username }).exec()
	if (userExists) {
		return res.send({
			formError: 'Username already taken.'
		})
	}

	// Password must have 8 or more characters
	if (password.length < 8) {
		return res.send({
			passwordError: 'Password must have at least 8 characters.'
		})
	}

	// Must include at least one capital letter
	const containsUppercase = (str) => /[A-Z]/.test(str)
	if (!containsUppercase(password)) {
		return res.send({
			passwordError: 'Password must have at least 1 uppercase character.'
		})
	}

	// Must include at least one capital letter
	const containsLowercase = (str) => /[a-z]/.test(str)
	if (!containsLowercase(password)) {
		return res.send({
			passwordError: 'Password must have at least 1 lowercase character.'
		})
	}

	// Must include at least one digit
	const containsNumbers = (str) => /[0-9]/.test(str)
	if (!containsNumbers(password)) {
		return res.send({
			passwordError: 'Password must have at least 1 number.'
		})
	}

	const user = new User({ username, password })
	const newUser = await user.save()

	const profile = new Profile({ userId: newUser._id, username: newUser.username,  image: '', library: [], lists: [] })
	const newProfile = await profile.save()

	return res.send({ user: newUser, profile: newProfile })
})

app.post("/api/login", async (req, res) => {
	const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user || user.password !== password) {
		return res.send({
			formError: 'Combination username/password incorrect'
		})
	}

	req.session = { ...req.session, username }

	const { password: pw, ...userWithoutPassword } = user

	res.send({ user: userWithoutPassword })
})

app.get("/api/profile", async (req, res) => {
	const { username } = req.session
	if (!username) {
		return res.send({ error: "You are not logged in" })
	}

	const user = await User.findOne({ username }).lean()
	const profile = await Profile.findOne({ userId: user._id }).populate('library')
	res.send(profile)
})

app.get("/api/dashboard", async (req, res) => {
	const { username } = req.session
	if (!username) {
		return res.send({ error: "You are not logged in" })
	}

	const user = await User.findOne({ username }).lean()
	const profile = await Profile.findOne({ userId: user._id }).populate([
		'library',
		{
			path: 'lists',
			populate: {
				path: 'games',
				model: 'Game'
			}
		},
		'followers',
		'following'
	])

	res.send(profile)
})

app.get("/api/secure", async (req, res) => {
	const { username } = req.session
	if (!username) {
		return res.send("You are not logged in")
	}

	return res.send(`${username} is logged in.`)
})

app.get('/api/search', async (req, res) => {
  const searchQuery = req.query.q;
  console.log(searchQuery);
  if(searchQuery.length == 0 || searchQuery == undefined) {
    console.log('empty search query');
    res.send([]);
    return;
  }
  try {
    const profiles = await Profile.find({ username: { $regex: searchQuery, $options: 'i' } }).populate('userId', 'name email');
    const games = await Game.find({ name: { $regex: searchQuery, $options: 'i' } });
    const gameLists = await GameList.find({ name: { $regex: searchQuery, $options: 'i' } }).populate('games');

    const searchResults = {
      profiles,
      games,
      gameLists
    };
    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while searching for results.' });
  }
});



