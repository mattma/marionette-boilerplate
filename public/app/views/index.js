define([
	'backbone',
	'marionette',
	'hbs!/app/views/templates/test'
], function (Backbone, Marionette, template) {
	"use strict";

	// Define a view to show
	var MainView = Backbone.Marionette.ItemView.extend({
		template: template
	});

	return MainView;
});

