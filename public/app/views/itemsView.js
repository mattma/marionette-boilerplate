
define(["backbone", "marionette", "./itemView"], function(Backbone, Marionette, ItemView, template) {
  "use strict";

  var MyCollectionView;
  MyCollectionView = Backbone.Marionette.CollectionView.extend({
    itemView: ItemView,
    tagName: "section",
    initialize: function() {
      return this.bindTo(this, "reset", this.render);
    }
  });
  return MyCollectionView;
});
