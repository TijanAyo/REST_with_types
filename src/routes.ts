import {Express, Request, Response} from 'express'

function routes(app: Express){
    app.get('/status', (req: Request, res: Response) =>{
        res.status(200).send('okay')
    })
}

export default routes