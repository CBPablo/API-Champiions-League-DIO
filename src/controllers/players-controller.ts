import { Request, Response } from "express"
import * as service from "../services/player-service";
import * as HttpResponse from "../models/http-response-model"
import { noContent } from "../utils/http-helper";
import { statisticsModel } from "../models/statistics-model";



export const getPlayer = async (req: Request, resp: Response) => {
    const HttpResponse = await service.getPlayerService()
    resp.status(HttpResponse.statusCode).json(HttpResponse.body);
};
export const getPlayerById = async (req: Request, resp: Response) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const HttpResponse = await service.getPlayerByIdService(id);
    resp.status(HttpResponse.statusCode).json(HttpResponse.body)
};

export const postPlayer = async (req: Request, resp: Response) => {
    const bodyValue = req.body;

    const HttpResponse = await service.createPlayerService(bodyValue)
    if (HttpResponse) {
        resp.status(HttpResponse.statusCode).json(HttpResponse.body)
    }
};


export const deletePlayer= async (req:Request,resp:Response)=>{
    const id = parseInt(req.params.id);
    const HttpResponse = await service.deletePlayerService(id)
    resp.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const updatePlayer= async(req:Request,resp:Response)=>{
    const id = parseInt(req.params.id);
    const bodyValue:statisticsModel = req.body
    const HttpResponse = await service.updatePlayerService(id,bodyValue);
    resp.status(HttpResponse.statusCode).json(HttpResponse.body)
}

