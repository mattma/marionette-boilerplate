define [
  "app/application", 
  "text!app/database_1.json", 
  "app/collections/index",
  "app/views/itemsView", 
  "app/models/index", 
  "app/views/itemView"], (App, Database, MyCollection, MyCollectionView, MyModel, MyItemView) ->
  "use strict"
  DetailsController = details: (param) ->
    console.log param + " testing "

  DetailsController

