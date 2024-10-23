import { Request,Response } from "express"
import * as HttpResponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repositories"

export const getClubService = async ()=>{
    const data = await repository.findAllClubs()
const response = await HttpResponse.ok(data)
return response;
};