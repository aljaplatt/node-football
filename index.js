import express from "express";

// initialise express - call function and 
const app = express();
const PORT = 3000;

// parse request body as JSON
app.use(express.json())

app.get("/", (req, res) => {
    const batistuta = {
        "firstName": "Gabriel",
        "surname": "Batistuta",
        "position": "Striker",
        "team": "Fiorentina",
        "nationality": "Argentina",
        "rating": 95
    }
    res.json({
        "key" : "value",
        "payload": batistuta
    })
})

app.post("/add-player", (req, res) => {
    const request = req.body
    console.log(request)

    res.json({
        "message": "success",
        "payload": request
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