import { premierLeagueStandings } from "../src/scraper/Get-PointsTable";

test("Premier League standings", async () => {
    expect(await premierLeagueStandings()).toMatchSnapshot();
});
