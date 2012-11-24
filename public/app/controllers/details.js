define([
	'application',
	'text!../database_1.json',
	'../collections/index',
	'../views/itemsView',
	'../models/index',
	'../views/itemView'
], function ( App, Database, MyCollection, MyCollectionView, MyModel, MyItemView ) {
	"use strict";

	var DetailsController = {

		details: function(param) {
			console.log( param + " testing ");
		}
	};

	return DetailsController;
});
