define([
	'backbone',
	'marionette',
	'./itemView'
], function (Backbone, Marionette, ItemView) {
	"use strict";

	var MyItemView = new ItemView();

	// Define a view to show
	var MyCollectionView = Backbone.Marionette.CompositeView.extend({
		itemView: MyItemView,
		itemViewContainer: "#section",

		initialize: function(){
			this.bindTo(this, "reset", this.render);
		}
	});

	return MyCollectionView;
});
