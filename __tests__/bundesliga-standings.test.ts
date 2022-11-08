import { bundesligaStandings } from "../src/scraper/Get-PointsTable";

test("bundesliga standings", async () => {
    expect(await bundesligaStandings()).toMatchSnapshot();
});
