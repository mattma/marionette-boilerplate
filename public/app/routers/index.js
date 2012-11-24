define(['marionette', 'backbone'],function(Marionette, Backbone) {
	'use strict';

	var Router = Backbone.Marionette.AppRouter.extend({
		appRoutes:{
			'*action': 'default'
		}
		// routes: {
		// 	'': 'init'
		// }
	});

	return Router;
});
