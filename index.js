import express from "express";
import { v4 as uuidv4 } from 'uuid'

import teams from "./data.js";

// initialise express - call function and 
const app = express();
const PORT = 3000;

// parse request body as JSON
app.use(express.json())

app.get("/teams", (req, res) => {
    res.json({
        "key" : "value",
        "payload": teams
    })
})
app.get("/team/:teamId", (req, res) => {
    console.log(req.params)
    const teamId = req.params.teamId
    const requestedTeam = teams.find(obj => obj.id === teamId)
    // console.(teamId)
    res.json({
        "key" : "value",
        "payload": requestedTeam
    })
})

app.post("/add-team", (req, res) => {
    const request = req.body
    request.id = uuidv4()
    console.log(request)
    teams.push(request)
    res.json({
        "message": "success",
        "payload": teams
    })
})

// app.listen(PORT)
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})

// import http from 'http'; // es modules
// // const http = require('http') // commonjs

// const PORT = 8080

// //create a server object:
// // http.createServer(function (req, res) {
// //     res.write('Hello World!'); //write a response to the client
// //     res.end(); //end the response
// //   }).listen(8080); //the server object listens on port 8080

// function requestHandler(req, res){
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// }

// http.createServer(requestHandler).listen(PORT)