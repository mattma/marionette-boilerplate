/*global define*/

define([
	'application',
	'../models/index',
	'../views/index'
], function ( App, MyModel, MainView ) {
	"use strict";

	var DefaultController = {

		default: function(param) {
			var model = new MyModel();
			var mainView = new MainView({ model: model });

			App.mainRegion.show( mainView );
		}
	};

	return DefaultController;
});
