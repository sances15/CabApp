var mongoose = require('mongoose');

var ScheduleSchema = mongoose.Schema({
	scheduleDate: {
        type: Date,
        required: true
    },
	SchedulePickupPoint: {
		type: mongoose.Schema.Types.ObjectId,
		ref: Stops
	},
	scheduleDropPoint: {
		type: mongoose.Schema.Types.ObjectId,
		ref: Stops
	},
	routeID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: Routes
	},
	scheduleStatus: String,
	pickUpTime: Date,
	passangers : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Users
        }
    ]
});

module.exports = mongoose.model('Schedule', ScheduleSchema);