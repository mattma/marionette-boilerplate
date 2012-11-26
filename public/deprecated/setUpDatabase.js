define([
	'../libs/store.min'
], function ( Store ) {
	"use strict";

	var setUpLocalStorage = function() {
		Store.set("Database", "matt ma"
			// {
			// 	id: "Derick_Bailey",
			// 	firstName: "Derick",
			// 	lastName: "Bailey",
			// 	email: "derickbailey@gmail.com",
			// 	details: "He is the creator of Marionette framework."
			// },
			// {
			// 	id: "Matt_Ma",
			// 	firstName: "Matt",
			// 	lastName: "Ma",
			// 	email: "mma@adchemy.com",
			// 	details: "He is a front end developer."
			// }
			// {
			// 	id: "Ganesh_Krishnan",
			// 	firstName: "Ganesh",
			// 	lastName: "Krishnan",
			// 	email: "gkrishnam@adchemy.com",
			// 	details: "He is a team leader."
			// },
			// {
			// 	id: "Jeremy_Anderson",
			// 	firstName: "Jeremy",
			// 	lastName: "Anderson",
			// 	email: "janderson@adchemy.com",
			// 	details: "He is the coolest dude."
			// }

		);
	};

	return setUpLocalStorage;
});

