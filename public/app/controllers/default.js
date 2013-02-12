
define(["application", "../database", "../views/itemsView", "../views/addUserView", "../views/detailView"], function(App, Payload, MyCollectionView, AddUserView, MyDetailView) {
  "use strict";

  var DefaultController;
  DefaultController = {
    "default": function(param) {
      var addUserView, myCollectionView;
      myCollectionView = new MyCollectionView({
        collection: Payload
      });
      addUserView = new AddUserView();
      App.formRegion.show(addUserView);
      return App.mainRegion.show(myCollectionView);
    },
    details: function(param) {
      var model, myDetailView;
      model = Payload.get(param);
      myDetailView = new MyDetailView({
        model: model
      });
      App.formRegion.close();
      return App.mainRegion.show(myDetailView);
    }
  };
  return DefaultController;
});
