import query from "../../dbConfig/index.js"

export async function dbAddTeam(newTeam){
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

    return newTeam
}