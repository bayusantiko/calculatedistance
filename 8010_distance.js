const express = require("express");
const bodyParser = require("body-parser");
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8010
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>res.send('Hello World'));

var routes = require('./src/routes/distance');
routes(app);

// set port, listen for requests
app.listen(server_port, server_ip_address, () => {
  console.log("Server is running on port 3000.");
});
