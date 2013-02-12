
define(["backbone", "application", "routers/index"], function(Backbone, App, Router) {
  "use strict";
  App.addRegions({
    mainRegion: "#content",
    formRegion: "#add_user_form"
  });
  return App.addInitializer(function() {
    var router;
    router = new Router();
    return Backbone.history.start();
  });
});
