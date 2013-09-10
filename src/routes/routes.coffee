# GET home page.

exports.home = (req, res) ->
	res.render 'index', { title: 'Express', layout: 'layout.jade' } # index: views/index.jade
