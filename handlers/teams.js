import { v4 as uuidv4 } from 'uuid'

import teams from "../data.js";


export function sum(a, b) {
    return a + b;
  }

export function getTeams() {
    return {
        "message" : "success",
        "teams": teams
    }
}




export function getTeam(req) {
//* url params
console.log(req.params)
const teamId = req.params.teamId
//* query params
// console.log(req.query)
// const teamId = req.query.teamId
console.log(teamId)
// loop through obj in teams array until you find obj with matching id 
// const requestedTeam = teams.find(team => team.id === teamId)
const requestedTeam = teams.find(function(team) {
    return team.id === teamId
})
if (!requestedTeam) {
    console.log("requestedTeam: ", requestedTeam)
    return {
        "message": `The requested team id ${teamId} could not be found`
    }
}
return {
    "team": requestedTeam
} 
}


export function addTeam(req) {
    const request = req.body
    request.id = uuidv4()
    console.log(request)
    teams.push(request)
    return {
        "message": "success",
        "teams": teams
    }
} 