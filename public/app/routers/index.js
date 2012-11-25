define([
	'backbone',
	'marionette',
	'../controllers/default'
], function(Backbone, Marionette, DefaultController) {
	'use strict';

	var Router = Backbone.Marionette.AppRouter.extend({
		appRoutes:{
			':name': 'details',
			'*action': 'default'
			//'*action': 'angrycat'
		},
		controller: DefaultController
		// routes: {
		// 	'': 'init'
		// }
	});

	return Router;
});
