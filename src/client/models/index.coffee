define ["backbone"], (Backbone) ->
  "use strict"
  MyModel = Backbone.Model.extend(defaults:
    firstName: "Derick"
    lastName: "Bailey"
    email: "derickbailey@gmail.com"
    details: "He is the creator of Marionette framework."
  )
  MyModel

