/*global define*/

define([
	'application',
	'../views/index'
], function ( App, MainView ) {
	"use strict";

	var DefaultController = {
		default: function(param) {
			var model = new Backbone.Model({
				contentPlacement: "matt here"
			});

			var mainView = new MainView({ model: model });

			App.mainRegion.show( mainView );
		}
	};

	return DefaultController;
});
