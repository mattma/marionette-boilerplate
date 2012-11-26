define([
	'application',
	'../database',
	'../views/itemsView',
	'../views/addUserView',
	'../views/detailView'
], function ( App, Payload, MyCollectionView, AddUserView, MyDetailView ) {
	"use strict";

	var DefaultController = {

		default: function(param) {
			var myCollectionView = new MyCollectionView({ collection: Payload });
			var addUserView = new AddUserView();

			App.formRegion.show( addUserView  );
			App.mainRegion.show( myCollectionView  );
		},

		details: function(param) {
			var model = Payload.get(param);

			var myDetailView = new MyDetailView({ model: model });

			App.formRegion.close( );
			App.mainRegion.show( myDetailView  );
		}
	};

	return DefaultController;
});
