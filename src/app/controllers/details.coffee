define ["application", "text!../database_1.json", "../collections/index", "../views/itemsView", "../models/index", "../views/itemView"], (App, Database, MyCollection, MyCollectionView, MyModel, MyItemView) ->
  "use strict"
  DetailsController = details: (param) ->
    console.log param + " testing "

  DetailsController

