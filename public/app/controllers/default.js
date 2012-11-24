/*global define*/

define([
	'application',
	'text!../database_1.json',
	'../collections/index',
	'../views/itemsView'
], function ( App, Database, MyCollection, MyCollectionView ) {
	"use strict";

	var DefaultController = {

		default: function(param) {
			var myCollection = new MyCollection();
			var myCollectionView = new MyCollectionView({ collection: myCollection });

			console.log( MyCollectionView );

			App.mainRegion.show( myCollectionView );
		}
	};

	return DefaultController;
});
