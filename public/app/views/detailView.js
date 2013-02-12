
define(["backbone", "marionette", "hbs!/app/views/templates/details"], function(Backbone, Marionette, template) {
  "use strict";

  var DetailView;
  DetailView = Backbone.Marionette.ItemView.extend({
    template: template,
    tagName: "p"
  });
  return DetailView;
});
