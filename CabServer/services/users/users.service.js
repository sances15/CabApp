var Users = require('../../models/users/users');


//Add Task
 var addUser = function(doc, callback) {
     Users.create(doc, callback);
     console.log("inside task service adding task");
 };

module.exports = {
    addUser : addUser
}
