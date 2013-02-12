define [
  "backbone", 
  "Backbone.Marionette", 
  "app/database", 
  "app/models/index", 
  "jade!./templates/main"], (Backbone, Marionette, Payload, MyModel, template) ->
  "use strict"
  
  # Define a view to show
  MainView = Backbone.Marionette.ItemView.extend(
    template: template
    tagName: "p"
    events:
      "click #delete": "removeThisModel"

    removeThisModel: (e) ->
      e.preventDefault()
      userId = $(e.target).attr("data-user")
      model = new MyModel(id: userId)
      Payload.remove model
  )
  MainView

