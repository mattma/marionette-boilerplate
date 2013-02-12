define ["backbone", "app/models/index"], (Backbone, MyModel) ->
  "use strict"
  MyCollection = Backbone.Collection.extend(model: MyModel)
  MyCollection

