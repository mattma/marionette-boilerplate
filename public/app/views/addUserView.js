define([
	'backbone',
	'marionette',
	'../database',
	'../models/index',
	'hbs!/app/views/templates/addUser'
], function (Backbone, Marionette, Payload, MyModel, template) {
	"use strict";

	// Define a view to show
	var AddUserView = Backbone.Marionette.ItemView.extend({
		template: template,
		events: {
			"click #submit": "addNewModel"
		},

		addNewModel: function(e){
			e.preventDefault();

			var first_name = $("#first_name").val(),
				last_name = $("#last_name").val(),
				email = $("#email").val(),
				detail = $("#detail").val();

			if( first_name !== '' && last_name !== '' && email !== '' && detail !== '' ) {
				var newModel = new MyModel({
					id: first_name + '_' + last_name,
					firstName: first_name,
					lastName: last_name,
					email: email,
					details: detail
				});

				this.resetValue();

				Payload.add( newModel );
			}
		},

		resetValue: function() {
			$("#first_name").val('');
			$("#last_name").val('');
			$("#email").val('');
			$("#detail").val('');
		}
	});

	return AddUserView;
});

