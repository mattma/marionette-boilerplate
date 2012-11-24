define([
	'application',
	'text!../database_1.json',
	'../collections/index',
	'../views/itemsView',
	'../models/index',
	'../views/itemView'
], function ( App, Database, MyCollection, MyCollectionView, MyModel, MyItemView ) {
	"use strict";

	var DefaultController = {

		default: function(param) {

			// var myCollectionView = new MyCollectionView({ collection: Database });

			// App.mainRegion.show( myCollectionView.render()  );

			var myModel = new MyModel();
			var myItemView = new MyItemView({ model: myModel });

			App.mainRegion.show( myItemView );
		},

		details: function(param) {
			console.log( param + " testing ");
		}
	};

	return DefaultController;
});
