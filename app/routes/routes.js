const service = require('../services/services');
module.exports = function (app, db) {
    app.route('/addSchedules')
       .post(service.addSchedules);
    /**
     * Add schdules to the collection
     */
    // app.post('/addSchedules', (request, response) => {
    //     const schedule = {
    //         scheduleDate: request.body.scheduleDate,
    //         scheduleDropPoint: request.body.scheduleDropPoint,
    //         schedulePickupPoint: request.body.schedulePickupPoint,
    //         scheduleRouteId: request.body.scheduleRouteId,
    //         scheduleStatus: request.body.scheduleStatus,
    //         scheduleTime: request.body.scheduleTime
    //     };
    //     db.collection('schedules').insert(schedule, (err, result) => {
    //         if (err) {
    //             response.send({ 'error ': 'An error has occurred' });
    //         } else {
    //             response.send(result.ops[0]);
    //         }
    //     });
    // });

    app.get('/getAllSchedules', (request, response) => {
        db.collection('schedules').find().toArray((err, result) => {
            if (err) {
                response.send({ 'error ': 'An error has occurred' });
            } else {
                response.send(result);
            }
        })
    });

    app.post('/addCabMates', (request, response) => {
 
    });
};