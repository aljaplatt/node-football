import query from "../../dbConfig/index.js"

export async function dbGuessTeam(){
    let teams = await query(`SELECT * FROM teams;`)
        teams = teams.rows
        const randNum = Math.floor(Math.random() * teams.length);
        const randomTeam = teams[randNum]
        return {
            "teamid": randomTeam.teamid,
            "anagram" : randomTeam.anagram
            }
}