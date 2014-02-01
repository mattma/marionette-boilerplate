define ["application", "app/database", "app/views/itemsView", "app/views/addUserView", "app/views/detailView"], (App, Payload, MyCollectionView, AddUserView, MyDetailView) ->
  "use strict"
  DefaultController = 
    default: (param) ->
      myCollectionView = new MyCollectionView(collection: Payload)
      addUserView = new AddUserView()
      App.formRegion.show addUserView
      App.mainRegion.show myCollectionView
 
    details: (param) ->
      model = Payload.get(param)
      myDetailView = new MyDetailView(model: model)
      App.formRegion.close()
      App.mainRegion.show myDetailView

  DefaultController

