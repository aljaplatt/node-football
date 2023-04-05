import {getTeam} from "../teams.js";



describe('getTeam', () => {
    test('return Manchester United when given the correct id', () => {
        const reqObj = {
            params: {
                teamId: "cef6eef7-7a86-4574-bbba-3bd47d7f5434"
            }
        }
        const actual = getTeam(reqObj)
        const expected = {
            "team": {
                "teamName": "Manchester United",
                "League": "Premier League",
                "Nation": "England,",
                "manager": "Erik Ten Hag",
                "numLeagueTitles": 20,
                "established": 1878,
                "id": "cef6eef7-7a86-4574-bbba-3bd47d7f5434"
            }
        }

        expect(actual).toStrictEqual(expected);
    })
})
