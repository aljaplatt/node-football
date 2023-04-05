import {getTeams, sum} from "../teams.js";


// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });

describe('getTeams', () => {
  test('returns an object with message and teams properties', () => {
    const result = getTeams();

    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('teams');
  });

  test('message property is "success"', () => {
    const result = getTeams();

    expect(result.message).toBe('success');
  });

  test('teams property is an array with at least one team', () => {
    const result = getTeams();

    expect(Array.isArray(result.teams)).toBe(true);
    expect(result.teams.length).toBeGreaterThan(0);
  });

  test('the first team in the array has the correct properties and values', () => {
    const result = getTeams();
    const firstTeam = result.teams[0];

    expect(firstTeam).toHaveProperty('teamName', 'Manchester United');
    expect(firstTeam).toHaveProperty('League', 'Premier League');
    expect(firstTeam).toHaveProperty('Nation', 'England,');
    expect(firstTeam).toHaveProperty('manager', 'Erik Ten Hag');
    expect(firstTeam).toHaveProperty('numLeagueTitles', 20);
    expect(firstTeam).toHaveProperty('established', 1878);
  });
});