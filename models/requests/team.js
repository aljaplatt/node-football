import { v4 as uuidv4 } from 'uuid'

export class Team {
    constructor(teamName,league, nation, manager, numLeagueTitles, established){
        if (!Boolean(teamName.trim())) {
            console.log(Boolean(teamName.trim()))
            console.log("teamname: ", teamName.trim())
            throw new Error('Must enter a valid team name')
        }
        this.teamName = teamName

        if (!league && !Boolean(league.trim())) {
            throw new Error('Must enter a valid league')
        }
        this.league = league

        if (!nation && !Boolean(nation.trim())) {
            throw new Error('Must enter a valid nation')
        }
        this.nation = nation

        if (!manager && !Boolean(manager.trim())) {
            throw new Error('Must enter a valid manager name')
        }
        this.manager = manager

        if (numLeagueTitles < 0) {
            console.log(numLeagueTitles)
            throw new Error('numLeagueTitles must not be a negative number')
        }
        this.numLeagueTitles = numLeagueTitles

        if (!established || established < 1800) {
            throw new Error('Must enter a year greater than 1800 for established')
        }
        this.established = established
        
        this.anagram = teamName.toLowerCase().split('').sort().join('')
        this.teamId = uuidv4()
    }

    

    // //todo - getter setter for id? 
    // setId(){
    //     this.id = uuidv4()
    // }

    // createAnagram(){
    //     // this.anagram = this.teamName.toLowerCase().split('').sort().join('')
    //     // console.log("this.anagram: ", this.anagram)
    //     // return this.anagram
    //     console.log(this.teamName)
    //     return this.teamName
    // }
}