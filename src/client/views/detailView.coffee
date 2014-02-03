define [
  "backbone", 
  "marionette", 
  "templates/details"], (Backbone, Marionette, template) ->
  "use strict"

  # Define a view to show
  DetailView = Backbone.Marionette.ItemView.extend(
    template: template
    tagName: "p"
  )
  DetailView

