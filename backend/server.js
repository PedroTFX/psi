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
const { User } = require('./models/User')
const { Profile } = require('./models/Profile')
const { Item } = require('./models/Item')
const { ItemList } = require('./models/ItemList')
var cookieSession = require('cookie-session')
const cors = require('cors')
const init = require('./db/init')

const app = express()
const port = 3055

// Middleware
app.use(cors({ credentials: true, origin: true })) // Allow all CORS requests
app.use(express.json()) // Coloca JSON no req.body
app.use(cookieSession({
	name: 'session',
	keys: ['password'],
	maxAge: 30 * 24 * 60 * 60 * 1000 // 1 month
}))

// Connect to DB
const productionDB = true
const prodDBConnectionString = 'mongodb://psi005:psi005@appserver.alunos.di.fc.ul.pt:27017/psi005?retryWrites=true&authSource=psi005'
const devDBConnectionString = 'mongodb://127.0.0.1:27017/ex04'
const connectDatabase = async () => {
	await mongoose.connect(productionDB ? prodDBConnectionString : devDBConnectionString)

	app.listen(port, () => {
		console.log(`App listening on port ${port}..`)
	})
}
connectDatabase()

app.get('/api/init', init);

app.get('/api', async (req, res) => res.send('Hello World!'))

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

	const profile = new Profile({ userId: newUser._id, username: newUser.username, image: '', library: [], lists: [], wishlist: [] })
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
	const profile = await Profile.findOne({ userId: user._id }).populate(['library', 'lists', 'following', 'followers', 'wishlist'])
	res.send(profile)
})

app.get("/api/dashboard", async (req, res) => {
	const { username } = req.session
	if (!username) {
		return res.send({ error: "You are not logged in" })
	}

	const user = await User.findOne({ username }).lean()
	const profile = await Profile.findOne({ userId: user._id }).populate(['library', 'lists', 'following', 'followers', 'wishlist'])
	res.send(profile)
})

app.get("/api/item/:id", async (req, res) => {
	const { username } = req.session
	if (!username) {
		return res.send({ error: "You are not logged in" })
	}

	const item = await Item.findById(req.params.id).lean()
	res.send(item)
})

app.get('/api/search', async (req, res) => {
	const searchQuery = req.query.q;
	console.log(searchQuery);
	if (searchQuery.length == 0 || searchQuery == undefined) {
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



