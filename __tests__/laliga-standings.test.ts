import { laLigaStandings } from "../src/scraper/Get-PointsTable";

test("laliga standings", async () => {
    expect(await laLigaStandings()).toMatchSnapshot();
});
