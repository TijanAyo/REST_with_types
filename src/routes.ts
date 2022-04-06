import {Express, Request, Response} from 'express'
import { createUserHandler } from './controller/user.controller'
import validate from './middleware/validate'
import { createUserSchema } from './schema/user.schema'

function routes(app: Express){
    app.get('/status', (req: Request, res: Response) =>{
        res.status(200).send('okay')
    })

    app.post('/api/v1/users', validate(createUserSchema), createUserHandler)
}

export default routes

//validate(createUserSchema),