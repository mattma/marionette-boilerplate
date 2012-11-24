/*global define*/

define([
	'hbs!/app/views/templates/test'
], function (template) {
	"use strict";

	var DefaultController = {
		default: function(param) {
			console.log("matt ma starts");
		}
	};

	return DefaultController;
});
