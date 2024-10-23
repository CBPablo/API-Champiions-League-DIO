import express,{json} from "express"
import { rout } from "../routes/routes";
import cors from 'cors'

function createApp(){
    const app = express();
    app.use(json());
    app.use("/api", rout)
    app.use(cors())
    return app;
}

export{createApp}

