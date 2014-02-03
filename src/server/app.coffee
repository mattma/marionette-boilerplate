express = require 'express'
routes = require './routes/routes'
app = module.exports = express()

VIEWS_PATH = __dirname + '/views'
PORT = process.env.PORT or 3000

# Configuration
console.log "#{__dirname}/css"
console.log "#{__dirname}/../client"

app.configure( ->
  app.set 'views', VIEWS_PATH
  app.set 'view engine', 'jade'
  app.set 'view options', { layout: false }  # Option: pretty: true
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static "#{__dirname}/css"
  app.use express.static "#{__dirname}/img"
  app.use express.static "#{__dirname}/../client"
)

app.configure 'development', ->
  app.use express.errorHandler({ dumpExceptions: true, showStack: true })

app.configure 'production', ->
  app.use express.errorHandler()

# Routes
app.get '/', routes.home  #routes.home: /routes/routes.js => exports.home()

app.listen PORT, ->
  console.log "Express server listening on port %d in %s mode", PORT, app.settings.env
