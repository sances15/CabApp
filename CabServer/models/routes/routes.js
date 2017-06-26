var mongoose = require('mongoose');

var RoutesSchema = mongoose.Schema({
	routeName: {
		type: String,
        required: true
	},
	lastCheckInCordinates: {
		lastCheckInTime: Date,
		latitude: Number,
		longitude: Number
	},
	srid: [String],
	cab: {
		type: mongoose.Schema.Types.ObjectId,
		ref: Cabs
	},
	stops: {
		type: mongoose.Schema.Types.ObjectId,
		ref: Stops
	}
});

module.exports = mongoose.model('Routes', RoutesSchema);