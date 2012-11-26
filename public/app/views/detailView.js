define([
	'backbone',
	'marionette',
	'hbs!/app/views/templates/details'
], function (Backbone, Marionette, template) {
	"use strict";

	// Define a view to show
	var DetailView = Backbone.Marionette.ItemView.extend({
		template: template,
		tagName: "p"
	});

	return DetailView;
});

