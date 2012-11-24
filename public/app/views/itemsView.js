define([
	'backbone',
	'marionette',
	'./itemView'
], function (Backbone, Marionette, ItemView) {
	"use strict";

	var MyItemView = new ItemView();

	// Define a view to show
	var MyCollectionView = Backbone.Marionette.CollectionView.extend({
		itemView: MyItemView
	});

	return MyCollectionView;
});
