var responseJson = function (req, res, data) {
    res.set({'Content-Type': 'application/json'});
    res.json(data);
}

module.exports.responseJson = responseJson;