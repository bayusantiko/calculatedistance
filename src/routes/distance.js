'use strict';

module.exports = function(app) {
    var distance = require("../controllers/distance.js");

    //Retrieve user by query role and status
    app.post('/distance',distance.calcDistance);

    // 404 - Resource not found
    app.use(function(req, res) {
        return res.status(404).send({ values: 404,message: 'Resource '+req.url+' with method '+req.method+ ' not found.' });
    });
    // 500 - Any server error
    app.use(function(err, req, res,) {
        return res.status(500).send({ values: 500, message: err });
    });
    
};