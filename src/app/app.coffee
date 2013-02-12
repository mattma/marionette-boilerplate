#global $
define ["backbone", "application", "routers/index"], (Backbone, App, Router) ->
  "use strict"
  App.addRegions
    mainRegion: "#content"
    formRegion: "#add_user_form"

  
  # Initialize this module when the app starts
  App.addInitializer ->
    
    # Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    # 	return Handlebars.compile(rawTemplate);
    # };
    router = new Router()
    Backbone.history.start()


