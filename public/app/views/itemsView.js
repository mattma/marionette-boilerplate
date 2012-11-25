define([
	'backbone',
	'marionette',
	'./itemView'
], function (Backbone, Marionette, ItemView, template) {
	"use strict";

	// Define a view to show
	var MyCollectionView = Backbone.Marionette.CollectionView.extend({
		itemView: ItemView,
		tagName: "section",

		initialize: function(){
			this.bindTo(this, "reset", this.render);
		}
	});

	return MyCollectionView;
});
