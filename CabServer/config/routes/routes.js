'use strict'
//services
module.exports = function(app){

	app.get('/', function(req,res){
		console.log(req)
	});
}