
define(["backbone", "../models/index"], function(Backbone, MyModel) {
  "use strict";

  var MyCollection;
  MyCollection = Backbone.Collection.extend({
    model: MyModel
  });
  return MyCollection;
});
