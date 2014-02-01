define [
  "backbone", 
  "marionette", 
  "app/views/itemView"], (Backbone, Marionette, ItemView) ->
  "use strict"
  
  # Define a view to show
  MyCollectionView = Backbone.Marionette.CollectionView.extend(
    itemView: ItemView
    className: 'row'
    initialize: ->
      @listenTo this, 'reset', @render
  )
  MyCollectionView

