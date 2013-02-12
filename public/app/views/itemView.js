
define(["backbone", "marionette", "../database", "../models/index", "hbs!/app/views/templates/main"], function(Backbone, Marionette, Payload, MyModel, template) {
  "use strict";

  var MainView;
  MainView = Backbone.Marionette.ItemView.extend({
    template: template,
    tagName: "p",
    events: {
      "click #delete": "removeThisModel"
    },
    removeThisModel: function(e) {
      var model, userId;
      e.preventDefault();
      userId = $(e.target).attr("data-user");
      model = new MyModel({
        id: userId
      });
      return Payload.remove(model);
    }
  });
  return MainView;
});
