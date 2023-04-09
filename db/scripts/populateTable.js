import query from "../index.js" 
import teams from "../../data.js";


async function populateTable(){
    for (let i = 0; i < teams.length; i++){
        const teamName = teams[i].teamName;
        const league = teams[i].league;
        const nation = teams[i].nation;
        const manager = teams[i].manager;
        const numLeagueTitles = teams[i].numLeagueTitles;
        const established = teams[i].established;
        const anagram = teams[i].anagram;
        const teamId = teams[i].teamId;
        const res = await query(`INSERT INTO teams (teamName, league, nation, manager, numLeagueTitles, established, anagram, teamId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING teamName`, [teamName,league,nation,manager,numLeagueTitles,established,anagram,teamId] );
        console.log("Table populated: ", res);
    }
}

populateTable()