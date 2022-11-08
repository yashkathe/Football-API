import axios from "axios";
import cheerio from "cheerio";

import { competitionCode } from "../endpoints/variable-codes";
import { endpoints } from "../endpoints/endpoints";
import type { isTeamInPointsTable } from "../types/types";

const getPointsTable = (competitionCode: string): Promise<isTeamInPointsTable[]> => {
    try {
        const endpoint: string = `${endpoints.competetion}/${competitionCode}/table`;
        let pointsTable: isTeamInPointsTable[] = [];
        //
        return new Promise(async (resolve, reject) => {
            const response = await axios(endpoint);
            const $ = cheerio.load(response.data);
            //
            $("li.standings__row").each(function () {
                const position: number = parseInt($(this).find("a:nth-child(1) > div:nth-child(1) > span:nth-child(1)").text());
                const team: string = $(this).find("a:nth-child(1) > div:nth-child(3) > p:nth-child(2)").text().trim();
                const gamesPlayed: number = parseInt($(this).find("a:nth-child(1) > div:nth-child(4) > span:nth-child(1)").text());
                const gamesWon: number = parseInt($(this).find("a:nth-child(1) > div:nth-child(5) > span:nth-child(1)").text());
                const gamesLost: number = parseInt($(this).find("a:nth-child(1) > div:nth-child(7) > span:nth-child(1)").text());
                const gamesDrawn: number = parseInt($(this).find("a:nth-child(1) > div:nth-child(6) > span:nth-child(1)").text());
                const goalDifference: number = parseInt($(this).find("a:nth-child(1) > div:nth-child(8) > span:nth-child(1)").text());
                const points: number = parseInt($(this).find("a:nth-child(1) > div:nth-child(9) > span:nth-child(1)").text());

                if (
                    !Number.isNaN(position) &&
                    team.length !== 0 &&
                    !Number.isNaN(gamesPlayed) &&
                    !Number.isNaN(gamesWon) &&
                    !Number.isNaN(gamesLost) &&
                    !Number.isNaN(gamesDrawn) &&
                    !Number.isNaN(goalDifference) &&
                    !Number.isNaN(points)
                ) {
                    const teamInPointsTable: isTeamInPointsTable = {
                        position,
                        team,
                        gamesPlayed,
                        gamesWon,
                        gamesLost,
                        gamesDrawn,
                        goalDifference,
                        points,
                    };
                    pointsTable.push(teamInPointsTable);
                }
            });
            resolve(pointsTable);
        });
    } catch (error: any) {
        throw new Error(error);
    }
};

export const premierLeagueStandings = async (): Promise<isTeamInPointsTable[]> => {
    return await getPointsTable(competitionCode.premierLeague);
};

export const laLigaStandings = async (): Promise<isTeamInPointsTable[]> => {
    return await getPointsTable(competitionCode.laliga);
};

export const serieAStandings = async (): Promise<isTeamInPointsTable[]> => {
    return await getPointsTable(competitionCode.serieA);
};

export const ligue1Standings = async (): Promise<isTeamInPointsTable[]> => {
    return await getPointsTable(competitionCode.ligue1);
};

export const bundesligaStandings = async (): Promise<isTeamInPointsTable[]> => {
    return await getPointsTable(competitionCode.bundesliga);
};
