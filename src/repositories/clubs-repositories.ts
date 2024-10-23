import { ClubsModel } from "../models/clubs-models";
import { PlayerModel } from "../models/players-models";
import fs from "fs/promises"



const dataBase:ClubsModel[] =[
          {
            "id": 1,
            "name": "Bayern de Munique"
          },
          {
            "id": 2,
            "name": "Manchester United"
          },
          {
            "id": 3,
            "name": "FC Copenhague"
          },
          {
            "id": 4,
            "name": "Galatasaray"
          },
          {
            "id": 5,
            "name": "Arsenal"
          },
          {
            "id": 6,
            "name": "PSV Eindhoven"
          },
          {
            "id": 7,
            "name": "Sevilla"
          },
          {
            "id": 8,
            "name": "RC Lens"
          },
          {
            "id": 9,
            "name": "Real Madrid"
          },
          {
            "id": 10,
            "name": "Napoli"
          },
          {
            "id": 11,
            "name": "SC Braga"
          },
          {
            "id": 12,
            "name": "Union Berlin"
          },
          {
            "id": 13,
            "name": "Inter de Milão"
          },
          {
            "id": 14,
            "name": "Benfica"
          },
          {
            "id": 15,
            "name": "Real Sociedad"
          },
          {
            "id": 16,
            "name": "RB Salzburg"
          },
          {
            "id": 17,
            "name": "Feyenoord"
          },
          {
            "id": 18,
            "name": "Atlético de Madrid"
          },
          {
            "id": 19,
            "name": "Lazio"
          },
          {
            "id": 20,
            "name": "Celtic"
          },
          {
            "id": 21,
            "name": "Manchester City"
          },
          {
            "id": 22,
            "name": "RB Leipzig"
          },
          {
            "id": 23,
            "name": "Estrela Vermelha"
          },
          {
            "id": 24,
            "name": "Young Boys"
          },
          {
            "id": 25,
            "name": "Barcelona"
          },
          {
            "id": 26,
            "name": "Porto"
          },
          {
            "id": 27,
            "name": "Shakhtar Donetsk"
          },
          {
            "id": 28,
            "name": "Royal Antwerp"
          },
          {
            "id": 29,
            "name": "Paris Saint-Germain"
          },
          {
            "id": 30,
            "name": "Borussia Dortmund"
          },
          {
            "id": 31,
            "name": "AC Milan"
          },
          {
            "id": 32,
            "name": "Newcastle United"
          }
        ]
      
      
   
  

export const findAllClubs = async ():Promise<ClubsModel[]> =>{

  const data = await fs.readFile("src/data/clubs.json", "utf8")
  const clubs :ClubsModel[] = JSON.parse(data)
    return clubs;
}