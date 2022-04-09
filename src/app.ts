import express, {Response, Request} from 'express'

import config from "config"
import Connect from "./utils/connect"
import routes from "./routes"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

 
const PORT = config.get<number>('port')

app.listen(PORT, async ()=>{
    console.log(`Server listening on Port: ${PORT}`)

    await Connect()

    routes(app)
})