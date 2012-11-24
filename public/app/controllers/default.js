define([
	'application',
	'text!../database_1.json',
	'../collections/index',
	'../views/itemsView'
], function ( App, Database, MyCollection, MyCollectionView ) {
	"use strict";

	var DefaultController = {

		default: function(param) {

			var myCollectionView = new MyCollectionView({ collection: Database });

			App.mainRegion.show( myCollectionView.render()  );
		}
	};

	return DefaultController;
});
