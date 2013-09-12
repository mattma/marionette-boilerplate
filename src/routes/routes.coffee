# GET home page.

exports.home = (req, res) ->
	res.render 'index', { title: 'Marionette Boilerplate' }
