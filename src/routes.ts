import {Express, Request, Response} from 'express'
import { getUserSessionHandler, sessionHandler } from './controller/session.controller'
import { createUserHandler } from './controller/user.controller'
import validate from './middleware/validate'
import { createUserSchema } from './schema/user.schema'
import { createSessionSchema } from './schema/session.schema'

function routes(app: Express){
    app.get('/status', (req: Request, res: Response) =>{
        res.status(200).send('okay')
    })

    app.post('/api/v1/users', validate(createUserSchema), createUserHandler)

    app.post('/api/v1/sessions', validate(createSessionSchema), sessionHandler)

    app.get('/api/v1/sessions', getUserSessionHandler)
}

export default routes

//validate(createUserSchema),