import { PlayerModel } from "../models/players-models";
import { statisticsModel } from "../models/statistics-model";


const dataBase:PlayerModel[] =[
    {
      "id": 1,
      "name": "Salah",
      "club": "Liverpool",
      "nationality": "Egypt",
      "position": "Forward",
      "statistics": {
        "Overall": 90,
        "Pace": 94,
        "Shooting": 87,
        "Passing": 81,
        "Dribbling": 89,
        "Defending": 45,
        "Physical": 75
      }
    },
    {
      "id": 2,
      "name": "Cristiano Ronaldo",
      "club": "Al-Nassr",
      "nationality": "Portugal",
      "position": "Forward",
      "statistics": {
        "Overall": 91,
        "Pace": 85,
        "Shooting": 92,
        "Passing": 81,
        "Dribbling": 85,
        "Defending": 34,
        "Physical": 78
      }
    },
    {
      "id": 3,
      "name": "Lionel Messi",
      "club": "Inter Miami",
      "nationality": "Argentina",
      "position": "Forward",
      "statistics": {
        "Overall": 92,
        "Pace": 80,
        "Shooting": 91,
        "Passing": 90,
        "Dribbling": 95,
        "Defending": 38,
        "Physical": 65
      }
    },
    {
      "id": 4,
      "name": "Kevin De Bruyne",
      "club": "Manchester City",
      "nationality": "Belgium",
      "position": "Midfielder",
      "statistics": {
        "Overall": 91,
        "Pace": 76,
        "Shooting": 86,
        "Passing": 93,
        "Dribbling": 87,
        "Defending": 60,
        "Physical": 78
      }
    },
    {
      "id": 5,
      "name": "Robert Lewandowski",
      "club": "Barcelona",
      "nationality": "Poland",
      "position": "Forward",
      "statistics": {
        "Overall": 91,
        "Pace": 78,
        "Shooting": 94,
        "Passing": 79,
        "Dribbling": 85,
        "Defending": 44,
        "Physical": 82
      }
    },
    {
      "id": 6,
      "name": "Neymar Jr",
      "club": "Al-Hilal",
      "nationality": "Brazil",
      "position": "Forward",
      "statistics": {
        "Overall": 91,
        "Pace": 88,
        "Shooting": 83,
        "Passing": 86,
        "Dribbling": 94,
        "Defending": 37,
        "Physical": 63
      }
    },
    {
      "id": 7,
      "name": "Kylian Mbappé",
      "club": "Paris Saint-Germain",
      "nationality": "France",
      "position": "Forward",
      "statistics": {
        "Overall": 92,
        "Pace": 97,
        "Shooting": 89,
        "Passing": 80,
        "Dribbling": 92,
        "Defending": 39,
        "Physical": 77
      }
    },
    {
      "id": 8,
      "name": "Erling Haaland",
      "club": "Manchester City",
      "nationality": "Norway",
      "position": "Forward",
      "statistics": {
        "Overall": 89,
        "Pace": 91,
        "Shooting": 93,
        "Passing": 65,
        "Dribbling": 80,
        "Defending": 40,
        "Physical": 88
      }
    },
    {
      "id": 9,
      "name": "Virgil van Dijk",
      "club": "Liverpool",
      "nationality": "Netherlands",
      "position": "Defender",
      "statistics": {
        "Overall": 90,
        "Pace": 78,
        "Shooting": 60,
        "Passing": 71,
        "Dribbling": 70,
        "Defending": 92,
        "Physical": 86
      }
    },
    {
      "id": 10,
      "name": "Joshua Kimmich",
      "club": "Bayern Munich",
      "nationality": "Germany",
      "position": "Midfielder",
      "statistics": {
        "Overall": 89,
        "Pace": 70,
        "Shooting": 72,
        "Passing": 88,
        "Dribbling": 84,
        "Defending": 85,
        "Physical": 77
      }
    },
    {
      "id": 11,
      "name": "Luka Modric",
      "club": "Real Madrid",
      "nationality": "Croatia",
      "position": "Midfielder",
      "statistics": {
        "Overall": 88,
        "Pace": 72,
        "Shooting": 75,
        "Passing": 90,
        "Dribbling": 88,
        "Defending": 70,
        "Physical": 65
      }
    },
    {
      "id": 12,
      "name": "Alisson Becker",
      "club": "Liverpool",
      "nationality": "Brazil",
      "position": "Goalkeeper",
      "statistics": {
        "Overall": 89,
        "Pace": 50,
        "Shooting": 30,
        "Passing": 60,
        "Dribbling": 70,
        "Defending": 90,
        "Physical": 85
      }
    },
    {
      "id": 13,
      "name": "Gianluigi Donnarumma",
      "club": "Paris Saint-Germain",
      "nationality": "Italy",
      "position": "Goalkeeper",
      "statistics": {
        "Overall": 89,
        "Pace": 52,
        "Shooting": 32,
        "Passing": 58,
        "Dribbling": 70,
        "Defending": 91,
        "Physical": 82
      }
    },
    {
      "id": 14,
      "name": "Bruno Fernandes",
      "club": "Manchester United",
      "nationality": "Portugal",
      "position": "Midfielder",
      "statistics": {
        "Overall": 88,
        "Pace": 72,
        "Shooting": 84,
        "Passing": 89,
        "Dribbling": 85,
        "Defending": 65,
        "Physical": 72
      }
    },
    {
      "id": 15,
      "name": "Casemiro",
      "club": "Manchester United",
      "nationality": "Brazil",
      "position": "Midfielder",
      "statistics": {
        "Overall": 89,
        "Pace": 65,
        "Shooting": 75,
        "Passing": 78,
        "Dribbling": 75,
        "Defending": 89,
        "Physical": 90
      }
    },
    {
      "id": 16,
      "name": "Karim Benzema",
      "club": "Al-Ittihad",
      "nationality": "France",
      "position": "Forward",
      "statistics": {
        "Overall": 90,
        "Pace": 80,
        "Shooting": 90,
        "Passing": 83,
        "Dribbling": 86,
        "Defending": 42,
        "Physical": 78
      }
    },
    {
      "id": 17,
      "name": "Son Heung-min",
      "club": "Tottenham Hotspur",
      "nationality": "South Korea",
      "position": "Forward",
      "statistics": {
        "Overall": 89,
        "Pace": 89,
        "Shooting": 87,
        "Passing": 82,
        "Dribbling": 86,
        "Defending": 47,
        "Physical": 75
      }
    },
    {
      "id": 18,
      "name": "Sadio Mané",
      "club": "Al-Nassr",
      "nationality": "Senegal",
      "position": "Forward",
      "statistics": {
        "Overall": 88,
        "Pace": 91,
        "Shooting": 84,
        "Passing": 79,
        "Dribbling": 88,
        "Defending": 42,
        "Physical": 76
      }
    },
    {
      "id": 19,
      "name": "Sergio Ramos",
      "club": "Sevilla",
      "nationality": "Spain",
      "position": "Defender",
      "statistics": {
        "Overall": 87,
        "Pace": 70,
        "Shooting": 60,
        "Passing": 70,
        "Dribbling": 65,
        "Defending": 88,
        "Physical": 85
      }
    },
    {
      "id": 20,
      "name": "Ederson Moraes",
      "club": "Manchester City",
      "nationality": "Brazil",
      "position": "Goalkeeper",
      "statistics": {
        "Overall": 89,
        "Pace": 55,
        "Shooting": 30,
        "Passing": 75,
        "Dribbling": 70,
        "Defending": 88,
        "Physical": 82
      }
    },
    {
      "id": 21,
      "name": "Kalidou Koulibaly",
      "club": "Al-Hilal",
      "nationality": "Senegal",
      "position": "Defender",
      "statistics": {
        "Overall": 88,
        "Pace": 78,
        "Shooting": 50,
        "Passing": 67,
        "Dribbling": 65,
        "Defending": 90,
        "Physical": 86
      }
    },
    {
      "id": 22,
      "name": "Toni Kroos",
      "club": "Real Madrid",
      "nationality": "Germany",
      "position": "Midfielder",
      "statistics": {
        "Overall": 88,
        "Pace": 55,
        "Shooting": 82,
        "Passing": 91,
        "Dribbling": 81,
        "Defending": 68,
        "Physical": 68
      }
    },
    {
      "id": 23,
      "name": "Paul Pogba",
      "club": "Juventus",
      "nationality": "France",
      "position": "Midfielder",
      "statistics": {
        "Overall": 87,
        "Pace": 71,
        "Shooting": 77,
        "Passing": 83,
        "Dribbling": 86,
        "Defending": 72,
        "Physical": 85
      }
    },
    {
      "id": 24,
      "name": "Thiago Silva",
      "club": "Chelsea",
      "nationality": "Brazil",
      "position": "Defender",
      "statistics": {
        "Overall": 86,
        "Pace": 61,
        "Shooting": 45,
        "Passing": 73,
        "Dribbling": 70,
        "Defending": 89,
        "Physical": 78
      }
    },
    {
      "id": 25,
      "name": "Marco Verratti",
      "club": "Al-Arabi",
      "nationality": "Italy",
      "position": "Midfielder",
      "statistics": {
        "Overall": 87,
        "Pace": 64,
        "Shooting": 70,
        "Passing": 89,
        "Dribbling": 88,
        "Defending": 80,
        "Physical": 66
      }
    },
    {
      "id": 26,
      "name": "Gerard Piqué",
      "club": "Retired",
      "nationality": "Spain",
      "position": "Defender",
      "statistics": {
        "Overall": 85,
        "Pace": 56,
        "Shooting": 60,
        "Passing": 75,
        "Dribbling": 65,
        "Defending": 88,
        "Physical": 81
      }
    },
    {
      "id": 27,
      "name": "Raheem Sterling",
      "club": "Chelsea",
      "nationality": "England",
      "position": "Forward",
      "statistics": {
        "Overall": 87,
        "Pace": 92,
        "Shooting": 81,
        "Passing": 77,
        "Dribbling": 88,
        "Defending": 44,
        "Physical": 68
      }
    },
    {
      "id": 28,
      "name": "Phil Foden",
      "club": "Manchester City",
      "nationality": "England",
      "position": "Midfielder",
      "statistics": {
        "Overall": 86,
        "Pace": 82,
        "Shooting": 80,
        "Passing": 84,
        "Dribbling": 90,
        "Defending": 50,
        "Physical": 60
      }
    },
    {
      "id": 29,
      "name": "Pedri",
      "club": "Barcelona",
      "nationality": "Spain",
      "position": "Midfielder",
      "statistics": {
        "Overall": 85,
        "Pace": 79,
        "Shooting": 74,
        "Passing": 85,
        "Dribbling": 88,
        "Defending": 61,
        "Physical": 65
      }
    },
    {
      "id": 30,
      "name": "Jude Bellingham",
      "club": "Real Madrid",
      "nationality": "England",
      "position": "Midfielder",
      "statistics": {
        "Overall": 86,
        "Pace": 82,
        "Shooting": 77,
        "Passing": 82,
        "Dribbling": 84,
        "Defending": 78,
        "Physical": 79
      }
    },
    {
      "id":111,
      "name": "Marcus Pablo Lins de Lima",
      "club": "Barcelona",
      "nationality": "Brazil",
      "position": "Forward",
      "statistics": {
        "Overall": 150,
        "Pace": 150,
        "Shooting": 150,
        "Passing": 150,
        "Dribbling": 150,
        "Defending": 150,
        "Physical": 150
      }
    }
  ]
  ;

const findAllPlayers = async ():Promise<PlayerModel[]> =>{
    return dataBase;
}

const findPlayerById = async (id:number):Promise<PlayerModel | undefined> =>{
    return dataBase.find((player) => player.id === id)
}

export const insertPlayer = async(player: PlayerModel)=> {
   dataBase.push(player)
}

export const deleteOnePlayer = async (id:number)=>{
const index = dataBase.findIndex(p =>p.id === id);
if(index !== -1){
  dataBase.splice(index,1)
  return true
}else{
  return false
}

}

export const  findPlayerAndModify = async(id:number,statistics:statisticsModel):Promise<PlayerModel>=>{
const playerIndex = dataBase.findIndex(player=> player.id === id);
if(playerIndex !== -1){
  dataBase[playerIndex].statistics = statistics
}

return dataBase[playerIndex]
}


export {
  findAllPlayers,
  findPlayerById
}