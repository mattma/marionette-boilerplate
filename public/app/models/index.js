define(['backbone'],function(Backbone){
	'use strict';

	return Backbone.Model.extend({
		defaults: {
			firstName: 'Derick',
			lastName: 'Bailey',
			email: 'derickbailey@gmail.com'
		}
	});
});
