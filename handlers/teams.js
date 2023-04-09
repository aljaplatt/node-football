import query from "../db/index.js"
import { Team } from "../models/team.js";


export async function getTeams() {
    const teams = await query(`SELECT * FROM teams;`)
    console.log(teams.rows)
    return {
        "teams": teams.rows
    }
}


export async function guessTeam() {
    let teams = await query(`SELECT * FROM teams;`)
    teams = teams.rows
    const randNum = Math.floor(Math.random() * teams.length);
    const randomTeam = teams[randNum]
    return {
        "teamid": randomTeam.teamid,
        "anagram" : randomTeam.anagram
    }
}


export async function getTeam(req) {
//* url params
console.log(req.params)
const teamId = req.params.teamId
//* query params
// console.log(req.query)
// const teamId = req.query.teamId
console.log(teamId)
const requestedTeam = await query(`SELECT * FROM teams WHERE teamId = $1`, [teamId])
return {
    "team": requestedTeam.rows
} 
}

//TODO - REFACTOR TO ADD TO ESQL, NOT ARR 
export function addTeam(req) {

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