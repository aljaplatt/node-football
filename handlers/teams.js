import query from "../dbConfig/index.js"
import { dbGetTeams } from "../models/db/dbGetTeams.js";
import { Team } from "../models/requests/team.js";
import { badRequest } from "../models/responses/badRequest.js";
import { goodResponse200 } from "../models/responses/goodResponse.js";


export async function getTeamsController() {
    try{
        return goodResponse200(await dbGetTeams())
    } catch (err) {
        console.log(err)
        return badRequest(err.message)
    }
}


export async function guessTeamController() {
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


export async function getTeamController(req) {
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


export async function addTeamController(req) {
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

    return goodResponse200(newTeam)
    } catch (err) {
        console.log("addTeam", err)
        return badRequest(err.message)
    }
} 