var mongoose = require('mongoose');

var dbConfig = {
    localhost: 'mongodb://localhost/cabapp',
    url: 'mongodb://admin:admin@ds157621.mlab.com:57621/cabapp'
};
mongoose.connect(dbConfig.localhost);

var openCon = function(){
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("we're connected!");
    });
}

module.exports.openCon = openCon;