import { v4 as uuidv4 } from 'uuid'

export class Team {
    constructor(teamName,league, nation, manager, numLeagueTitles, established){
        this.teamName = teamName
        this.league = league
        this.nation = nation
        this.manager = manager
        this.numLeagueTitles = numLeagueTitles
        this.established = established
        this.anagram = teamName.toLowerCase().split('').sort().join('')
        this.id = uuidv4()
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