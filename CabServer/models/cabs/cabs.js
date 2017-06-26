var mongoose = require('mongoose');

var CabsSchema = mongoose.Schema({
	cabNumber: {
        type: String,
        required: true
    },
	driverName: {
        type: String,
        require: true
    },
    driverNumber: {
        type: Number,
        require: true
    },
	routeId: {
		type: mongoose.Schema.ObjectId,
		ref: Routes
	}
});

module.exports = mongoose.model('Cabs', cabsSchema);