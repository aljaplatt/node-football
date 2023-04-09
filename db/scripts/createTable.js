import query from "../index.js" 

const sqlString = `CREATE TABLE IF NOT EXISTS teams (id SERIAL PRIMARY KEY, teamName TEXT, league TEXT, nation TEXT, manager TEXT, numLeagueTitles  INT, established INT, anagram TEXT, teamId TEXT)`;

async function createTable(){
const res = await query(sqlString);
console.log("Table created: ", res);
}

createTable()