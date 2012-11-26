/*global $*/
define([
	'backbone',
	'application',
	'routers/index'
], function ( Backbone, App, Router ) {
	"use strict";

	App.addRegions({
		"mainRegion": "#content",
		"formRegion": "#add_user_form"
	});

	// Initialize this module when the app starts
	App.addInitializer(function(){
		// Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
		// 	return Handlebars.compile(rawTemplate);
		// };
		var router = new Router();
		Backbone.history.start();
	});
});
