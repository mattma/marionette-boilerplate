define([
	'backbone',
	'marionette',
	'./itemView',
	'hbs!/app/views/templates/container'
], function (Backbone, Marionette, ItemView, template) {
	"use strict";

	var MyItemView = new ItemView();

	// Define a view to show
	var MyCollectionView = Backbone.Marionette.CompositeView.extend({
		itemView: MyItemView,
		template: template,

		initialize: function(){
			this.bindTo(this, "reset", this.render);
		},

		appendHtml: function(collectionView, itemView){
			collectionView.$("div").append(itemView.el);
		}
	});

	return MyCollectionView;
});
