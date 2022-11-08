export interface isCompetitionCode {
    premierLeague: string;
    laliga: string;
    serieA: string;
    ligue1: string;
    bundesliga: string;
}

export interface isFixture {
    homeTeam: string;
    awayTeam: string;
    date: string;
}

export interface isTeamInPointsTable {
    position: number;
    team: string;
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    gamesDrawn: number;
    goalDifference: number;
    points: number;
}
