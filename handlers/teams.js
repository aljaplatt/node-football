import query from "../db/index.js"
import { Team } from "../models/requests/team.js";
import { badRequest } from "../models/responses/badRequest.js";
import { goodResponse200 } from "../models/responses/goodResponse.js";


export async function getTeams() {
    try{
        const teams = await query(`SELECT * FROM teams;`)
        // console.log(teams.rows)
        return goodResponse200(teams.rows)
    } catch (err) {
        console.log(err)
        return badRequest(err.message)
    }
}


export async function guessTeam() {
    try {
        let teams = await query(`SELECT * FROM teams;`)
        teams = teams.rows
        const randNum = Math.floor(Math.random() * teams.length);
        const randomTeam = teams[randNum]
        const data = {
            "teamid": randomTeam.teamid,
            "anagram" : randomTeam.anagram
            }
        return goodResponse200(data)
    } catch (err) {
        return badRequest(err.message)
    }
    }


export async function getTeam(req) {
    try {
        //* url params
        const teamId = req.params.teamId
        //* query params
        // console.log(req.query)
        // const teamId = req.query.teamId
        let requestedTeam = await query(`SELECT * FROM teams WHERE teamId = $1`, [teamId])
        requestedTeam = requestedTeam.rows
        console.log("requestedTeam: ", requestedTeam.length)
        if (requestedTeam.length) {
            return goodResponse200(requestedTeam)
        } else {
            throw new Error('Team ID does not exist')
        }  
    } catch (err) {
        console.log("catch:", err)
        return badRequest(err.message)
    }

}


export async function addTeam(req) {
    const request = req.body
    try {
        let newTeam = new Team(
            request['teamName'],
            request['league'],
            request['nation'],
            request['manager'],
            request['numLeagueTitles'],
            request['established']
            )
    } catch (error){
        console.log("addTeam", error)
    }
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