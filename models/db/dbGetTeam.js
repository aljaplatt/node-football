import query from "../../dbConfig/index.js"


export async function dbGetTeam(req){
    //* url params
    const teamId = req.params.teamId
    console.log("teamID", teamId)
    //* query params
    // console.log(req.query)
    // const teamId = req.query.teamId
    let requestedTeam = await query(`SELECT * FROM teams WHERE teamId = $1`, [teamId])
    requestedTeam = requestedTeam.rows
    console.log("requestedTeam: ", requestedTeam.length)
    if (requestedTeam.length) {
        return requestedTeam
    } else {
        throw new Error('Team ID does not exist')
    }  
}

