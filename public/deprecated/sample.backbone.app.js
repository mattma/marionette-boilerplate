var ContentModel = Backbone.Model.extend({
	defaults: {
		title: "title name",
		description: "this is the content desscription"
	}
});

var ContentCollection = Backbone.Collection.extend({
	model: ContentModel
});


var ContentItemView = Backbone.View.extend({
	tagName: "li",
	events: {
		"click": "showContent"
	},
	initialize: function(){
		this.render();
	},
	render: function() {
		$(this.el).append( this.model.get("title") );
		return this;
	},
	showContent: function(){
		var titleId =  this.model.cid;
		router.navigate('view/'+titleId, { trigger: true });
	}
});

var ContentView = Backbone.View.extend({
	tagName: "ul",
	initialize: function(){
		this.render();
	},
	render: function(){
		var self = this;
		this.collection.each( function(content) {
			$(self.el).append( new ContentItemView( {model: content } ).el  );
		});
		return this;
	}
});

var ContentSingleView = Backbone.View.extend({
	render: function(){
		console.log( this.model );
		var title = this.make( "h1", {},  this.model.get("title"));
		var description = this.make( "p", {},  this.model.get("description"));
		$("body").empty().append( $(this.el).append( title).append(description ) ) ;
	}
});

var content1 = new ContentModel({
	title: "Kelly Gao",
	description: "Kelly Gao is a great mom"
});

var content2 = new ContentModel({
	title: "Aaron Ma",
	description: "Aaron Ma is a great kid"
});

var content3 = new ContentModel({
	title: "Matt Ma",
	description: "Matt Ma is a great Dad"
});

var contents = new ContentCollection();
contents.add([content1, content2, content3]);

var Router = Backbone.Router.extend({
	routes: {
		'view/:query': 'goToOneView',
		'*action': 'goToNewView'
	},

	goToNewView: function(query) {
		this.navigate("view", { trigger: true })
		var contentsView = new ContentView({ collection: contents });
		$("body").empty().append( contentsView.el );
	},

	goToOneView: function(cid) {
		var currentModel = contents.getByCid(cid) ;
		var singleView = new ContentSingleView({ model: currentModel }).render();
	}
});

var router = new Router();
Backbone.history.start();
