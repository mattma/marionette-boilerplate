define([
	'marionette',
	'backbone',
	'../controllers/default'
], function(Marionette, Backbone, DefaultController) {
	'use strict';

	var Router = Backbone.Marionette.AppRouter.extend({
		appRoutes:{
			'*action': 'default'
		},
		controller: DefaultController
		// routes: {
		// 	'': 'init'
		// }
	});

	return Router;
});
