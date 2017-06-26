var mongoose = require('mongoose');

var StopsSchema = mongoose.Schema({
    stopName: {
        type: String,
        required: true
    },
	cordinates: {
		latitude: Number,
		longitude: Number
	}
});

module.exports = mongoose.model('Stops', StopsSchema);