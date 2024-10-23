import {Request,Response}from "express"
import * as service from "../services/clubs-services"

export const getClubs = async (req:Request, resp:Response)=>{
    const response = await service.getClubService()
    resp.status(response.statusCode).json(response.body)
};