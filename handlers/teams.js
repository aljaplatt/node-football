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
export async function addTeam(req) {

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
    const teamName = newTeam.teamName;
    const league = newTeam.league;
    const nation = newTeam.nation;
    const manager = newTeam.manager;
    const numLeagueTitles = newTeam.numLeagueTitles;
    const established = newTeam.established;
    const anagram = newTeam.anagram;
    const teamId = newTeam.teamId;
    const res = await query(`INSERT INTO teams (teamName, league, nation, manager, numLeagueTitles, established, anagram, teamId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING teamName`, [teamName,league,nation,manager,numLeagueTitles,established,anagram,teamId] );
    console.log("Table populated: ", res.rows);

    return {
        "newteam": newTeam
    }
    
} 