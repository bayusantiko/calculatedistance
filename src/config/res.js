'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'values': values
  };
  res.json(data);
  res.end();
};
exports.notfound = function(values, res) {
  var data = {
      'status': 404,
      'message': values
  };
  res.status(404)
  res.json(data);
  res.end();
};

exports.unauthorized = function(values, res) {
  var data = {
      'status': 401,
      'message': values
  };
  res.status(401)
  res.json(data);
  res.end();
};

exports.servererror = function(values, res) {
  var data = {
      'status': 500,
      'message': values
  };
  res.status(500)
  res.json(data);
  res.end();
};