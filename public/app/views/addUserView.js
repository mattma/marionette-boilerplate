
define(["backbone", "marionette", "../database", "../models/index", "hbs!/app/views/templates/addUser"], function(Backbone, Marionette, Payload, MyModel, template) {
  "use strict";

  var AddUserView;
  AddUserView = Backbone.Marionette.ItemView.extend({
    template: template,
    events: {
      "click #submit": "addNewModel"
    },
    addNewModel: function(e) {
      var detail, email, first_name, last_name, newModel;
      e.preventDefault();
      first_name = $("#first_name").val();
      last_name = $("#last_name").val();
      email = $("#email").val();
      detail = $("#detail").val();
      if (first_name !== "" && last_name !== "" && email !== "" && detail !== "") {
        newModel = new MyModel({
          id: first_name + "_" + last_name,
          firstName: first_name,
          lastName: last_name,
          email: email,
          details: detail
        });
        this.resetValue();
        return Payload.add(newModel);
      }
    },
    resetValue: function() {
      $("#first_name").val("");
      $("#last_name").val("");
      $("#email").val("");
      return $("#detail").val("");
    }
  });
  return AddUserView;
});
