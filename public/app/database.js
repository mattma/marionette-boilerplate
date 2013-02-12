
define(["collections/index", "models/index"], function(MyCollection, MyModel) {
  "use strict";

  var Payload;
  Payload = new MyCollection([
    new MyModel({
      id: "Derick_Bailey",
      firstName: "Derick",
      lastName: "Bailey",
      email: "derickbailey@gmail.com",
      details: "He is the creator of Marionette framework."
    }), new MyModel({
      id: "Matt_Ma",
      firstName: "Matt",
      lastName: "Ma",
      email: "mma@adchemy.com",
      details: "He is a front end developer."
    }), new MyModel({
      id: "Ganesh_Krishnan",
      firstName: "Ganesh",
      lastName: "Krishnan",
      email: "gkrishnam@adchemy.com",
      details: "He is a team leader."
    }), new MyModel({
      id: "Jeremy_Anderson",
      firstName: "Jeremy",
      lastName: "Anderson",
      email: "janderson@adchemy.com",
      details: "He is the coolest dude."
    })
  ]);
  return Payload;
});
