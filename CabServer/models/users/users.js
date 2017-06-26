var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
	firstname : {	
		type : String, 
		required : true
	},
	lastname  : { 
		type : String
	},
	email : {	
		type : String, 
		required : true
	},
	password  : {	
		type : String, 
		required : true
	}
});

module.exports = mongoose.model('Users', UsersSchema);