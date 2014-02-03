require.config
  paths:
    basePath: '/'
    jquery: ["http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", "libs/jquery/jquery"]
    underscore: "libs/underscore/underscore-min"
    backbone: "libs/backbone/backbone-min"
    marionette: "libs/marionette/lib/backbone.marionette"
    text: "libs/text/text"
    jade: "libs/jade/runtime"

  shim:
    marionette:
      deps: ["jquery", "underscore", "backbone"]
      exports: "Backbone.Marionette"
    backbone:
      deps: ["jquery", "underscore"]
      exports: "Backbone"


