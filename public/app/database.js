define([
	'collections/index',
	'models/index'
], function (MyCollection, MyModel) {
	"use strict";

	var Payload = new MyCollection([
		new MyModel({
			"userId": "Derick_Bailery",
			"firstName": "Derick",
			"lastName": "Bailey",
			"email": "derickbailey@gmail.com",
			"details": "He is the creator of Marionette framework."
		}),
		new MyModel({
			"userId": "Matt_Ma",
			"firstName": "Matt",
			"lastName": "Ma",
			"email": "mma@adchemy.com",
			"details": "He is a front end developer."
		})
	]);

	return Payload;
});
