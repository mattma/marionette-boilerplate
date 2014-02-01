define [
  "text!app/database.json", 
  "app/collections/index",
  "app/views/itemsView", 
  "app/models/index", 
  "app/views/itemView"], (Database, MyCollection, MyCollectionView, MyModel, MyItemView) ->
  "use strict"
  DetailsController = details: (param) ->
    console.log param + " testing "

  DetailsController

