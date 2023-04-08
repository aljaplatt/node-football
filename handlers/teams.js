import teams from "../data.js";
import { Team } from "../models/team.js";


export function getTeams() {
    return {
        "message" : "success",
        "teams": teams
    }
}




export function guessTeam() {
    // loop through team and select random team 
    console.log("teams.length: ", teams.length)
    // teamLength = 
    let randNum = Math.floor(Math.random() * teams.length) + 1;
    console.log("randNum: ", randNum)
    const randomTeam = teams[randNum]
    // const anagram =  
    // console.log("anagram: ", anagram)
    return {
        "anagram" : randomTeam.anagram,
        "id": randomTeam.id
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
    //TODO - Add validator class, check all fields present
    //TODO - add anagram method that return the mixed up letters of the team name 
    const request = req.body
    console.log("req: ", request)
    let newTeam = new Team(
        request['teamName'],
        request['league'],
        request['nation'],
        request['manager'],
        request['numLeagueTitles'],
        request['established']
        )
    // request.id = uuidv4()
    console.log("newTeam: ", newTeam)
    if (newTeam){
        teams.push(newTeam)
        return {
            "message": "success",
            "teams": teams
        }
    } else {
        return {"message" : "Could not add team"}
    }
    
} 