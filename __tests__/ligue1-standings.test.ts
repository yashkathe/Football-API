import { serieAStandings } from "../src/scraper/Get-PointsTable";

test("ligue1 standings", async () => {
    expect(await serieAStandings()).toMatchSnapshot();
});
