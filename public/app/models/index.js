define([
	'backbone'
],function(Backbone){
	'use strict';

	var MyModel = Backbone.Model.extend({
		defaults: {
			id: 'Derick_Bailey',
			firstName: 'Derick',
			lastName: 'Bailey',
			email: 'derickbailey@gmail.com',
			details: "He is the creator of Marionette framework."
		}
	});

	return MyModel;
});
