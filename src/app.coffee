express = require 'express'
routes = require './routes/routes'

app = module.exports = express()

VIEWS_PATH = __dirname + '/views'
PUBLIC_PATH = __dirname + '/public'
PORT = process.env.PORT or 3000

# Configuration
app.configure( ->
	app.set 'views', 		VIEWS_PATH
	app.set 'view engine', 'jade'
	app.set 'view options', { layout: false }  # Option: pretty: true
	app.use express.bodyParser()
	app.use express.methodOverride()
	app.use app.router
	app.use express.static( PUBLIC_PATH )
)

app.configure 'development', ->
	app.use express.errorHandler({ dumpExceptions: true, showStack: true })

app.configure 'production', ->
	app.use express.errorHandler()

# Routes
app.get '/', routes.home  #routes.home: /routes/routes.js => exports.home()

app.listen PORT, ->
	console.log "Express server listening on port %d in %s mode", PORT, app.settings.env

# app.get '/users', (req, res) ->
# 	db.get "_design/newview/_view/by_lastname", (err,doc) ->
# 		res.json doc

# app.delete '/user/:id', (req, res) ->
# 	db.get req.params.id, (err, doc) ->
# 		db.remove req.params.id, doc._rev, (err, response) ->
# 			console.log err if err
# 			res.send response

# app.put '/user/:id', (req, res) ->
# 	db.merge req.params.id, req.body, (err, response) ->
# 		console.log err if err
# 		res.send response

# app.get '/user/:id', (req, res) ->
# 	db.get req.params.id, (err, doc) ->
# 		res.send doc

# app.post '/user', (req, res ) ->
# 	options =
# 		"firstName": req.body.firstName,
# 		"lastName": req.body.lastName,
# 		"email": req.body.email

# 	db.get "_design/newview/_view/by_email", (err,doc) ->
# 		_.each doc, ( key, index ) ->
# 			if key.value isnt req.body.email
# 				db.save options, (err, response)->
# 					db.get response.id, (err, doc) ->
# 						res.send doc
# 			else
# 				res.send null
