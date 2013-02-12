define ["backbone", "Backbone.Marionette", "app/controllers/default"], (Backbone, Marionette, DefaultController) ->
  "use strict"
  Router = Backbone.Marionette.AppRouter.extend(
    appRoutes:
      ":name": "details"
      "*action": "default"

    
    #'*action': 'angrycat'
    controller: DefaultController
  )
  
  # routes: {
  # 	'': 'init'
  # }
  Router

