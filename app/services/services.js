exports.addSchedules = function (request, response) {
    const schedule = {
        scheduleDate: request.body.scheduleDate,
        scheduleDropPoint: request.body.scheduleDropPoint,
        schedulePickupPoint: request.body.schedulePickupPoint,
        scheduleRouteId: request.body.scheduleRouteId,
        scheduleStatus: request.body.scheduleStatus,
        scheduleTime: request.body.scheduleTime
    };
    db.collection('schedules').insert(schedule, (err, result) => {
        if (err) {
            response.send({ 'error ': 'An error has occurred' });
        } else {
            response.send(result.ops[0]);
        }
    });
}