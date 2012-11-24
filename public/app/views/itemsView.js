define([
	'backbone',
	'marionette',
	'./itemView'
], function (Backbone, Marionette, MyItemView) {
	"use strict";

	// Define a view to show
	var MyCollectionView = Backbone.Marionette.CollectionView.extend({
		itemView: MyItemView
	});

	return MyCollectionView;
});
