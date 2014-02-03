define [
  "text!database.json",
  "collections/index",
  "views/itemsView",
  "models/index",
  "views/itemView"], (Database, MyCollection, MyCollectionView, MyModel, MyItemView) ->
  "use strict"
  DetailsController = details: (param) ->
    console.log param + " testing "

  DetailsController

