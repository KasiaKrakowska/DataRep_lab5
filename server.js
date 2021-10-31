//a module with functions or objects or variables assigned to it
const express = require('express')
//function is used to mount the specified middleware function(s) at the path
//which is being specified
const app = express()
//This app starts a server and listens on port 3000 for connections
const port = 3000

//function define a route handler for GET requests to a given URL
app.get('/', (req, res) => {
    //This function accepts a single parameter body that describe the body
    // which is to be sent in the response
    res.send('Welcome to Data Representation & Querying.')
})

//function define a route handler for GET requests to a given URL
app.get('/hello/:name', (req, res)=>{
    //identifies name request
    console.log(req.params.name)
    //sends back Hello on different URL
    res.send('Hello ' + req.params.name);
})

//used to bind and listen the connections on the specified host and port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})