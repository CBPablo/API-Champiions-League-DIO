import { Router } from "express";
import * as playerController from "../controllers/players-controller";
import * as clubsController from "../controllers/clubs-controller";

const rout = Router()
rout.get("/players",playerController.getPlayer)
rout.get("/players/:id",playerController.getPlayerById)
rout.post("/players",playerController.postPlayer)
rout.delete("/players/:id",playerController.deletePlayer)
rout.patch("/players/:id",playerController.updatePlayer)


rout.get("/clubs",clubsController.getClubs)

export {rout}