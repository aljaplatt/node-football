import express from "express";

import { getTeams, getTeam, addTeam, guessTeam } from "./handlers/teams.js";


// initialise express - call function and 
const app = express();
const PORT = 3000;

// parse request body as JSON
// app.use(bodyParser.json()) // heavier non-builtin version 
app.use(express.json())

app.get("/teams", async (req, res) => {
    res.json(await getTeams())
})

app.get("/guess-team", async (req, res) => {
    res.json(guessTeam())
})

app.get("/team/:teamId", async (req, res) => {
    res.json(getTeam(req))
})

app.post("/add-team", async (req, res) => {
    res.json(addTeam(req))
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