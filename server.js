//a module with functions or objects or variables assigned to it
const express = require('express')
//function is used to mount the specified middleware function(s) at the path
//which is being specified
const app = express()
//This app starts a server and listens on port 3000 for connections
const port = 3000
//module provides utilities for working with file and directory paths
const path = require('path');
//responsible for parsing the incoming request bodies in a middleware before handling it
const bodyParser = require("body-parser");

//parse application/www-form-urlencoded
//The extended option allows to choose between parsing the URL-encoded data 
//with the querystring library (when false) or the qs library (when true). 
//The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, 
//allowing for a JSON-like experience with URL-encoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())


//function define a route handler for GET requests to a given URL (Text)
app.get('/', (req, res) => {
    //This function accepts a single parameter body that describe the body
    // which is to be sent in the response
    res.send('Welcome to Data Representation & Querying.')
})

//function define a route handler for GET requests to a given URL (Text with NAME)
app.get('/hello/:name', (req, res) => {
    //identifies name request
    console.log(req.params.name)
    //sends back Hello on different URL
    res.send('Hello ' + req.params.name);
})

//function define a route handler for GET requests to a given URL (JSON)
app.get('/api/movies', (req, res) => {
    //creates variable with movies json data
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    //This function sends JSON data in the response 
    res.json({ movies: mymovies });
})

//function define a route handler for GET requests to a given URL (HTML page)
app.get('/test', (req, res) => {
    //This function sends html file in the response
    res.sendFile(__dirname + '/index.html');
})

//function define a route handler for GET requests to a given URL (form data)
app.get('/name', (req, res) => {
    //This function sends first and last name from form in the response
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//function define a route handler for POST requests using the BODY (form data)
app.post('/name', (req, res) => {
    //This function sends first and last name from form in the response
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

//used to bind and listen the connections on the specified host and port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})