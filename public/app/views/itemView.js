define([
	'backbone',
	'marionette',
	'hbs!/app/views/templates/header'
], function (Backbone, Marionette, template) {
	"use strict";

	// Define a view to show
	var MainView = Backbone.Marionette.ItemView.extend({
		template: template
	});

	return MainView;
});

