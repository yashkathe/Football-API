import { serieAStandings } from "../src/scraper/Get-PointsTable";

test("serieA standings", async () => {
    expect(await serieAStandings()).toMatchSnapshot();
});
