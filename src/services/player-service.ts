import { response } from "express"
import { PlayerModel } from "../models/players-models"
import * as playersrepository from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"
import { statisticsModel } from "../models/statistics-model"

export const getPlayerService = async () => {

    const data = await playersrepository.findAllPlayers()
    let response = {}
    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await playersrepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null
    if (Object.keys(player)) {
        await playersrepository.insertPlayer(player)
        response = await HttpResponse.created()
    }
    if (Object.keys(player).length === 0) {
        await playersrepository.insertPlayer(player)
        response = await HttpResponse.noContent()
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null;

    const isDeleted = await playersrepository.deleteOnePlayer(id);
    if(isDeleted){
        response = await HttpResponse.ok({ message: "DELETED" });
    }else{
        response = await HttpResponse.badRequest()
    }

  
    return response
}

export const updatePlayerService = async (id: number, statistics: statisticsModel) => {
    const data = await playersrepository.findPlayerAndModify(id, statistics)
    let response = null;
    if (Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest()

    } else {
        response = await HttpResponse.ok(data)
    }
    return response
}
