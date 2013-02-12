
define(["backbone", "marionette", "../controllers/default"], function(Backbone, Marionette, DefaultController) {
  "use strict";

  var Router;
  Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      ":name": "details",
      "*action": "default"
    },
    controller: DefaultController
  });
  return Router;
});
