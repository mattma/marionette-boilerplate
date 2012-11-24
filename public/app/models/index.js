define([
	'backbone'
],function(Backbone){
	'use strict';

	var MyModel = Backbone.Model.extend({
		defaults: {
			firstName: 'Derick',
			lastName: 'Bailey',
			email: 'derickbailey@gmail.com'
		}
	});

	return MyModel;
});
