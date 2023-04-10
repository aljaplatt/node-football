import query from "../../dbConfig/index.js"

export async function dbGetTeams(){
    const teams = await query(`SELECT * FROM teams;`)
    return teams.rows
}
