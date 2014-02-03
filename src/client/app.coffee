define ["application", "backbone", "routers/index"], (App, Backbone, Router) ->
  "use strict"
  App.addRegions
    mainRegion: "#content"
    formRegion: "#add_user_form"

  App.addInitializer ->
    router = new Router()
    Backbone.history.start()
