HTML Markup Related Code:

script(type="text/template", id="angry_cats-template")
	thead
		th name
		th age
	tbody

script(type="text/template", id="angry_cat-template")
	td <%=name %>
	td <%=age %>



Backbone Related Code Goes Below:

angrycat: function(param) {

	var AngryCat = Backbone.Model.extend({ });

	var AngryCats = Backbone.Collection.extend({
		model: AngryCat
	});

	var AngryCatView = Backbone.Marionette.ItemView.extend({
		template: "#angry_cat-template",
		tagName: 'tr'
	});

	var AngryCatsView = Backbone.Marionette.CompositeView.extend({
		tagName: "table",
		template: "#angry_cats-template",
		itemView: AngryCatView,

		appendHtml: function(collectionView, itemView){
			collectionView.$("tbody").append(itemView.el);
		}
	});

	var cats = new AngryCats([
		new AngryCat({ name: 'Wet Cat', age: 30 }),
		new AngryCat({ name: 'Bitey Cat', age: 12  }),
		new AngryCat({ name: 'Surprised Cat', age: 24  })
	]);

	var angryCatsView = new AngryCatsView({
		collection: cats
	});

	App.mainRegion.show(angryCatsView);
},
