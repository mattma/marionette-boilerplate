define(['backbone', 'marionette'], function (Backbone, Marionette) {
	"use strict";

	var MyView = Backbone.Marionette.ItemView.extend({
		//template: Handlebars.compile(template),
		template: '#content-template'

		// initialize: function(){
		// 	this.bindTo(this.model, 'change', this.render, this);
		// }
	});

	return MyView;
});

