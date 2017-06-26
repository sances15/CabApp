var usersService = require('../../services/users/users.service');
//services
module.exports = function(app){

	app.get('/knockknock', function(req,res){ 
        res.send('Who\'s there');
	});
    
    app.post('/addUser', function(req,res){ 
        usersService.addUser(req.body, function (err, users) {
           if (err) {
               res.send(err);
           } 
            res.json(users);
        });
	});
}