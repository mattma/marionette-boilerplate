define [
  "backbone", 
  "Backbone.Marionette", 
  "app/views/itemView"], (Backbone, Marionette, ItemView) ->
  "use strict"
  
  # Define a view to show
  MyCollectionView = Backbone.Marionette.CollectionView.extend(
    itemView: ItemView
    tagName: "section"
    initialize: ->
      @listenTo this, "reset", @render
  )
  MyCollectionView

