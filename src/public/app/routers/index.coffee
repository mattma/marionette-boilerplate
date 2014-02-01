define ["backbone", "marionette", "app/controllers/default"], (Backbone, Marionette, DefaultController) ->
  "use strict"
  Router = Backbone.Marionette.AppRouter.extend(
    appRoutes:
      ":name": "details"
      "*action": "default"
    controller: DefaultController
  )
  Router

