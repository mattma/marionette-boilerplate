define([
	'backbone',
	'marionette',
	'../database',
	'../models/index',
	'hbs!/app/views/templates/main'
], function (Backbone, Marionette, Payload, MyModel, template) {
	"use strict";

	// Define a view to show
	var MainView = Backbone.Marionette.ItemView.extend({
		template: template,
		tagName: "p",

		events: {
			"click #delete": "removeThisModel"
		},

		removeThisModel: function(e) {
			e.preventDefault();
			var userId = $( e. target ).attr("data-user");
			var model = new MyModel({id: userId});
			Payload.remove(model);
		}
	});

	return MainView;
});

