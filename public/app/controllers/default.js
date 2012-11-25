define([
	'application',
	'../database',
	'../views/itemsView'
], function ( App, Payload, MyCollectionView ) {
	"use strict";

	var DefaultController = {

		default: function(param) {

			var myCollectionView = new MyCollectionView({ collection: Payload });

			App.mainRegion.show( myCollectionView  );
		},

		details: function(param) {
			console.log( param + " testing ");
		}
	};

	return DefaultController;
});
