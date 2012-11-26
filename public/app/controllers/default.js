define([
	'application',
	'../database',
	'../views/itemsView',
	'../views/detailView'
], function ( App, Payload, MyCollectionView, MyDetailView ) {
	"use strict";

	var DefaultController = {

		default: function(param) {
			var myCollectionView = new MyCollectionView({ collection: Payload });

			App.mainRegion.show( myCollectionView  );
		},

		details: function(param) {
			var model = Payload.get(param);

			var myDetailView = new MyDetailView({ model: model });

			App.mainRegion.show( myDetailView  );
		}
	};

	return DefaultController;
});
