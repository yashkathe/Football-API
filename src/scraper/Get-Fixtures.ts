// import axios from "axios";
// import cheerio from "cheerio";

// import { competitionCode } from "../endpoints/variable-codes";
// import { endpoints } from "../endpoints/endpoints";
// import type { isFixture } from "../types/types";

// export const getFixtures = (): Promise<isFixture[]> => {
//     try {
//         const endpoint: string = `${endpoints.competetion}/${competitionCode.premierLeague}/fixtures`;
//         let fixtures: isFixture[] = [];

//         return new Promise(async (resolve, reject) => {
//             const response = await axios(endpoint);
//             const $ = cheerio.load(response.data);

//             $("article.simple-match-card").each(function () {
//                 const homeTeam: string = $(this)
//                     .find("div > div.simple-match-card__teams-content > of-simple-match-card-team:nth-child(1) > div > span.title-8-medium.simple-match-card-team__name")
//                     .text();
//                 console.log(homeTeam);
//             });
//         });
//     } catch (error: any) {
//         throw new Error(error);
//     }
// };
