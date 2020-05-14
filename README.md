# Calculate Distance API.
This is implementation of calculate distance between 2 coordinates using node js

![alt text](https://img.shields.io/badge/version-0.1-blue)
![alt text](https://img.shields.io/badge/express-4.17.1-green)


## Pre requisites
* Make sure you have already install node js in your environment. You can check it using
>  node -v

* Install Postman as API Testing Tool

## Installation
Create node js project and install express module within the project.
Clone the codebase from my github repository
>  $ git clone https://github.com/bayusantiko/calculatedistance.git

## How to Use
Open Postman and set endpoint below with POST method
>  http://localhost:3000/distance
Make json request with parameters as below :

* `long1` Longitude coordinate 1
* `lat1` Latitude coordinate 1
* `long2` Longitude coordinate 2
* `lat2` Latitude coordinate 2

Your request will be :
```json
{
	"lat1":"your value",
	"long1":"your value",
	"lat2":"your value",
	"long2":"your value"
}
```
Then the response will be :
```json
{
	"status":"200",
	"values":"distance",
}

