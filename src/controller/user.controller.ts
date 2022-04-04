import {Response, Request} from 'express'
import { CreateUserInput } from '../schema/user.schema'
import {createUser} from '../service/user.service'


export const createUserHandler = async (req: Request<{}, {}, CreateUserInput['body']>, res: Response) =>{
    try{
        const user = await createUser(req.body)
        return res.send(user)
    }
    catch(err){
       console.log(err)
       return res.status(409) 
    }
}