define [
  "backbone", 
  "Backbone.Marionette",
  "app/database", 
  "app/models/index",
  "app/templates/addUser"], (Backbone, Marionette, Payload, MyModel, template) ->
  "use strict"
  
  # Define a view to show
  AddUserView = Backbone.Marionette.ItemView.extend(
    template: template
    events:
      "click #submit": "addNewModel"

    addNewModel: (e) ->
      e.preventDefault()
      first_name = $("#first_name").val()
      last_name = $("#last_name").val()
      email = $("#email").val()
      detail = $("#detail").val()
      if first_name isnt "" and last_name isnt "" and email isnt "" and detail isnt ""
        newModel = new MyModel(
          id: first_name + "_" + last_name
          firstName: first_name
          lastName: last_name
          email: email
          details: detail
        )
        @resetValue()
        Payload.add newModel

    resetValue: ->
      $("#first_name").val ""
      $("#last_name").val ""
      $("#email").val ""
      $("#detail").val ""
  )
  AddUserView

