import { createApp } from "./controllers/app"

const app = createApp()

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`🔥 O servidor foi iniciado na porta ${port}`)
})