require.config({
	paths : {
		'json2': '/libs/hbs/json2',
		'underscore' : '/libs/lodash-0.9.2',
		'backbone'   : '/libs/backbone-0.9.2',
		'marionette' : '/libs/backbone.marionette',
		'Handlebars': '/libs/handlebars.min',
		'jquery'     : '/libs/jquery-1.8.3.min',
		'i18nprecompile' : '/libs/hbs/i18nprecompile',
		'hbs': '/libs/hbs'
	},
	shim : {
		backbone : {
			exports : 'Backbone',
			deps : ['jquery','underscore']
		},
		marionette : {
			exports : 'Backbone.Marionette',
			deps : ['backbone']
		},
		handlebars: {
			exports: "Handlebars",
			deps: []
		}
	},
	hbs : {
		templateExtension : 'hbs',
		// if disableI18n is `true` it won't load locales and the i18n helper won't work as well.
		disableI18n: true
	}
	//deps : ['jquery','underscore']
});


// require(['app', 'hbs!views/templates/header'], function (App, test) {
// 	console.log( test );
require(['app'], function (App) {
	App.start();
});

