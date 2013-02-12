define ["backbone", "marionette", "./itemView"], (Backbone, Marionette, ItemView, template) ->
  "use strict"
  
  # Define a view to show
  MyCollectionView = Backbone.Marionette.CollectionView.extend(
    itemView: ItemView
    tagName: "section"
    initialize: ->
      @bindTo this, "reset", @render
  )
  MyCollectionView

