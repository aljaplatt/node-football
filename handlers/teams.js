import query from "../dbConfig/index.js"
import { dbGetTeams } from "../models/db/dbGetTeams.js";
import { dbGuessTeam } from "../models/db/dbGuessTeam.js";
import { dbGetTeam } from "../models/db/dbGetTeam.js";
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
        return goodResponse200(await dbGuessTeam())
    } catch (err) {
        return badRequest(err.message)
    }
    }


export async function getTeamController(req) {
    try {
        return goodResponse200(await dbGetTeam(req)) 
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