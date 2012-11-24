/*global $*/
define([
	'jquery',
	'backbone',
	'marionette',
	'routers/index',
	'hbs!/app/views/templates/test'
], function ($, Backbone, Marionette, Router, template) {
	"use strict";

	var App = new Backbone.Marionette.Application();

	App.addRegions({
		"mainRegion": "#content"
	});

	// Define a view to show
	var MainView = Backbone.Marionette.ItemView.extend({
		template: template
	});

	// Define a controller to run this module
	var Controller = Backbone.Marionette.Controller.extend({
		initialize: function(options){
			this.region = options.region
		},
		show: function(){
			var model = new Backbone.Model({
				contentPlacement: "matt here"
			});

			var view = new MainView({
				model: model
			});

			this.region.show(view);
		}
	});

	// Initialize this module when the app starts
	App.addInitializer(function(){
		App.controller = new Controller({
			region: App.mainRegion
		});

		App.controller.show();

		// Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
		// 	return Handlebars.compile(rawTemplate);
		// };

		var router = new Router();
		Backbone.history.start();
	});

	return App;
});
