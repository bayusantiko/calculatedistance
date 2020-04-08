const response = require("../config/res");

exports.calcDistance = function(req, res) {
	var lat1 = req.body.lat1;
	var long1 = req.body.long1;
	var lat2 = req.body.lat2;
	var long2 = req.body.long2;

	var R = 6371; // km (change this constant to get miles)
	var dLat = (lat2-lat1) * Math.PI / 180;
	var dLon = (long2-long1) * Math.PI / 180;
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
		Math.sin(dLon/2) * Math.sin(dLon/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	var meter = d*1000 
	response.ok(meter, res)
};

