//Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our connection to the mongo database
const passport = require('./passport')
const app = express()
//const User = require('../db/models/user')

const PORT = process.env.PORT || 8080 
var cors = require('cors')
app.use(cors())

// // ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// // ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// // ===== testing middleware =====
// // app.use(function(req, res, next) {
// // 	console.log('===== passport user =======')
// // 	console.log(req.session)
// // 	console.log(req.user)
// // 	console.log('===== END =======')
// // 	next()
// // })
// // testing
// // app.get(
// // 	'/auth/google/callback',
// // 	(req, res, next) => {
// // 		console.log(`req.user: ${req.user}`)
// // 		console.log('======= /auth/google/callback was called! =====')
// // 		next()
// // 	},
// // 	passport.authenticate('google', { failureRedirect: '/login' }),
// // 	(req, res) => {
// // 		res.redirect('/')
// // 	}
// // )

// // ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
}

// /* Express app ROUTING */
app.use('/auth', require('./auth'))
//app.use('/', router) //??

// // ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})


app.post('/signup', (req, res) => {
	const { username, password } = req.body
	console.log("from server req.body: ", username, password)
	res.send('love');
	// ADD VALIDATION
	// User.findOne({ 'local.username': username }, (err, userMatch) => {
	// 	if (userMatch) {
	// 		return res.json({
	// 			error: `Sorry, already a user with the username: ${username}`
	// 		})
	// 	}
	// 	const newUser = new User({
	// 		'local.username': username,
	// 		'local.password': password
	// 	})
	// 	newUser.save((err, savedUser) => {
	// 		if (err) return res.json(err)
	// 		return res.json(savedUser)
	// 	})
//	})
})

// ==== Starting Server =====
app.listen( PORT,() => {
	console.log(`App listening on PORT: ${PORT}`)
})
